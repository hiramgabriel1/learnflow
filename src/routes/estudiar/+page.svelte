<script lang="ts">
  export let data;
  const { user } = data;

  import "../../app.css";
  import "../../main.styles.css";
  import { goto } from "$app/navigation";
  import toast, { Toaster } from "svelte-french-toast";
  import { envDataConf } from "../../server/server";
  import LayoutInitial from "../../components/LayoutInitial.svelte";

  let currentDate = new Date();
  let disabled: boolean;
  let showLoading: any;

  let formData = {
    themeFlashcard: "",
    numberCards: "",
  };

  let isLoading = false;

  // @ts-ignore
  const handleInputChange = async (e) => {
    const value = e.target.value;

    if (value <= 0) {
      toast.error("Ingresa un valor mayor ó igual a 1");
      disabled = true;
    } else {
      disabled = false;
    }
  };

  // let questionIA = "";
  // let responseIA = "";

  const responseGPT = async () => {
    try {
      disabled = true;
      showLoading = true;
      // @ts-ignore
      if (formData.themeFlashcard === "" || !isNaN(formData.themeFlashcard)) {
        return toast.error("Ingresa un tema! 🚀");
      }

      // // Verificar si el número de tarjetas está presente y es un número válido
      // if (isNaN(formData.cards) || formData.cards <= 0) {
      //   return toast.error("Ingresa un número válido de tarjetas! 🚀");
      // }

      // Mostrar el toast "pensando"
      const thinkingToast = toast(
        "Pensando... esto puede tomar unos segundos 🧠",
        {
          duration: 15000,
        }
      );

      console.log(Number(formData.numberCards));

      // setTimeout(() => {
      //   toast("tranquilo, esto tomará solo unos segundos! 😃", {
      //     duration: 10000,
      //   });
      // }, 17000);

      const api = "https://learnflow-services.up.railway.app/api/v1/flashcard/generate-ai";

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
      const { question, response } = responseApi;

      console.log(responseApi);
      console.log(question);
      console.log(response);
      //Almacenar los valores en el localStorage
      localStorage.setItem("question", question);
      localStorage.setItem("response", response.toString());

      toast.dismiss(thinkingToast);

      return goto("/estudiar/flashcards");
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

<LayoutInitial user={user}>
  <!-- todo: menu index -->
  <div class="projects-section">
    <div class="projects-section-header">
      <!-- <p>Fecha</p> -->
      <p class="time">{currentDate.toLocaleDateString()}</p>
    </div>

    <br /><br />

    <!-- todo: enter GPT DUDE -->
    <div class="relative flex items-center justify-center py-12 px-6 lg:px-12">
      <div class="absolute opacity-60 inset-0 z-0"></div>
      <div class="sm:max-w-3xl w-full p-12 bg-white rounded-xl z-10">
        <div class="text-center">
          <h2 class="mt-8 text-4xl font-bold text-gray-900">
            Ingresa un tema!
          </h2>
          <p class="mt-4 text-lg text-gray-400">
            Puedes decirle que te diga qué es la programación.
          </p>
        </div>

        <!-- ? form here -->
        <form on:submit|preventDefault={responseGPT} class="mt-10 space-y-6">
          <div class="grid grid-cols-1 space-y-4">
            <input
              class="text-lg p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
              type="text"
              id="theme"
              required
              bind:value={formData.themeFlashcard}
              placeholder="¿Qué es NestJS?"
            />
          </div>
          <div class="grid grid-cols-1 space-y-4">
            <input
              class="text-lg p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
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
                class="my-8 w-full flex justify-center bg-blue-500 text-gray-100 p-6 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
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
    </div>
  </div>
</LayoutInitial>
