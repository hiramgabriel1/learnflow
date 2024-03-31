<script lang="ts">
  export let data;
  const { user } = data;
  
  import "../../app.css";
  import "../../main.styles.css";
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { envDataConf } from "../../server/server";
  import LayoutInitial from "../../components/LayoutInitial.svelte";

  let currentDate = new Date();
  let disabled: boolean;
  let image = "";
  let showLoading: boolean;

  interface FormData {
    prompt: string;
    type: string;
  }

  let formData: FormData = {
    prompt: "",
    type: "realistic",
  };

  let responseMarcyAI: any;
  let marcyIsResponse: boolean;
  let sending: boolean;

  const forbiddenWords = [
    "porno",
    "porn",
    "niño",
    "niña",
    "pene",
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

  const generateImageRealistic = async () => {
    disabled = true;
    showLoading = true;
    sending = true;

    toast.success("Generando imagen, esto puede tardar unos segundos... 🧠");
    try {
      const sendRequest = await fetch(
        `${envDataConf.URLBACK}/generate-image/${formData.type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      // validate
      if (!sendRequest.ok) {
        throw new Error(`Error en la solicitud: ${sendRequest.statusText}`);
      }

      responseMarcyAI = await sendRequest.json();
      formData.prompt = "";
      sending = false;
      marcyIsResponse = true;
      showLoading = false;
      image = responseMarcyAI.url;

      console.log(responseMarcyAI);
      console.log(sendRequest);
      console.log(typeof sendRequest);
    } catch (error) {
      console.error(error);
    }
  };

  const generateImagePaint = async () => {
    sending = true;
    toast.success("Esto puede tardar unos segundos... 🧠");
    try {
      const sendRequest = await fetch(
        `${envDataConf.URLBACK}/generate-image/paint`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      // validate
      if (!sendRequest) {
        toast.error("Intente de nuevo más tarde! ❌");
      }

      responseMarcyAI = await sendRequest.json();
      formData.prompt = "";
      sending = false;
      showLoading = false;
      marcyIsResponse = true;
      image = responseMarcyAI.url;
      showLoading = false;

      console.log(responseMarcyAI);
      console.log(sendRequest);
      console.log(typeof sendRequest);
    } catch (error) {
      console.error(error);
    }
  };

  const generateImageCartoon = async () => {
    disabled = true;
    showLoading = true;
    sending = true;
    toast.success("Esto puede tardar unos segundos... 🧠");
    try {
      const sendRequest = await fetch(
        `${envDataConf.URLBACK}/generate-image/cartoon`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      // validate
      if (!sendRequest) {
        toast.error("Intente de nuevo más tarde! ❌");
      }

      responseMarcyAI = await sendRequest.json();
      formData.prompt = "";
      sending = false;
      marcyIsResponse = true;
      image = responseMarcyAI.url;
      showLoading = false;

      console.log(responseMarcyAI);
      console.log(sendRequest);
      console.log(typeof sendRequest);
    } catch (error) {
      console.error(error);
    }
  };

  const generateImage = () => {
    console.log("Generando imagen...");
    if (formData.type === "cartoon") {
      console.log("Generar imagen de estilo cartoon");
      generateImageCartoon();
    } else if (formData.type === "realistic") {
      console.log("Generar imagen de estilo realista");
      generateImageRealistic();
    } else if (formData.type === "paint") {
      generateImagePaint();
    } else {
      console.log("error");
    }
  };
</script>

<Toaster />

<LayoutInitial user={user}>
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
        {#if image}
          <!-- content here -->
          <h2 class="text-2xl font-bold mb-4">Recientes</h2>
          <div class="grid grid-cols-3 gap-4">
            <img
              src={image}
              alt="Gallery item 1"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            />
          </div>
        {/if}
      </section>
    </div>
    <!-- finish -->
  </div>
</LayoutInitial>
