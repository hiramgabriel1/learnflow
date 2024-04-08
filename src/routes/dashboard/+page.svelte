<script lang="ts">
  import { onMount } from "svelte";

  export let data;

  const { user } = data;

  import "../../app.css";
  import CardView from "../../components/CardView.svelte";
  import LayoutInitial from "../../components/LayoutInitial.svelte";
  import "../../main.styles.css";
  import { envDataConf } from "../../server/server";
  import { goto } from "$app/navigation";
  import type { FlashcardInterface } from "../types/flashcardTypes";
  import { writable } from "svelte/store";


  let showModal: FlashcardInterface | null = null;
  let flashcards = writable<FlashcardInterface[]>([]);

  // current date
  let currentDate = new Date();

  // todo: Consume data api here
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      const logoutButton = document.getElementById("logoutButton");

      if (logoutButton) {
        logoutButton.addEventListener("click", function () {
          fetch(`${envDataConf.URLBACK}/auth/logout`, {
            method: "POST",
            credentials: "include",
          })
            .then((response) => {
              if (response.ok) {
                console.log("Usuario ha cerrado sesión exitosamente");
              } else {
                console.error(
                  "No se pudo cerrar sesión. Código de estado:",
                  response.status
                );
              }
            })
            .catch((error) => {
              console.error("Error al intentar cerrar sesión:", error);
            });
        });
      } else {
        console.error("No se encontró el botón de cerrar sesión.");
      }
    });
  }

  onMount(() => {
    const flashcardsGenerateString = localStorage.getItem("flashcardsGenerate");

    flashcards.update(
      () => JSON.parse(flashcardsGenerateString + "") as FlashcardInterface[]
    );
  });

  const removeFlashcard = () => {
    flashcards.update(() => $flashcards.filter((u) => u !== showModal));
    localStorage.setItem("flashcardsGenerate", JSON.stringify($flashcards));
    showModal = null;
  };



  let circleRadius = 30; 


  let svgElement = document.querySelector("svg");

  if (svgElement) {
    let svgWidth = svgElement.clientWidth;
    let svgHeight = svgElement.clientHeight;
    let minSize = Math.min(svgWidth, svgHeight);
    circleRadius = minSize * 0.3;

  } else {
    console.error("El elemento SVG no se encontró");
  }
</script>

<LayoutInitial {user}>
  <!-- todo: menu index -->
  <div class="projects-section">
    <div class="projects-section-header">
      <p>Continua estudiando</p>
      <p class="time">{currentDate.toDateString()}</p>
    </div>
    <div class="projects-section-line">
      <div class="projects-status">
        <div class="item-status">
          <span class="status-number"
            >{($flashcards &&
              $flashcards.filter(
                (u) =>
                  u.response.filter((un) => un.state === "correct").length !==
                  u.response.length
              ).length) ??
              0}</span
          >

          <span class="status-type">En progreso</span>
        </div>
        <div class="item-status">
          <span class="status-number">{$flashcards?.length ?? 0}</span>
          <span class="status-type">Temas totales</span>
        </div>
      </div>
      <div class="view-actions">
        <button class="view-btn grid-view active" title="Grid View">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-grid"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /></svg
          >
        </button>
      </div>
    </div>

    <div class="px-6 pt-6 mb-6 2xl:container overflow-y-auto">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <div class="h-full py-6 px-6 rounded-xl bg-[#1f2937]">
            <h5 class="text-xl text-white">Grafica de progreso</h5>
            <div class="my-8"></div>
            <section
              class="p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0"
              style="display: block;"
            >
              <div class="flex items-center justify-center">
                <svg class="w-72 h-72">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="transparent"
                    stroke="gray"
                    stroke-width="28"
                  />

                  <text
                    x="50%"
                    y="50%"
                    font-size="20"
                    fill="white"
                    text-anchor="middle"
                    alignment-baseline="middle">Total</text
                  >

                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="transparent"
                    stroke="#00d45a"
                    stroke-width="28"
                    stroke-dasharray="100%"
                    stroke-dashoffset="110%"
                  />

                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="transparent"
                    stroke="#ffa708"
                    stroke-width="28"
                    stroke-dasharray="100%"
                    stroke-dashoffset="10%"
                  />
                </svg>
              </div>
            </section>
          </div>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <div class="h-full py-8 px-6 space-y-6 rounded-xl bg-[#1f2937]">
            <h5 class="text-xl text-white">Calificaciones</h5>

            <!-- Barra -->

            <section class="w-full p-6 rounded-lg max-w-2xl bg-[#1f2937]">
              <section class="py-4 grid grid-cols-2 gap-x-6">
                <div class="flex items-center py-3">
                  <span
                    class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      ><path
                        fill="currentColor"
                        d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"
                      />
                    </svg>
                  </span>
                  <div class="space-y-3 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-white flex items-center"
                      >
                        Habilidades
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 9h.01"></path>
                          <path d="M11 12h1v4h1"></path>
                        </svg>
                      </h4>
                      <span
                        class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs"
                      >
                        6.2 / 10
                      </span>
                    </div>
                    <div
                      class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full"
                    >
                      <span
                        class="h-full bg-blue-500 w-full block rounded-full"
                        style="width: 62%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center py-3">
                  <span
                    class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      ><g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        ><rect width="20" height="16" x="2" y="4" rx="2" /><path
                          d="M6 8h.01M10 8h.01M14 8h.01"
                        />
                      </g>
                    </svg>
                  </span>
                  <div class="space-y-3 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-white flex items-center"
                      >
                        Tecnologias
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 9h.01"></path>
                          <path d="M11 12h1v4h1"></path>
                        </svg>
                      </h4>
                      <span
                        class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs"
                      >
                        6.8 / 10
                      </span>
                    </div>
                    <div
                      class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full"
                    >
                      <span
                        class="h-full bg-blue-500 w-full block rounded-full"
                        style="width: 68%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center py-3 border-t border-gray-100">
                  <span
                    class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      ><g fill="none"
                        ><g
                          fill="currentColor"
                          clip-path="url(#akarIconsPythonFill0)"
                          ><path
                            d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0M8.708 1.85c.578 0 1.046.47 1.046 1.052c0 .581-.468 1.051-1.046 1.051c-.579 0-1.046-.47-1.046-1.051c0-.582.467-1.052 1.046-1.052"
                          /><path
                            d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24m3.206-1.85c-.579 0-1.046-.47-1.046-1.052c0-.581.467-1.051 1.046-1.051c.578 0 1.046.47 1.046 1.051c0 .582-.468 1.052-1.046 1.052"
                          /></g
                        ><defs
                          ><clipPath id="akarIconsPythonFill0"
                            ><path fill="#fff" d="M0 0h24v24H0z" /></clipPath
                          ></defs
                        ></g
                      >
                    </svg>
                  </span>
                  <div class="space-y-3 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-white flex items-center"
                      >
                        Python
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 9h.01"></path>
                          <path d="M11 12h1v4h1"></path>
                        </svg>
                      </h4>
                      <span
                        class="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
                      >
                        7.3 / 10
                      </span>
                    </div>
                    <div
                      class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full"
                    >
                      <span
                        class="h-full bg-blue-500 w-full block rounded-full"
                        style="width: 73%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center py-3 border-t border-gray-100">
                  <span
                    class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      ><path
                        fill="currentColor"
                        d="M2 2v28h28V2zm15.238 21.837c0 2.725-1.6 3.969-3.931 3.969c-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c.413.731.788 1.35 1.694 1.35c.862 0 1.412-.338 1.412-1.656v-8.944h2.631zm6.224 3.969c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c.563.919 1.3 1.6 2.594 1.6c1.087 0 1.788-.544 1.788-1.3c0-.9-.713-1.219-1.919-1.75l-.656-.281c-1.9-.806-3.156-1.825-3.156-3.969c0-1.975 1.506-3.475 3.85-3.475c1.675 0 2.875.581 3.738 2.106l-2.05 1.313c-.45-.806-.938-1.125-1.694-1.125c-.768 0-1.256.488-1.256 1.125c0 .788.488 1.106 1.619 1.6l.656.281c2.238.956 3.494 1.938 3.494 4.137c0 2.363-1.863 3.662-4.357 3.662z"
                      /></svg
                    >
                  </span>
                  <div class="space-y-3 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-white flex items-center"
                      >
                        JavaScript
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 9h.01"></path>
                          <path d="M11 12h1v4h1"></path>
                        </svg>
                      </h4>
                      <span
                        class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs"
                      >
                        6.4 / 10
                      </span>
                    </div>
                    <div
                      class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full"
                    >
                      <span
                        class="h-full bg-blue-500 w-full block rounded-full"
                        style="width: 64%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center py-3 border-t border-gray-100">
                  <span
                    class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      ><circle
                        cx="12"
                        cy="11.245"
                        r="1.785"
                        fill="currentColor"
                      /><path
                        fill="currentColor"
                        d="m7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452c0-1.452 1.684-2.711 4.617-3.452l.395-.1l.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178l-.085.178c-.46.963-.841 1.961-1.136 2.985zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542c0 .954 1.368 1.913 3.598 2.54c.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542m10.572 6.095l-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177l.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39l.395.1c2.935.741 4.617 2 4.617 3.453c0 1.452-1.683 2.711-4.617 3.452zm-.41-3.553c.4.866.733 1.718.987 2.54c2.23-.627 3.599-1.586 3.599-2.54c0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542"
                      /><path
                        fill="currentColor"
                        d="m6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717c1.235-.715 3.222.13 5.303 2.265l.284.292l-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162l-.196.016a19.646 19.646 0 0 0-3.157.509zm1.582-5.529c-.224 0-.422.049-.589.145c-.828.477-.974 2.138-.404 4.38c.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985m7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291l.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16l.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1l.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257m-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986c.225 0 .423-.05.589-.145c.829-.478.976-2.142.404-4.384c-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124"
                      /><path
                        fill="currentColor"
                        d="m17.58 8.695l-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017l-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291l.283-.29c2.08-2.134 4.066-2.979 5.303-2.265c1.262.727 1.513 2.81.688 5.717zm-3.287-1.421c.954.085 1.858.228 2.698.417c.571-2.242.425-3.903-.404-4.381c-.824-.477-2.375.253-4.004 1.841c.616.67 1.188 1.378 1.71 2.123M8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391l.395.1c.964.243 2.026.414 3.158.507l.194.019l.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29l-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522m-.993-5.362c-.57 2.242-.424 3.906.404 4.384c.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123a20.692 20.692 0 0 1-2.696-.419"
                      /><path
                        fill="currentColor"
                        d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017l-.113-.162a25.697 25.697 0 0 1-1.126-1.769a26.028 26.028 0 0 1-.971-1.859l-.084-.177l.084-.179c.299-.632.622-1.252.971-1.858c.347-.596.726-1.192 1.126-1.77l.113-.16l.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019l.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179l-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162l-.194.017c-.706.057-1.412.087-2.098.087m-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168a23.916 23.916 0 0 0-1.832-3.168a23.877 23.877 0 0 0-3.667 0a23.743 23.743 0 0 0-1.832 3.168a24.82 24.82 0 0 0 1.832 3.168"
                      /></svg
                    >
                  </span>
                  <div class="space-y-3 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-white flex items-center"
                      >
                        React
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 9h.01"></path>
                          <path d="M11 12h1v4h1"></path>
                        </svg>
                      </h4>
                      <span
                        class="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
                      >
                        8 / 10
                      </span>
                    </div>
                    <div
                      class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full"
                    >
                      <span
                        class="h-full bg-blue-500 w-full block rounded-full"
                        style="width: 80%"
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center py-3 border-t border-gray-100">
                  <span
                    class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      ><g fill="none"
                        ><g clip-path="url(#akarIconsTypescriptFill0)"
                          ><path
                            fill="currentColor"
                            d="M23.429 0H.57A.571.571 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.571.571 0 0 0 .571-.571V.57a.571.571 0 0 0-.572-.57m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719c-1.218 0-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755"
                          /></g
                        ><defs
                          ><clipPath id="akarIconsTypescriptFill0"
                            ><path fill="#fff" d="M0 0h24v24H0z" /></clipPath
                          ></defs
                        ></g
                      ></svg
                    >
                  </span>
                  <div class="space-y-3 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-white flex items-center"
                      >
                        TypeScript
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2 shrink-0 w-5 h-5 text-gray-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"
                          ></path>
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 9h.01"></path>
                          <path d="M11 12h1v4h1"></path>
                        </svg>
                      </h4>
                      <span
                        class="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
                      >
                        8.7 / 10
                      </span>
                    </div>
                    <div
                      class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full"
                    >
                      <span
                        class="h-full bg-blue-500 w-full block rounded-full"
                        style="width: 87%"
                      ></span>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <!-- end barra -->
          </div>
        </div>
        <div>
          <div class="h-full py-6 px-6 rounded-xl bg-[#1f2937]">
            <h5 class="text-xl text-white">Tareas recientes</h5>
            <div class="my-8"></div>

            <!-- component -->
            <div
              class="overflow-hidden rounded-lg shadow-md m-5"
            >
              <table
                class="w-full border-collapse text-left text-sm text-gray-500"
              >
                <tbody
                  class="divide-y divide-gray-600 border-t border-gray-600"
                >
                  <!-- 1 -->
                  <tr class="hover:bg-gray-700">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <div class="bg-blue-500 rounded-full p-2 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 56 56"
                          >
                            <path
                              fill="white"
                              d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508H30.742c-3 0-4.406-1.43-4.406-4.43V2.875H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m15.258-31.828h16.64c-.164-.961-.844-1.899-1.945-3.047L32.57 5.102c-1.078-1.125-2.062-1.805-3.047-1.97v16.9c0 .843.446 1.265 1.29 1.265m-11.836 13.36c-.961 0-1.641-.68-1.641-1.594c0-.915.68-1.594 1.64-1.594h18.07c.938 0 1.665.68 1.665 1.593c0 .915-.727 1.594-1.664 1.594Zm0 8.929c-.961 0-1.641-.68-1.641-1.594s.68-1.594 1.64-1.594h18.07c.938 0 1.665.68 1.665 1.594s-.727 1.594-1.664 1.594Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="text-sm">
                        <div class="font-bold text-white">
                          Admin DashBoard Design
                        </div>
                        <div class="text-[#69738d]">
                          Broadcast web app mockup
                        </div>
                      </div>
                    </th>
                    <td class="px-6 py-4"> </td>
                    <td class="px-6 py-4">
                      <div class="text-sm">
                        <div class="font-medium text-[#69738d]">
                          15 minutes ago
                        </div>
                        <div class="text-[#69738d]">30 task, 5 issues</div>
                      </div>
                    </td>
                  </tr>

                  <!-- 2 -->
                  <tr class="hover:bg-gray-700">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <div class="bg-green-500 rounded-full p-2 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            ><path
                              fill="white"
                              fill-rule="evenodd"
                              d="M8.38 7.194a5.41 5.41 0 0 1 9.952 2.605a4.478 4.478 0 1 1 .191 8.951H6.875A5.875 5.875 0 1 1 8.38 7.194M12 15.75c.18 0 .345-.063.475-.17l2.494-1.994a.75.75 0 0 0-.938-1.172L12.75 13.44V10a.75.75 0 0 0-1.5 0v3.44l-1.282-1.025a.75.75 0 1 0-.937 1.172l2.498 1.998a.747.747 0 0 0 .465.166z"
                              clip-rule="evenodd"
                            /></svg
                          >
                        </div>
                      </div>
                      <div class="text-sm">
                        <div class="font-bold text-white">
                          WordPress Development
                        </div>
                        <div class="text-[#69738d]">Upload new design</div>
                      </div>
                    </th>
                    <td class="px-6 py-4"> </td>
                    <td class="px-6 py-4">
                      <div class="text-sm">
                        <div class="font-medium text-[#69738d]">1 hour ago</div>
                        <div class="text-[#69738d]">25 task, 5 issues</div>
                      </div>
                    </td>
                  </tr>

                  <!-- 3 -->
                  <tr class="hover:bg-gray-700">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <div class="bg-violet-500 rounded-full p-2 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            ><g fill="none"
                              ><path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                              /><path
                                fill="white"
                                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
                              /></g
                            ></svg
                          >
                        </div>
                      </div>
                      <div class="text-sm">
                        <div class="font-bold text-white">Project meeting</div>
                        <div class="text-[#69738d]">New project discussion</div>
                      </div>
                    </th>
                    <td class="px-6 py-4"> </td>
                    <td class="px-6 py-4">
                      <div class="text-sm">
                        <div class="font-medium text-[#69738d]">
                          35 minutes ago
                        </div>
                        <div class="text-[#69738d]">15 task, 2 issues</div>
                      </div>
                    </td>
                  </tr>

                  <!-- 4 -->
                  <tr class="hover:bg-gray-700">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <div class="bg-red-500 rounded-full p-2 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            ><path
                              fill="white"
                              d="m4 8l8 5l8-5l-8-5zm18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71"
                            /></svg
                          >
                        </div>
                      </div>
                      <div class="text-sm">
                        <div class="font-bold text-white">Broadcast Mail</div>
                        <div class="text-[#69738d]">
                          Sent release details to team
                        </div>
                      </div>
                    </th>
                    <td class="px-6 py-4"> </td>
                    <td class="px-6 py-4">
                      <div class="text-sm">
                        <div class="font-medium text-[#69738d]">
                          55 minutes ago
                        </div>
                        <div class="text-[#69738d]">35 task, 7 issues</div>
                      </div>
                    </td>
                  </tr>

                  <!-- 5 -->
                  <tr class="hover:bg-gray-700">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <div class="bg-orange-500 rounded-full p-2 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 20 20"
                            ><path
                              fill="white"
                              d="m5.976 0l4.475 3.418l-1.71 5.531H3.21L1.5 3.42zm0 20L1.5 16.582l1.71-5.531h5.532l1.709 5.53zM18.5 12.968l-5.261 1.797l-3.252-4.705l3.252-4.705L18.5 7.152z"
                            /></svg
                          >
                        </div>
                      </div>
                      <div class="text-sm">
                        <div class="font-bold text-white">
                          UI Design
                        </div>
                        <div class="text-[#69738d]">
                          New application planning
                        </div>
                      </div>
                    </th>
                    <td class="px-6 py-4"> </td>
                    <td class="px-6 py-4">
                      <div class="text-sm">
                        <div class="font-medium text-[#69738d]">
                          50 minutes ago
                        </div>
                        <div class="text-[#69738d]">27 task, 4 issues</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div
            class="lg:h-full py-8 px-6 text-gray-600 rounded-xl bg-[#1f2937]"
          >
          <h5 class="text-xl text-white">Añadir tareas</h5>
          <div class="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden mt-16">

            <form class="w-full max-w-sm mx-auto px-4 py-2">
                <div class="flex items-center border-b-2  py-2">
                    <input
                        class="appearance-none bg-transparent  w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Añadir tareas">
                    <button
                        class="flex-shrink-0 bg-[#008ded] hover:bg-green-700 border-[#008ded] hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button">
                        Agregar
                    </button>
                </div>
            </form>
            <ul class="divide-y divide-gray-200 px-4">
                <li class="py-4">
                    <div class="flex items-center">
                        <input id="todo1" name="todo1" type="checkbox"
                            class="h-4 w-4   border-gray-300 rounded">
                        <label for="todo1" class="ml-3 block text-gray-900">
                          <span class="text-sm font-medium text-[#69738d]">Pick up kids from school</span>
                        </label>
                    </div>
                </li>
                <li class="py-4">
                    <div class="flex items-center">
                        <input id="todo2" name="todo2" type="checkbox"
                            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                        <label for="todo2" class="ml-3 block text-gray-900">
                            <span class="text-sm font-medium text-[#69738d]">I'ian weekend outing</span>
                        </label>
                    </div>
                </li>
                <li class="py-4">
                    <div class="flex items-center">
                        <input id="todo3" name="todo3" type="checkbox"
                            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                        <label for="todo3" class="ml-3 block text-gray-900">
                            <span class="text-sm font-medium text-[#69738d]">Prepare for presentation</span>
                        </label>
                    </div>
                </li>
                <li class="py-4">
                  <div class="flex items-center">
                      <input id="todo3" name="todo3" type="checkbox"
                          class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                      <label for="todo3" class="ml-3 block text-gray-900">
                          <span class="text-sm text-[#69738d] font-medium">Meeting with Alita</span>
                      </label>
                  </div>
              </li>
              <li class="py-4">
                <div class="flex items-center">
                    <input id="todo3" name="todo3" type="checkbox"
                        class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                    <label for="todo3" class="ml-3 block text-gray-900">
                        <span class="text-sm text-[#69738d] font-medium">Create invitation</span>
                    </label>
                </div>
            </li>
            </ul>
        </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-boxes jsGridView">
      {#if $flashcards}
        {#each $flashcards as flashcard}
          <CardView bind:showModal currentFlashcard={flashcard} />
        {/each}
      {/if}
    </div>
  </div>
</LayoutInitial>

{#if showModal}
  <div
    class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
    id="modal-id"
  >
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div
      class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 flex items-center text-red-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-xl font-bold py-4">¿Está seguro de eliminar?</h3>
          <p class="text-sm text-gray-500 px-8">
            Si lo elimina no podrá recuperarlo
          </p>
        </div>
        <!--footer-->
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            on:click={() => (showModal = null)}
          >
            Cancelar
          </button>
          <button
            on:click={removeFlashcard}
            type="button"
            class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
