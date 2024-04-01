<script lang="ts">
  export let data;
  const { user } = data;

  import "../../app.css";
  import "../../main.styles.css";
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { envDataConf } from "../../server/server";
  import LayoutInitial from "../../components/LayoutInitial.svelte";
  import { generateImageAi } from "../tasks/generateImage";
  import type {
    MessageImageResponse,
    SendFormDataImageAiInterface,
  } from "../types/imageTypes";
  import { writable } from "svelte/store";

  let currentDate = new Date();
  let disabled: boolean;
  // let image = "";
  let listImages = writable<MessageImageResponse[]>([]);
  let showLoading: boolean;

  let formData: SendFormDataImageAiInterface = {
    prompt: "",
    type: "realistic",
  };

  let responseMarcyAI: any;
  let marcyIsResponse: boolean;
  let sending: boolean;

  const forbiddenWords = [
    "porno",
    "pornografia",
    "pornografía",
    "porn",
    "niño",
    "niña",
    "pene",
    "tetas",
    "senos",
    "vagina",
    "sexual",
    "sexo",
    "sexual",
    "desnudo",
    "desnuda",
    "sin ropa",
    "nude",
    "nudes",
  ];
  const handleInputChange = async (e: Event) => {
    // @ts-ignore
    const inputValue = e.target.value.toLowerCase().trim();

    const containsForbiddenWord = forbiddenWords.some((word) =>
      inputValue.includes(word.toLowerCase())
    );

    if (containsForbiddenWord) {
      toast.error("no puedes ingresar eso");
      formData.prompt = "";
    }
    if (inputValue === "") {
      toast.error("no puedes dejar vacio");
      // return
      disabled = true;
    } else {
      disabled = false;
    }
  };

  const generateImage = () => {
    toast.success("Generando imagen, esto puede tardar unos segundos... 🧠");
    disabled = true;
    showLoading = true;
    sending = true;

    generateImageAi(formData)
      .then((resp) => {
        marcyIsResponse = true;

        let getDataStorage = localStorage.getItem("imagesGenerates");
        let storageDataArray: MessageImageResponse[] = getDataStorage
          ? JSON.parse(getDataStorage)
          : [];
        storageDataArray.unshift(resp);

        localStorage.setItem(
          "imagesGenerates",
          JSON.stringify(storageDataArray)
        );
        listImages.update((images) => [resp, ...images]);
      })
      .catch((err) => {
        toast.error("Upps, ha ocurrido un error al generar la imagen... 🧠");
        marcyIsResponse = false;
      })
      .finally(() => {
        disabled = false;
        showLoading = false;
        sending = false;
      });
  };

  onMount(() => {
    let getDataStorage = localStorage.getItem("imagesGenerates");
    if (getDataStorage) {
      listImages.update(
        () => JSON.parse(getDataStorage as string) as MessageImageResponse[]
      );
    }
  });
</script>

<Toaster />

<LayoutInitial {user}>
  <!-- todo: menu index -->
  <div class="projects-section overflow-auto h-fit">
    <div class="projects-section-header overflow-auto">
      <!-- <p>Fecha</p> -->
      <p class="time">{currentDate.toLocaleDateString()}</p>
    </div>

    <br /><br />

    <!-- index todo -->
    <div class="max-w-7xl mx-auto py-12 px-4">
      <form on:submit|preventDefault={generateImage}>
        <h1 class="text-4xl font-bold mb-4">Genera una imagen con AI</h1>
        <p class="mb-6">
          Introduce una breve descripción y generaremos una imagen para ti. <br
          />
        </p>
        <input
          class=" flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
          bind:value={formData.prompt}
          placeholder="Describe la imagen que quieras generar"
          on:input={handleInputChange}
          required
        />
        <div class="flex gap-3 items-center mb-4 justify-end">
          <span class="font-semibold">Tipo: </span>
          <select
            name=""
            id=""
            bind:value={formData.type}
            class="flex h-10 w-fit rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="realistic">Realismo</option>
            <option value="paint">Pintura</option>
            <option value="cartoon">Caricatura</option>
          </select>
        </div>
        {#if !disabled}
          <button
            class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Generar imágen
          </button>
        {:else if showLoading}
          <div class="flex justify-center items-center h-full">
            <img
              class="h-10 w-10"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt=""
            />
          </div>
        {/if}
      </form>
      <section class="mt-10 pb-10">
        <!-- content here -->
        <h2 class="text-2xl font-bold mb-4">Recientes</h2>
        <div class="grid grid-cols-3 gap-4 gap-y-10">
          {#each $listImages as image}
            <div class="flex flex-col items-center gap-2">
              <img
                src={image.url}
                alt="Gallery item 1"
                class="w-full h-auto rounded-md"
                width="200"
                height="200"
                style="aspect-ratio: 200 / 200; object-fit: cover;"
              />

              <!-- render name file -->
              {#if !image.original_filename || typeof image.original_filename !== "undefined"}
                <h4 class="text-xs font-semibold">
                  {#if image.original_filename.length > 20}
                    imagen generada
                    <!-- {image.original_filename.replace(/_/g, " ")} -->
                  {/if}
                </h4>
              {:else}
                <h4>nombre error</h4>
              {/if}
            </div>
          {/each}
        </div>
      </section>
    </div>
    <!-- finish -->
  </div>
</LayoutInitial>
