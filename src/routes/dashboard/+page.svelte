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
  // todo: modificar esto, usar dayJS
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
            >{($flashcards && $flashcards.filter(
              (u) =>
                u.response.filter((un) => un.state === "correct").length !==
                u.response.length
            ).length) ?? 0}</span
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
