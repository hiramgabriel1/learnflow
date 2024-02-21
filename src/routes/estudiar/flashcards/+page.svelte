<script>
  import "../../../app.css";
  import "../../../main.styles.css";
  import "./styles.css";
  import toast, { Toaster } from "svelte-french-toast";

  // @ts-ignore
  let recognition;
  let recognizedText = "";

  // @ts-ignore
  let formData = {
    requestText: "",
  };

  const saveResponseVoice = async () => {
    try {
      let newFormData = {
        responseUserToFlashcard: (formData.requestText = recognizedText),
      };

      console.log(newFormData);

      const validateResponseVoiceWithAnswerAI = await fetch(
        "http://localhost:4000/api/v1/flashcard/send-response-voice/",
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
          .map((result) => result[0].transcript)
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
</script>

<Toaster />

<div class="app-container">
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">Learnflow</p>
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
      <a href="/calendario" class="app-sidebar-link">
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
    <div class="projects-section flex items-center">
      <div class="projects-section-header">
        <p class="text-center font-bolder">Selecciona una tarjeta</p>
      </div>
      <br /><br />

      <article class="flex">
        <section class="flex flex-col items-center">
          <div class="hidden sm:flex flex-row border rounded-lg gap-5">
            <div class="bg-gray-500 w-96 rounded-lg custom-width"></div>
            <div class="h-72">
              <!-- Pregunta -->
              <div>
                <p class="p-4 font-bold">¿Como ser programador web?</p>
              </div>

              <!-- Respuesta -->
              <div class=" flex flex-row p-4">
                <div class="w-96 text-justify">
                  <p class="text-[#717171]">
                    - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione magni ullam repudiandae cupiditate earum quibusdam
                    debitis, enim, ab ipsum dignissimos eaque in quisquam
                    commodi deserunt asperiores quo veritatis ut doloribus.
                  </p>
                </div>

                <div class="flex flex-col p-2 pl-5">
                  <button
                    on:click={stopRecognition}
                    class="my-3 w-full flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-pause-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"
                      />
                    </svg>
                  </button>

                  <button
                    on:click={sendResponseVoiceUser}
                    class="my-3 w-full flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-mic-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                      <path
                        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full">
            <div class="border rounded-lg p-4 my-4 flex flex-row w-full">
              <div class="flex">
                <form action="">
                  <textarea
                    class="w-full p-4 h-40 rounded-lg outline-none"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Escribe tu respuesta..."
                  ></textarea>
                </form>
              </div>
            </div>

            <div class="flex w-full justify-end">
              <div class="flex flex-col justify-center space-y-5">
                <button
                  on:click={saveFlashCardToUser}
                  class="my-3 w-full flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Responder
                </button>
                <button
                  on:click={saveFlashCardToUser}
                  class="my-3 w-full flex justify-center bg-[#1f1c2e] text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          <!-- <div
            class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
          >
            <div
              class="bg-white p-7 rounded-md"
              style="background-image: url(../img/background.jpg); background-repeat: no-repeat; background-size: 100%;"
            >
              <h1 class="font-bold text-xl mb-2">Respuesta 1</h1>
              <p class="text-justify text-lg font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis aspernatur omnis necessitatibus eaque minus
                provident eum explicabo laudantium obcaecati quo vitae
                cupiditate, tempora veniam accusantium ipsa perferendis
                praesentium reprehenderit sed neque distinctio illo! Rem fugit
                eum ullam quasi atque veniam ea, similique repudiandae
                exercitationem doloribus assumenda hic enim asperiores Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Eum earum
                enim nobis! Doloribus, pariatur. Neque sit eos aut assumenda
                cupiditate?.
              </p>
            </div>
          </div> -->
          <!-- <div class="min-h-96 rounded-lg border border-gray-900 max-w-md p-3">
            <p class="text-center text-lg font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nobis aspernatur omnis necessitatibus eaque minus
              provident eum explicabo laudantium obcaecati quo vitae cupiditate,
              tempora veniam accusantium ipsa perferendis praesentium
              reprehenderit sed neque distinctio illo! Rem fugit eum ullam quasi
              atque veniam ea, similique repudiandae exercitationem doloribus
              assumenda hic enim asperiores Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eum earum enim nobis! Doloribus,
              pariatur. Neque sit eos aut assumenda cupiditate?.
            </p>
          </div> -->
          <div class="flex flex-col items-center mt-3">
            <div class="flex flex-row gap-5">
              <!-- <button
                on:click={sendResponseVoiceUser}
                class="my-3 w-full flex justify-center bg-blue-500 text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-mic-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                  <path
                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"
                  />
                </svg>
              </button> -->
              <!-- <button
                on:click={stopRecognition}
                class="my-3 w-full flex justify-center bg-blue-500 text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-pause-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"
                  />
                </svg>
              </button> -->
            </div>

            <!-- <button
              on:click={saveFlashCardToUser}
              class="my-3 w-full flex justify-center bg-blue-500 text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Escribe manualmente
            </button>
            <button
              on:click={saveFlashCardToUser}
              class="my-3 w-full flex justify-center bg-blue-500 text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Continuar luego
            </button> -->

            <div>
              {#if recognizedText}
                <p>Texto reconocido: {recognizedText}</p>
              {/if}
            </div>
          </div>
        </section>

        <section class="flex flex-col items-center ml-5 gap-5">
          <div class="flex flex-row border rounded-lg gap-5">
            <div class="h-72">
              <!-- Pregunta -->
              <div>
                <p class="p-4 font-bold">¿Como ser programador web?</p>
              </div>

              <!-- Respuesta -->
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
          </div>
          <div class="flex flex-row border rounded-lg gap-5">
            <div class="h-72">
              <!-- Pregunta -->
              <div>
                <p class="p-4 font-bold">¿Como ser programador web?</p>
              </div>

              <!-- Respuesta -->
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
          </div>
        </section>

        <!-- <section class="flex mx-5 flex-col items-center">
          <div
            class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
          >
            <div class="bg-white p-7 rounded-md">
              <h1 class="font-bold text-xl mb-2">Respuesta 2</h1>
              <p class="text-justify text-lg font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis aspernatur omnis necessitatibus eaque minus
                provident eum explicabo laudantium obcaecati quo vitae
                cupiditate, tempora veniam accusantium ipsa perferendis
                praesentium reprehenderit sed neque distinctio illo! Rem fugit
                eum ullam quasi atque veniam ea, similique repudiandae
                exercitationem doloribus assumenda hic enim asperiores Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Eum earum
                enim nobis! Doloribus, pariatur. Neque sit eos aut assumenda
                cupiditate?.
              </p>
            </div>
          </div>
          <div class="min-h-96 rounded-lg border border-gray-900 max-w-md p-3">
            <p class="text-center text-lg font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nobis aspernatur omnis necessitatibus eaque minus
              provident eum explicabo laudantium obcaecati quo vitae cupiditate,
              tempora veniam accusantium ipsa perferendis praesentium
              reprehenderit sed neque distinctio illo! Rem fugit eum ullam quasi
              atque veniam ea, similique repudiandae exercitationem doloribus
              assumenda hic enim asperiores Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eum earum enim nobis! Doloribus,
              pariatur. Neque sit eos aut assumenda cupiditate?.
            </p>
          </div> 
          <div class="flex flex-col items-center mt-3">
            <div class="mr-2">Icon</div>
            <div>.............................</div>
          </div>
        </section> -->
        <!-- <section class="flex flex-col items-center">
          <div
            class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
          >
            <div class="bg-white p-7 rounded-md">
              <h1 class="font-bold text-xl mb-2">Respuesta 3</h1>
              <p class="text-justify text-lg font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis aspernatur omnis necessitatibus eaque minus
                provident eum explicabo laudantium obcaecati quo vitae
                cupiditate, tempora veniam accusantium ipsa perferendis
                praesentium reprehenderit sed neque distinctio illo! Rem fugit
                eum ullam quasi atque veniam ea, similique repudiandae
                exercitationem doloribus assumenda hic enim asperiores Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Eum earum
                enim nobis! Doloribus, pariatur. Neque sit eos aut assumenda
                cupiditate?.
              </p>
            </div>
          </div>
          <div class="min-h-96 rounded-lg border border-gray-900 max-w-md p-3">
            <p class="text-center text-lg font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nobis aspernatur omnis necessitatibus eaque minus
              provident eum explicabo laudantium obcaecati quo vitae cupiditate,
              tempora veniam accusantium ipsa perferendis praesentium
              reprehenderit sed neque distinctio illo! Rem fugit eum ullam quasi
              atque veniam ea, similique repudiandae exercitationem doloribus
              assumenda hic enim asperiores Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eum earum enim nobis! Doloribus,
              pariatur. Neque sit eos aut assumenda cupiditate?.
            </p>
          </div> 
          <div class="flex flex-col items-center mt-3">
            <div class="mr-2">Icon</div>
            <div>.............................</div>
          </div>
        </section> -->
      </article>
    </div>
  </div>
</div>
