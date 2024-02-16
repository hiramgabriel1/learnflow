<script>
  import "../../../app.css";
  import video from "$lib/public/assets/video.mp4";
  import google from "$lib/public/assets/google.svg";
  // import { env } from "$lib/env";

  // const clientID = import.meta.env.CLIENT_ID
  // const debugMode = import.meta.env.DEBUG === true

  // @ts-ignore
  let formData = {
    username: '',
    lastName: '',
    userEmail: '',
    contraseña: '',
    isStudent: '',
    reasons: '',
  }

  // @ts-ignore
  const formHandler = async () => {

  }

  const handleButton = () => {
    const client_id = "7c5fdb1ab913c01760da"

    // console.log(env);
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + client_id)
  }
</script>

<div class="2xl:container h-screen m-auto">
  <div hidden class="fixed inset-0 w-7/12 lg:block">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      class="w-full h-full object-cover"
      loop
      autoplay
      src={video}
      poster="../../../lib/public/assets/bg.jpg"
    ></video>
  </div>
  <!-- svelte-ignore a11y-unknown-role -->
  <div
    hidden
    role="hidden"
    class="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"
  ></div>
  <div class="relative h-full ml-auto lg:w-6/12">
    <div class="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
      <div class="space-y-4">
        <p class="text-xl" style="font-size: 60px;">
          Learnflow
          <!-- <img src="../public/images/logo.svg" class="w-40" alt="tailus logo" /> -->
        </p>
        <p class="font-medium text-lg text-gray-600">
          Bienvenido a Learnflow AI. Crea una cuenta y comienza la magia!
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <button
          class="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
        >
          <div class="flex gap-4 justify-center">
            <img src={google} class="w-5" alt="" />
            <span
              class="block w-max font-medium tracking-wide text-sm text-blue-700"
              >Google</span
            >
          </div>
        </button>
        <button
          class="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700"
        >
          <div class="flex gap-4 items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-5"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <span
              class="block w-max font-medium tracking-wide text-sm text-white"
              on:click={handleButton}
              >Github</span
            >
          </div>
        </button>
      </div>

      <!-- svelte-ignore a11y-unknown-role -->
      <div role="hidden" class="mt-12 border-t">
        <span
          class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white"
          >o</span
        >
      </div>

      <form class="space-y-6 py-6">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            required
            class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Apellido"
            required
            class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
          />
        </div>

        <div>
            <input
              type="email"
              placeholder="Email"
              required
              class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Contraseña"
              required
              class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            />
          </div>

        <div>
          <input
            type="text"
            placeholder="¿Eres estudiante?"
            class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
          />
        </div>

        <div class="flex flex-col items-end">
          <input
            type="text"
            placeholder="¿Por que quieres usar Learnflow?"
            class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
          />
          <button type="reset" class="w-max p-3 -mr-3">
            <span class="text-sm tracking-wide text-blue-600"
              >Olvidé mi contraseña
            </span>
          </button>
        </div>

        <div>
          <button
            class="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
            on:click={handleButton}
          >
            <span class="font-semibold text-white text-lg">Crear cuenta</span>
          </button>
          <a href="/auth/login" type="reset" class="w-max p-3 -ml-3">
            <span class="text-sm tracking-wide text-blue-600"
              >Ya tengo una cuenta</span
            >
          </a>
        </div>
      </form>
    </div>
  </div>
</div>
