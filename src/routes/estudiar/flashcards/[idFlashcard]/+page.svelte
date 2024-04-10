<script lang="ts">
  export let data;
  // export let params;
  const { user, idFlashcard } = data;
  // const { id } = params;

  import "../../../../app.css";
  import "../../../../main.styles.css";
  import "./styles.css";
  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";
  import { envDataConf } from "../../../../server/server";
  import LayoutInitial from "../../../../components/LayoutInitial.svelte";
  import { goto } from "$app/navigation";
  import type { FlashcardInterface } from "../../../types/flashcardTypes";
  import { writable } from "svelte/store";

  let flashcardCurrent: FlashcardInterface | null = null;
  let allFlashCards = writable<FlashcardInterface[]>([]);
  

  let totalConfigAnswers = {
    currentItem: 0,
    totalCount: 1,
  };

  let responseAI = {
    isCorrect: false,
    consejos: "",
    explicacion: "",
  };

  // @ts-ignore
  let recognition;
  let recognizedText = "";

  let dataRecognition = {
    text: "",
    active: false,
  };

  let formData = {
    requestText: "",
  };

  let userIsAnswered: boolean;

  //@ts-ignore
  let respuestaApi: any[] = [];
  const saveResponseVoice = async () => {
    try {
      if (!flashcardCurrent) return;

      const answerCurrent =
        flashcardCurrent.response[totalConfigAnswers.currentItem];

      let newFormData = {
        responseUserToFlashcard: (formData.requestText = recognizedText),
        answerUserToFlashCard:
          // respuestaApi[totalConfigAnswers.currentItem].pregunta,
          answerCurrent.pregunta,
      };

      console.log(newFormData);

      const validateResponseVoiceWithAnswerAI = await fetch(
        `${envDataConf.URLBACK}/flashcard/send-response-voice/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newFormData),
        }
      );

      console.log(await validateResponseVoiceWithAnswerAI);
      if (validateResponseVoiceWithAnswerAI.ok) {
        userIsAnswered = true;
        let resp = await validateResponseVoiceWithAnswerAI.json();
        const rpra = JSON.parse(resp.response);
        // var expresionRegular = /\[([^[\]]*)\]/;
        // var expresion = validateResponseVoiceWithAnswerAI;

        allFlashCards.update(()=>
          $allFlashCards?.map((obj) => {
            if (obj.response === flashcardCurrent?.response) {
              return {
                ...flashcardCurrent,
                response: flashcardCurrent.response.map((answer) => {
                  if (answer.id === answerCurrent.id) {
                    return {
                      ...answer,
                      state: rpra.isCorrect ? "correct" : "incorrect",
                    };
                  }
                  return answer;
                }),
              } as FlashcardInterface;
            }
            return obj;
          }) || null
        )
        flashcardCurrent = $allFlashCards[$allFlashCards.length - 1];


        console.log($allFlashCards);
        localStorage.setItem("flashcardsGenerate", JSON.stringify($allFlashCards))


        responseAI.consejos = rpra.consejos;
        responseAI.isCorrect = rpra.isCorrect;
        responseAI.explicacion = rpra.explicacion;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formEnvData = (e: SubmitEvent) => {
    toast.success("procesando tu respuesta... 🧠");
    saveResponseVoice();
  };

  //@ts-ignore
  // respuestaApi = JSON.parse(localStorage.getItem("respuestaApi")) || [];

  // Esta función se ejecutará cuando el componente se monte
  onMount(() => {
    const flashcardsGenerateString = localStorage.getItem("flashcardsGenerate");
    if (
      !flashcardsGenerateString ||
      JSON.parse(flashcardsGenerateString)?.length <= 0
    ) {
      return goto("/estudiar");
    }
    const flashcardsGenerate = JSON.parse(
      flashcardsGenerateString
    ) as FlashcardInterface[];
    allFlashCards.update(()=>flashcardsGenerate);
    flashcardCurrent = flashcardsGenerate.find(u=>u.id===idFlashcard) || null;

    if(!flashcardCurrent) return goto("/estudiar");

    totalConfigAnswers.totalCount = flashcardCurrent.response.length;
  });

  // @ts-ignore
  const sendResponseVoiceUser = () => {
    dataRecognition.active = !dataRecognition.active;
    if (!dataRecognition.active) return stopRecognition();

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
    }
  };

  const saveFlashCardToUser = async () => {
    console.log("funciona");
  };

  const itemSelection = null;
  console.log(respuestaApi);
</script>

<Toaster />

<LayoutInitial {user}>
  <!-- todo: menu index -->
  <div class="projects-section flex items-left h-fit">
    {#if userIsAnswered}
      <div class="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto my-12">
        <div class="flex justify-between items-start">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Resultados</h1>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-500"
          >
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
              class="w-6 h-6"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <line x1="3" x2="21" y1="9" y2="9"></line>
              <path d="m9 16 3-3 3 3"></path>
            </svg>
          </button>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <h2
            class={`text-xl font-semibold ${responseAI.isCorrect ? "text-green-600" : "text-red-600"} mb-2`}
          >
            {responseAI.isCorrect
              ? "Respuesta Correcta"
              : "Respuesta Incorrecta"}
          </h2>
          <p class="text-gray-700 mb-4">
            {responseAI.consejos}
          </p>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Explicación</h3>
          <p class="text-gray-700 mb-6">
            {responseAI.explicacion}
          </p>
          <button
            on:click={() => {
              userIsAnswered = false;
              recognizedText = "";
            }}
            class={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 
                w-full ${responseAI.isCorrect ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}   text-white`}
          >
            Volver a Inicio
          </button>
        </div>
      </div>
    {:else if !userIsAnswered}
      <div class="projects-section-header">
        <p class="text-center font-bolder">Selecciona una tarjeta</p>
      </div>
      <article class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <section>
              <div class="d-flex flex-wrap justify-content-center pb-3">
                {#if flashcardCurrent}
                  {#each flashcardCurrent.response.slice(totalConfigAnswers.currentItem, totalConfigAnswers.currentItem + 1) as pregunta}
                    <div class="flex my-10">
                      <div
                        class="bg-white w-1/2 m-auto border-1 relative border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden"
                      >
                        <div
                          class="absolute top-0 left-0 w-20 flex items-center justify-center py-3 z-20 rounded-xl bg-slate-100/80 backdrop-blur-sm"
                        >
                          <span
                            class="h-5 w-5 rounded-full {pregunta.state ===
                            'enable'
                              ? 'bg-yellow-400'
                              : pregunta.state === 'incorrect'
                                ? 'bg-red-600'
                                : 'bg-lime-500'}"
                          ></span>
                        </div>

                        <div
                          class="w-full flex justify-center z-20 absolute gap-16"
                        >
                          <button
                            disabled={totalConfigAnswers.currentItem == 0}
                            on:click={() => {
                              totalConfigAnswers.currentItem -= 1;
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class={`w-16 ${totalConfigAnswers.currentItem != 0 ? "text-slate-900" : "text-slate-200"}`}
                              viewBox="0 0 32 32"
                              ><path
                                fill="currentColor"
                                d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"
                              /><path
                                fill="none"
                                d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"
                              /></svg
                            >
                          </button>
                          <div
                            class="w-12 h-12 font-bold text-xl bg-slate-200 rounded-xl grid self-center items-center justify-center"
                          >
                            <p>{totalConfigAnswers.currentItem + 1}</p>
                          </div>
                          <button
                            disabled={totalConfigAnswers.currentItem ==
                              totalConfigAnswers.totalCount - 1}
                            on:click={() => {
                              totalConfigAnswers.currentItem += 1;
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class={`w-16 ${totalConfigAnswers.currentItem != totalConfigAnswers.totalCount - 1 ? "text-slate-900" : "text-slate-200"}`}
                              viewBox="0 0 32 32"
                              ><path
                                fill="currentColor"
                                d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z"
                              /><path
                                fill="none"
                                d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"
                              /></svg
                            >
                          </button>
                        </div>

                        <div
                          class="z-10"
                          style="width:100%;height:0;padding-bottom:100%;position:relative;"
                        >
                          <iframe
                            title="giphy"
                            src="https://giphy.com/embed/wq1I3ILdsvYJub8Rwx"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            class="giphy-embed z-10 absolute"
                          ></iframe>
                        </div>
                        <div class="p-4">
                          <p class="mb-1 text-gray-900 font-bold">
                            {pregunta.pregunta}
                          </p>

                          <span class="text-gray-700">{pregunta.respuesta}</span
                          >

                          <form
                            on:submit|preventDefault={formEnvData}
                            class="mt-8 mb-3 flex gap-2"
                          >
                            <button
                              type="button"
                              class={`${dataRecognition.active ? "bg-red-500 animate-pulse" : "bg-slate-900"}  w-fit rounded-full p-2 text-slate-50 hover:scale-105`}
                              on:click={sendResponseVoiceUser}
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
                            <!-- <button on:click={stopRecognition}>detener</button> -->

                            <!-- todo: arreglar el responsive y diseño de éste input -->
                            <input
                              class="flex-1 px-3 border-b-2 border-none border-blue-500 outline-none"
                              type="text"
                              bind:value={recognizedText}
                              placeholder="Escribe tu respuesta..."
                            />
                            <button
                              type="submit"
                              class={` text-blue-700  w-fit rounded-full p-2  hover:scale-110`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-8"
                                viewBox="0 0 24 24"
                                ><path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m22 2l-7 20l-4-9l-9-4Zm0 0L11 13"
                                /></svg
                              >
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  {/each}
                {/if}
              </div>
            </section>
          </div>
          <div class="col-lg-6">
            <section>
              <div class="text-center">
                {#if recognizedText}
                  <p>Texto reconocido: {recognizedText}</p>
                {/if}
              </div>
            </section>
          </div>
        </div>
      </article>
    {/if}
  </div>
</LayoutInitial>
