<script lang="ts">
  import { onMount } from "svelte";
  import type { FlashcardInterface } from "../routes/types/flashcardTypes";

  export let showModal: FlashcardInterface | null;
  export let currentFlashcard: FlashcardInterface;

  const colors = ["#fee4cb", "#e9e7fd", "#ffd3e2"];
  let randomColors = 0;
  let progress = {
    total: 0,
    correct: 0,
    incorrect: 0,
    faltante: 0,
  };

  const getProgress = () => {
    const length = currentFlashcard.response.length;
    const respIncorrect = currentFlashcard.response.filter(
      (u) => u.state === "incorrect"
    ).length;
    const respCorrect = currentFlashcard.response.filter(
      (u) => u.state === "correct"
    ).length;
    progress.correct = (respCorrect * 100) / length;
    progress.incorrect = (respIncorrect * 100) / length;
    progress.faltante = 100 - (progress.correct + progress.incorrect);
    progress.total = length;

    console.log(progress);
  };
  const getDateString = (date: string): string => {
    const newDate = new Date(date);
    const dateDiff = new Date().getTime() - newDate.getTime();
    let daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    return daysDiff === 0 ? "Hoy" : `Hace ${daysDiff} días`;
  };

  onMount(() => {
    randomColors = Math.floor(Math.random() * colors.length);
    getProgress();
  });
</script>

<div class="project-box-wrapper">
  <div class="project-box" style="background-color: {colors[randomColors]};">
    <div class="project-box-header">
      <span>{currentFlashcard.created}</span>
      <div class="more-wrapper">
        <!-- ? options points -->
        <button
          class="project-btn-more text-center p-5 flex-auto justify-center"
          on:click={() => (showModal = currentFlashcard)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 flex items-center text-red-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="project-box-content-header">
      <p class="box-content-header">{currentFlashcard.question}</p>
      <p class="box-content-subheader">
        {currentFlashcard.response[0].respuesta}
      </p>
    </div>
    <div class="box-progress-wrapper">
      <p class="box-progress-header">Progreso</p>
      <div class="box-progress-bar flex flex[column_!important]">
        <span
          class="box-progress"
          style="width: {progress.correct.toFixed(
            2
          )}%; background-color: #60D910"
        ></span>
        <span
          class="box-progress"
          style="width: {progress.incorrect.toFixed(
            2
          )}%; background-color: #D93310"
        ></span>
        <span
          class="box-progress"
          style="width: {progress.faltante.toFixed(
            2
          )}%; background-color: #F8F8F8"
        ></span>
      </div>
      <p class="box-progress-percentage">
        {progress.correct.toFixed(2)}%
      </p>
      <p class="box-progress-percentage pt-2">
        {(progress.correct * progress.total) / 100}/{progress.total}
      </p>
    </div>
    <div class="project-box-footer">
      <div class="days-left" style="color: #ff942e;">
        {getDateString(currentFlashcard.created)}
      </div>
      <a href="/estudiar/flashcards/{currentFlashcard.id}" class="h-full">
        <button
          class="h-7 rounded-md text-slate-50 bg-slate-900 px-3 hover:scale-105 duration-100"
          >Seguir</button
        >
      </a>
    </div>
  </div>
</div>
