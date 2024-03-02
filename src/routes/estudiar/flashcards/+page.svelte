<script lang="ts">
  import "../../../app.css";
  import "../../../main.styles.css";
  import "./styles.css";
  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";

  // @ts-ignore
  let recognition;
  let recognizedText = "";

  let formData = {
    requestText: "",
  };

  let questionIA = "";
  let responseIA = "";
  //@ts-ignore
  let respuestaApi: any[] = [];
  const saveResponseVoice = async () => {
    try {
      let newFormData = {
        responseUserToFlashcard: (formData.requestText = recognizedText),
      };

      console.log(newFormData);

      const validateResponseVoiceWithAnswerAI = await fetch(
        "https://learnflow-services.up.railway.app/api/v1/flashcard/send-response-voice/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newFormData),
        }
      );

      if (validateResponseVoiceWithAnswerAI.ok) {
        toast.success("procesando tu respuesta... 🧠");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //@ts-ignore
  // respuestaApi = JSON.parse(localStorage.getItem("respuestaApi")) || [];

  var expresionRegular = /\[([^[\]]*)\]/;
  var expresion = expresionRegular.exec(
    localStorage.getItem("response")?.toString() || ""
  );
  // @ts-ignore
  if (expresion && expresion.length > 1) {
    try {
      const parseJson = JSON.parse(
        JSON.parse(
          JSON.stringify("[" + expresion[1].replace(/\n/g, "").trim() + "]")
        )
      );
      respuestaApi = parseJson;
    } catch (err) {
      console.log(err);
    }
  }

  // Esta función se ejecutará cuando el componente se monte
  onMount(() => {
    // Obtenemos los datos de localStorage
    questionIA = localStorage.getItem("question") || "";
    responseIA = localStorage.getItem("response") || "";
    // Dividimos la respuesta en un array de preguntas
    // respuestaApi = responseIA.split("\n");
    // Actualizamos localStorage con el nuevo valor de respuestaApi
    localStorage.setItem("respuestaApi", JSON.stringify(respuestaApi));
  });

  // @ts-ignore
  const sendResponseVoiceUser = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      // @ts-ignore
      recognition = new (window.SpeechRecognition ||
        // @ts-ignore
        window.webkitSpeechRecognition)();

      recognition.lang = "es-ES"; // Establecer el idioma
      recognition.interimResults = true; // Obtener resultados provisionales

      recognition.onstart = () => {
        console.log("Reconocimiento de voz iniciado");
      };

      // @ts-ignore
      recognition.onresult = (event) => {
        recognizedText = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join("");
      };

      // @ts-ignore
      recognition.onerror = (event) => {
        console.error("Error de reconocimiento de voz:", event.error);
      };

      // Iniciar el reconocimiento de voz
      recognition.start();
    } else {
      console.error("El navegador no soporta la Web Speech API");
    }
  };

  // @ts-ignore
  const stopRecognition = () => {
    // @ts-ignore
    if (recognition) {
      // @ts-ignore
      recognition.stop();
      saveResponseVoice();
    }
  };

  const saveFlashCardToUser = async () => {
    console.log("funciona");
  };

  // flashcards
  // const flashCards = [
  //   {
  //     pregunta: "¿Como ser programador web?",
  //     respuesta:
  //       "- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione magni ullam repudiandae cupiditate earum quibusdam debitis, enim, ab ipsum dignissimos eaque in quisquam commodi deserunt asperiores quo veritatis ut doloribus.",
  //   },
  // ];

  // let currentIndex = 0;

  // const showCurrentFlashCard = () => {
  //   const currentCard = flashCards[currentIndex];
  //   console.log("Pregunta:", currentCard.pregunta);
  //   console.log("Respuesta:", currentCard.respuesta);
  // };

  // const nextFlashCard = () => {
  //   currentIndex++;
  //   if (currentIndex >= flashCards.length) {
  //     currentIndex = 0;
  //   }
  //   showCurrentFlashCard();
  // };

  // const nextButton = document.querySelector("#nextButton");
  // // @ts-ignore
  // nextButton.addEventListener("click", nextFlashCard);

  // showCurrentFlashCard();

  const itemSelection = null;
  console.log(respuestaApi);
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
      <!-- <button class="mode-switch" title="Switch Theme">
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
      </button> -->

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
      <!-- <button class="notification-btn"> -->
        <!-- <svg -->
          <!-- xmlns="http://www.w3.org/2000/svg" -->
          <!-- width="24" -->
          <!-- height="24" -->
          <!-- viewBox="0 0 24 24" -->
          <!-- fill="none" -->
          <!-- stroke="currentColor" -->
          <!-- stroke-width="2" -->
          <!-- stroke-linecap="round" -->
          <!-- stroke-linejoin="round" -->
          <!-- class="feather feather-bell" -->
        <!-- > -->
          <!-- <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /> -->
          <!-- <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg -->
        <!-- > -->
      <!-- </button> -->

      <!-- ? profile button -->
      <button class="profile-btn">
        <!-- <img src="https://assets.codepen.io/3306515/IMG_2025.jpg"/> -->
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
    <div class="projects-section flex items-left h-fit">
      <div class="projects-section-header">
        <p class="text-center font-bolder">Selecciona una tarjeta</p>
      </div>
      <br /><br />

      <article class="flex mx-5">
        <section class="mx-5">
          <section
            class="flex flex-wrap h-full gap-5 items-center justify-around pb-10"
          >
            <div
              class="grid grid-cols-[auto_1fr_auto] gap-2 w-[60%] border-2 max-h-96 h-fit min-h-60
                 border-zinc-200 overflow-hidden rounded-xl"
            >
              <img
                height="300"
                width="300"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
                alt=""
                class="h-full bg-slate-600 rounded-xl object-cover"
              />
              <div class="h-full overflow-auto flex flex-col gap-3 py-2">
                <h1 class="text-lg font-semibold text-slate-900">
                  Como ser programador?
                </h1>
                <p class=" text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur dolore, eligendi maxime facilis architecto
                  lorem90
                </p>
              </div>
              <div class="flex items-center px-2">
                <button
                  class="bg-slate-900 rounded-full p-2 text-slate-50 hover:scale-105"
                >
                  <svg
                    class="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    ><g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      ><rect width="8" height="13" x="8" y="2" rx="4" /><path
                        d="M18 16.292A7.98 7.98 0 0 1 12 19a7.98 7.98 0 0 1-6-2.708M12 19v3m-2 0h4"
                      /></g
                    ></svg
                  >
                </button>
              </div>
            </div>
            {#each respuestaApi as pregunta, index}
              <div
                class="  max-h-[50%] h-60 flex-1 cursor-pointer
                  overflow-hidden rounded-xl
                 group min-w-[25%] [perspective:1000px]"
              >
                <div
                  class="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >
                  <div
                    class="absolute inset-0 p-8 bg-amber-400 bg-opacity-10 rounded-xl"
                  >
                    <div class="flex flex-col justify-between h-full">
                      <h1
                        class="absolute mt-auto font-light text-2xl leading-9 text-slate-900 block"
                      >
                        <!-- content here -->
                        {#if pregunta}
                          <!-- content here -->
                          {pregunta?.pregunta}
                        {/if}
                      </h1>
                    </div>
                  </div>
                  <div
                    class="absolute inset-0 h-full w-full rounded-xl bg-[#fdfcf7] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                  >
                    <div class="flex flex-col justify-between h-full">
                      <div class="mt-auto space-y-4">
                        <p class="text-[#16453a] text-lg font-light leading-5">
                          {pregunta?.pregunta}
                        </p>
                        <p class="text-[#16453a] text-lg font-light leading-5">
                          {pregunta?.respuesta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {#if index === 0}
                <div
                  class="grid grid-rows-[1fr_auto] gap-2 w-[60%] border-2 h-fit min-h-60 max-h-60 max-h-[50%]
                 border-zinc-200 overflow-hidden rounded-xl"
                >
                  <div class="h-full overflow-auto flex flex-col gap-3 p-2">
                    <h1 class="text-lg font-semibold text-slate-900">
                      Como ser programador?
                    </h1>
                    <p class=" text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur dolore, eligendi maxime facilis architecto
                      lorem90 Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Dolor, expedita iste neque fuga cumque iusto tempora
                      magni quaerat dicta atque? Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Animi illo a, ratione
                      cupiditate quibusdam omnis deleniti, ex, neque corrupti
                      magnam nostrum accusamus! Commodi eaque cum atque
                      asperiores obcaecati totam sunt.
                    </p>
                  </div>
                  <div class="grid grid-cols-[1fr_auto] px-3 pb-2 gap-2">
                    <div class="relative bg-slate-300 rounded-full h-full">
                      <input
                        type="text"
                        class="w-full outline-none px-3 bg-transparent h-full pe-10"
                      />
                      <svg
                        class="absolute right-0 h-10 top-1 text-blue-700 hover:scale-105 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        ><path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M3.402 6.673c-.26-2.334 2.143-4.048 4.266-3.042l11.944 5.658c2.288 1.083 2.288 4.339 0 5.422L7.668 20.37c-2.123 1.006-4.525-.708-4.266-3.042L3.882 13H12a1 1 0 1 0 0-2H3.883z"
                          clip-rule="evenodd"
                        /></svg
                      >
                    </div>
                    <button
                      class="bg-slate-900 w-fit rounded-full p-2 text-slate-50 hover:scale-105"
                    >
                      <svg
                        class="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        ><g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          ><rect
                            width="8"
                            height="13"
                            x="8"
                            y="2"
                            rx="4"
                          /><path
                            d="M18 16.292A7.98 7.98 0 0 1 12 19a7.98 7.98 0 0 1-6-2.708M12 19v3m-2 0h4"
                          /></g
                        ></svg
                      >
                    </button>
                  </div>
                </div>
              {/if}
            {/each}

            <!-- {#each respuestaApi as pregunta}
              <div
                class="hidden sm:flex flex-row border w-80 text-center m-1 rounded-lg gap-5"
              >
                <div class="h-80">
                  <div>
                    {#if pregunta}
                      <p class="p-3 font-bold">{pregunta}</p>
                    {/if}
                  </div>

                  <div class="flex flex-col px-3 justify-between">
                    <div class="text-justify">
                      <p class="text-[#717171] text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione magni ullam repudiandae cupiditate earum
                        quibusdam debitis, enim, ab ipsum dignissimos eaque in
                        quisquam commodi deserunt asperiores quo veritatis ut
                        doloribus alex.
                      </p>
                    </div>

                    <div class="flex justify-end">
                      <button
                        class="custom-button my-3 flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                      >
                        <span>Seleccionar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            {/each} -->

            <div class="flex flex-col items-center mt-3">
              <div class="flex flex-row gap-5"></div>
              <div>
                {#if recognizedText}
                  <p>Texto reconocido: {recognizedText}</p>
                {/if}
              </div>
            </div>
          </section>

          <!--<section class="flex flex-col items-center ml-5 gap-5">
          <div class="flex flex-row border rounded-lg gap-5">
           
              <div>
                {#if responseIA}
                <p class="p-4 font-bold">¿{questionIA}?</p>
                {/if}
              </div>

            
              <div class=" flex flex-col p-4">
                <div class="w-96 text-justify">
                  <p class="text-[#717171]">
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione magni ullam repudiandae cupiditate earum quibusdam
                    debitis, enim, ab ipsum dignissimos eaque in quisquam
                    commodi deserunt asperiores quo veritatis ut doloribus.
                  </p>
                </div>

                <div class=" flex justify-center p-5">
                  <button
                    class="custom-button my-3 w-full flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <span>Seleccionar</span>
                  </button>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="flex flex-row border rounded-lg gap-5">
            <div class="h-72">
              
              <div>
                {#if responseIA}
                <p class="p-4 font-bold">¿{questionIA}?</p>
                {/if}
              </div>

             
              <div class=" flex flex-col p-4">
                <div class="w-96 text-justify">
                  <p class="text-[#717171]">
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione magni ullam repudiandae cupiditate earum quibusdam
                    debitis, enim, ab ipsum dignissimos eaque in quisquam
                    commodi deserunt asperiores quo veritatis ut doloribus.
                  </p>
                </div>
                <div class=" flex justify-center p-5">
                  <button
                    class="custom-button my-3 w-full flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <span>Seleccionar</span>
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </section>
      </article>
    </div>
  </div>
</div>
