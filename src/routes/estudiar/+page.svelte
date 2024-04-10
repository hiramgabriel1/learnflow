<script lang="ts">
  export let data;
  const { user } = data;

  import "../../app.css";
  import "../../main.styles.css";
  import { goto } from "$app/navigation";
  import toast, { Toaster } from "svelte-french-toast";
  import { envDataConf } from "../../server/server";
  import LayoutInitial from "../../components/LayoutInitial.svelte";
  import imagenTema from './img/person_temas.jpg'; 
  import type {
    FlashcardInterface,
    ResponseFlashcardInterface,
  } from "../types/flashcardTypes";

  let currentDate = new Date();
  let disabled: boolean;
  let showLoading: any;

  let formData = {
    themeFlashcard: "",
    numberCards: "",
  };

  let isLoading = false;

  const handleInputChange = async (e) => {
    const value = e.target.value;

    if (value <= 0) {
      toast.error("Ingresa un valor mayor ó igual a 1");
      disabled = true;
    } else {
      disabled = false;
    }
  };

  const responseGPT = async () => {
    try {
      disabled = true;
      showLoading = true;

      if (formData.themeFlashcard === "" || !isNaN(formData.themeFlashcard)) {
        return toast.error("Ingresa un tema! 🚀");
      }

      const thinkingToast = toast(
        "Pensando... esto puede tomar unos segundos 🧠",
        {
          duration: 15000,
        }
      );

      const api = `${envDataConf.URLBACK}/flashcard/generate-ai`;

      const sendData = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!sendData.ok) {
        throw new Error("No se pudo obtener la respuesta del servidor.");
      }

      let responseApi = await sendData.json();
      const { question, response } = responseApi as {
        question: string;
        response: string;
      };

      const resposeFormatter = JSON.parse(
        response.substring(response.indexOf("["), response.lastIndexOf("]") + 1)
      ) as ResponseFlashcardInterface[];

      const getQuestionFormatter = (JSON.parse(
        localStorage.getItem("flashcardsGenerate") || "[]"
      )) as FlashcardInterface[];

      const questionFormatter = {
        id: getQuestionFormatter.length,
        question: question,
        created: (new Date()).toDateString(),
        response: resposeFormatter,
      } as FlashcardInterface;
      questionFormatter.response.forEach((resp) => {
        resp.state = "enable";
      });

      localStorage.setItem(
        "flashcardsGenerate",
        JSON.stringify([questionFormatter, ...getQuestionFormatter])
      );

      toast.dismiss(thinkingToast);

      return goto(`/estudiar/flashcards/${questionFormatter.id}`);
    } catch (error) {
      toast.error(
        toast("Upps, ha ocurrido un error", {
          duration: 15000,
        })
      );
      console.error("Error al obtener los datos:", error);
    } finally {
      isLoading = false;
      disabled = false;
    }
  };
</script>

<Toaster />

<LayoutInitial {user}>
  <div class="flex justify-center items-center h-screen">
    <div class="sm:max-w-3xl w-full p-4 lg:p-8  rounded-xl relative z-10">
      <div class="text-center">
        <h2 class="mt-8 text-4xl font-bold text-white">
          Ingresa un tema!
        </h2>
        <p class="mt-4 text-m text-gray-300">
          Puedes decirle que te diga: ¿Qué es la programación?.
        </p>
      </div>

      <form on:submit|preventDefault={responseGPT} class="mt-10 space-y-6 sm:w-2/3 mx-auto">
        <div class="space-y-4">
          <input
            class="text-lg p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 w-full"
            type="text"
            id="theme"
            required
            bind:value={formData.themeFlashcard}
            placeholder="¿Qué es NestJS?"
          />
        </div>
        <div class="space-y-4">
          <input
            class="text-lg p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 w-full"
            type="number"
            id="numberCards"
            required
            min="1"
            max="15"
            on:input={handleInputChange}
            bind:value={formData.numberCards}
            placeholder="¿Cuantas tarjetas deseas?"
          />
        </div>
        <div>
          {#if !disabled}
            <button
              class="my-8 w-full bg-green-600 text-gray-100 p-6 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-green-700 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Comenzar
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
        </div>
      </form>
    </div>
    <img class="hidden lg:block w-1/2 h-auto rounded-lg mt-11 mr-5" src={imagenTema} alt="Imagen Tema" />
  </div>
</LayoutInitial>
