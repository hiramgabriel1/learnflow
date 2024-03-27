<script lang="ts">
  import "../../app.css";
  import "../../main.styles.css";
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";

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
        `http://localhost:4000/api/v1/generate-image/${formData.type}`,
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
        "https://learnflow-services.up.railway.app/api/v1/generate-image/paint",
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
        "http://localhost:4000/api/v1/generate-image/cartoon",
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

<div class="app-container">
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">Learnflow AI</p>
      <div class="search-wrapper">
        <!-- ? search input -->
        <input
          class="search-input feather feather-search"
          type="text"
          placeholder="Buscar"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div class="app-header-right gap-3">
      <!-- ? dark mode -->
      <!-- <button class="mode-switch" title="Switch Theme"> -->
      <!-- <svg -->
      <!-- class="moon" -->
      <!-- fill="none" -->
      <!-- stroke="currentColor" -->
      <!-- stroke-linecap="round" -->
      <!-- stroke-linejoin="round" -->
      <!-- stroke-width="2" -->
      <!-- width="24" -->
      <!-- height="24" -->
      <!-- viewBox="0 0 24 24" -->
      <!-- > -->
      <!-- <defs></defs> -->
      <!-- <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path> -->
      <!-- </svg> -->
      <!-- </button> -->

      <!-- ? button add -->
      <a class="add-btn" href="/estudiar">
        <svg
          class="btn-icon feather feather-plus"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" /></svg
        >
      </a>

      <!-- ? notifications -->
      <!-- <button class="notification-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg
        >
      </button> -->

      <!-- ? profile button -->
      <button class="profile-btn">
        <span>Hiram Gabriel</span>
      </button>
    </div>
  </div>
  <div class="app-content">
    <div class="app-sidebar">
      <!-- <Tooltip> -->
      <a href="/dashboard" class="app-sidebar-link" title="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          height="24"
          width="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          />
        </svg>
      </a>
      <a href="/estudiar" class="app-sidebar-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="24"
          width="24"
        >
          <path
            d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
          />
        </svg>
      </a>
      <a href="/asistente" class="app-sidebar-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="24"
          width="24"
        >
          <path
            d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"
          />
        </svg>
      </a>
      <a href="/configuracion" class="app-sidebar-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="24"
          width="24"
        >
          <path
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
          />
        </svg>
      </a>
      <a href="/image-generator" class="app-sidebar-link active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="24"
          width="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"
          />
        </svg>
      </a>
    </div>

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
  </div>
</div>
