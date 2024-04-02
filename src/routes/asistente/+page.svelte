<script lang="ts">
  export let data;
  const { user } = data;

  import "../../app.css";
  import "../../main.styles.css";
  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";
  import { envDataConf } from "../../server/server";
  import LayoutInitial from "../../components/LayoutInitial.svelte";

  let currentDate = new Date();
  let disabled: boolean;

  interface FormData {
    question: string;
  }

  let formData: FormData = {
    question: "",
  };

  let suggestion: any;
  let responseMarcyAI: any;
  let marcyIsResponse: boolean;
  let sending: boolean;
  let loadingSuggestions = true;
  let suggestionArrayList: any[] = [];

  const handleInputChange = async (e: Event) => {
    // @ts-ignore
    const value = e.target.value;

    if (value <= 0) {
      toast.error("Ingresa un valor mayor ó igual a 1");
      disabled = true;
    } else {
      disabled = false;
    }
  };

  const sendQuestionToMarcyAI = async () => {
    sending = true;
    toast.success("Esto puede tardar unos segundos... 🧠");
    try {
      const sendRequest = await fetch(
        `${envDataConf.URLBACK}/ai/generate/question/`,
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
      formData.question = "";
      sending = false;
      console.log(responseMarcyAI);

      marcyIsResponse = true;
      console.log(sendRequest);
      console.log(typeof sendRequest);
    } catch (error) {
      console.error(error);
    }
  };

  const generateSuggestionsAI = async () => {
    try {
      const requestSuggestion = await fetch(
        `${envDataConf.URLBACK}/ai/suggestions`
      );
      if (!requestSuggestion.ok) {
        throw new Error("La solicitud no pudo completarse correctamente.");
      }
      suggestion = await requestSuggestion.text();
      suggestionArrayList = suggestion.split("\n");

      console.log(suggestionArrayList);

      loadingSuggestions = false;
      console.log(suggestion);
    } catch (error) {
      console.log(error);
      //   console.error(error);
    }
  };

  onMount(() => {
    return generateSuggestionsAI();
  });

  const sendSuggestion = (sugerencias: string) => {
    formData.question = sugerencias.slice(3);
    console.log(formData.question);
  };
</script>

<Toaster />

<LayoutInitial {user}>
  <!-- todo: menu index -->
  <div class="projects-section overflow-auto">
    <div class="projects-section-header overflow-auto">
      <!-- <p>Fecha</p> -->
      <p class="time">{currentDate.toLocaleDateString()}</p>
    </div>

    <br /><br />

    <!-- todo: assistant code -->
    <div class="w-9/12 mx-auto p-8">
      <h1 class="text-4xl font-extrabold mb-1">MarcyAI</h1>
      <p class="text-lg text-gray-600 mb-6">AI Assistant for Students</p>
      <div class="flex items-center mb-10">
        <span
          class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
          ><img
            class="aspect-square h-full w-full"
            alt="AI"
            src="https://imgs.search.brave.com/RK4eSupiqRKVzr36sUJ3xjc5x3KMrwE5cvDdcdLOkaU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYXBw/eS1wZXJzb24tcG9y/dHJhaXQtc21pbGlu/Zy13b21hbi10YW5u/ZWQtc2tpbi1jdXJs/eS1oYWlyLWhhcHB5/LXBlcnNvbi1wb3J0/cmFpdC1zbWlsaW5n/LXlvdW5nLWZyaWVu/ZGx5LXdvbWFuLTE5/NzUwMTE4NC5qcGc"
          /></span
        >
        <p class="ml-4 flex-1">
          Hola! Me dicen Marcy. ¿Cómo puedo ayudarte hoy?
        </p>
      </div>
      <form
        class="flex items-center bg-gray-100 p-4 rounded-lg mb-6"
        on:submit|preventDefault={sendQuestionToMarcyAI}
      >
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 mr-4"
          placeholder="Comenzar una conversación con MarcyAI..."
          bind:value={formData.question}
        />

        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-black"
          style="color: white; width: 100px"
          disabled={sending}
        >
          {sending ? "Pensando..." : "Enviar"}
        </button>
      </form>
      <div class="min-w-96">
        <!-- todo: response MarcyAI -->
        {#if marcyIsResponse}
          <p><b>MarcyAI:</b> {responseMarcyAI.response}</p>
        {:else}
          <h2 class="text-2xl font-semibold mb-4">Sugerencias</h2>
          <div class="overflow-auto">
            {#if loadingSuggestions}
              <span>Creando sugerencias... 🧠</span>
            {:else}
              {#each suggestionArrayList as sugerencias}
                <ul class="my-5">
                  <li class="flex items-center justify-between py-2 border-b">
                    <!-- todo: renderización de sugerencias -->
                    <span class="font-bold">{sugerencias.slice(2)}</span>
                    <button on:click={() => sendSuggestion(sugerencias)}>
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              {/each}
            {/if}
          </div>
        {/if}
        <!-- sugerencias -->
      </div>
    </div>
    <!-- finish -->
  </div>
</LayoutInitial>
