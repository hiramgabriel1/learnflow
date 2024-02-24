<script lang="ts">
  import "../../app.css";
  import "../../main.styles.css";
  import toast, { Toaster } from "svelte-french-toast";

  let currentDate = new Date();
  let disabled: boolean;
  let image = "";

  interface FormData {
    prompt: string;
  }

  let formData: FormData = {
    prompt: "",
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
      toast.error("no puedes ingresar eso")
      formData.prompt = "";
    }
    if (inputValue === '') {
      toast.error("no puedes dejar vacio")
      // return
      disabled = true;
    } else {
      disabled = false;
    }
  };

  const generateImageRealistic = async () => {
    sending = true;
    toast.success("Esto puede tardar unos segundos... 🧠");
    try {
      const sendRequest = await fetch(
        "https://learnflow-services.up.railway.app/api/v1/generate-image/realistic",
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
      console.log(responseMarcyAI);
      marcyIsResponse = true;
      image = responseMarcyAI.url;
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
      console.log(responseMarcyAI);

      marcyIsResponse = true;
      console.log(sendRequest);
      console.log(typeof sendRequest);
    } catch (error) {
      console.error(error);
    }
  };

  const generateImageCartoon = async () => {
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
      console.log(responseMarcyAI);

      marcyIsResponse = true;
      console.log(sendRequest);
      console.log(typeof sendRequest);
    } catch (error) {
      console.error(error);
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
    <div class="app-header-right">
      <!-- ? dark mode -->
      <button class="mode-switch" title="Switch Theme">
        <svg
          class="moon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>

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
      <button class="notification-btn">
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
      </button>

      <!-- ? profile button -->
      <button class="profile-btn">
        <span>Hiram Gabriel</span>
      </button>
    </div>
  </div>
  <div class="app-content">
    <div class="app-sidebar">
      <a href="/dashboard" class="app-sidebar-link active" title="home">
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
          class="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg
        >
      </a>
      <a href="/estudiar" class="app-sidebar-link">
        <svg
          class="link-icon feather feather-pie-chart"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <defs />
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
        </svg>
      </a>
      <a href="/asistente" class="app-sidebar-link">
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
          class="feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" /></svg
        >
      </a>
      <a href="/configuracion" class="app-sidebar-link">
        <svg
          class="link-icon feather feather-settings"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <defs />
          <circle cx="12" cy="12" r="3" />
          <path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
          />
        </svg>
      </a>
    </div>

    <!-- todo: menu index -->
    <div class="projects-section overflow-auto">
      <div class="projects-section-header overflow-auto">
        <!-- <p>Fecha</p> -->
        <p class="time">{currentDate.toLocaleDateString()}</p>
      </div>

      <br /><br />

      <!-- index todo -->
      <div class="max-w-7xl mx-auto py-12 px-4">
        <form on:submit|preventDefault={generateImageRealistic}>
          <h1 class="text-4xl font-bold mb-4">Genera una imagen con AI</h1>
          <p class="mb-6">
            Introduce una breve descripción y generaremos una imagen para ti. <br
            />
          </p>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
            bind:value={formData.prompt}
            placeholder="Describe la imagen que quieras generar"
            on:input={handleInputChange}
            required
          />
          <button
            class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full bg-blue-600 text-white py-2 rounded-md"
            >Generar imágen</button
          >
        </form>
        <section class="mt-10">
          <div class="flex space-x-2 mb-6">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-1 rounded-md"
              >All</button
            ><button
              class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-1 rounded-md"
              >Custom Style</button
            ><button
              class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-1 rounded-md"
              >Photo-realistic</button
            >
          </div>
          <h2 class="text-2xl font-bold mb-4">Recientes</h2>
          <div class="grid grid-cols-3 gap-4">
            <img
              src={image}
              alt="Gallery item 1"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 2"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 3"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 4"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 5"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 6"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 7"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 8"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            /><img
              src="/placeholder.svg"
              alt="Gallery item 9"
              class="w-full h-auto rounded-md"
              width="200"
              height="200"
              style="aspect-ratio: 200 / 200; object-fit: cover;"
            />
          </div>
        </section>
      </div>
      <!-- finish -->
    </div>
  </div>
</div>
