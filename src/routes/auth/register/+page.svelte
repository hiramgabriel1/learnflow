<script>
  import "../../../app.css";
  // import google from "$lib/public/assets/google.svg";
  // import poster from "$lib/public/assets/bg.jpg";
  import toast, { Toaster } from "svelte-french-toast";
  import { envDataConf } from "../../../server/server";

  // @ts-ignore
  let formData = {
    username: "",
    lastName: "",
    userEmail: "",
    isStudent: false,
    reasonsToUseApp: "",
    password: "",
  };

  const formHandler = async () => {
    try {
      const saveUser = await fetch(`${envDataConf.URLBACK}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      console.log(saveUser);

      if (!saveUser.ok && saveUser.status !== 201 && saveUser.status !== 200) {
        return toast.error(
          "ha habido un error al intentar registrarte, vuelve a intentar más tarde o intenta con otro nombre y correo"
        );
      } else if (saveUser.statusText === "400" && saveUser.status === 400) {
        return toast.error("el usuario ingresado ya éxiste");
      } else if (saveUser.ok) {
        toast.success("registrado éxitosamente");

        formData = {
          username: "",
          lastName: "",
          userEmail: "",
          isStudent: false,
          reasonsToUseApp: "",
          password: "",
        };

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      }

      console.log(saveUser.status);

      saveUser.status === 400 ? console.log("si") : console.log("no");
    } catch (error) {
      console.error(error);
      throw new Error("bad request");
    }
  };

  // todo: auth methods here
  const handleAuthGithub = () => {
    toast.success("github auth no disponible");
    // const client_id = "df98834eb79fa591677f";

    // window.location.assign(
    //   "https://github.com/login/oauth/authorize?client_id=" + client_id
    // );
  };

  const handleAuthGoogle = async () => {
    try {
      toast.success("google no disponible");
      //   const res = await auth.signInWithPopup(provider);
      //   console.log(res);

      //   // @ts-ignore
      //   history.push("/dashboard");
      // } catch (error) {
      //   console.log(error);
      // }

      // console.log("progress...");
    } catch (err) {
      toast.error("Ha ocurrido un error intenta más tarde...");
      console.error(err);
    }
  };
</script>

<Toaster />

<div class="max-w-screen shadow flex justify-center bg-background">
  <!-- Contenedor de la imagen (visible en dispositivos de pantalla grande) -->
  <div class="hidden lg:flex lg:w-1/2 relative justify-center">
    <div class="fixed mt-12">
      /
      <img src="/src/lib/public/assets/img-register.jpg" alt="image-register" />
    </div>
  </div>

  <!-- Contenedor del formulario -->
  <div class="lg:w-1/2 p-6 sm:p-12 z-10">
    <div>
      <h1
        class="text-2xl xl:text-4xl font-extrabold text-center text-secondary"
      >
        Learnflow AI
      </h1>
    </div>
    <div class="mt-5 flex flex-col items-center">
      <h4
        class="text-lg lg:text-xl font-semibold text-center text-secondary max-w-md"
      >
        ¡Bienvenido a Learnflow AI! Crea una cuenta y comienza la magia.
      </h4>

      <div class="w-full flex-1 mt-8">
        <div class="flex flex-col items-center">
          <!-- Botones de registro con Google y GitHub -->
          <button
            on:click={handleAuthGoogle}
            class="w-full max-w-md font-bold shadow-sm rounded-full py-3 border border-primary text-secondary flex items-center justify-center transition-all duration-500 ease-in-out focus:outline-none hover:shadow-xl hover:scale-105 focus:shadow-xl focus:shadow-outline"
          >
            <div class="bg-white p-2 rounded-full">
              <svg class="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span class="ml-4">Registrarse con Google</span>
          </button>

          <button
            on:click={handleAuthGithub}
            class="w-full max-w-md font-bold shadow-sm rounded-full py-3 text-secondary border border-primary flex items-center justify-center transition-all duration-500 ease-in-out focus:outline-none hover:shadow-xl hover:scale-105 focus:shadow-sm focus:shadow-outline mt-5"
          >
            <div class="bg-white p-1 rounded-full">
              <svg class="w-6" viewBox="0 0 32 32">
                <path
                  fill-rule="evenodd"
                  d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                />
              </svg>
            </div>
            <span class="ml-4">Registrarse con GitHub</span>
          </button>
        </div>

        <div class="my-8 border-b text-center max-w-md mx-auto">
          <div
            class="leading-none px-2 inline-block text-sm tracking-wide font-medium bg-background text-secondary transform translate-y-1/2"
          >
            O
          </div>
        </div>

        <!-- Formulario de registro -->
        <form on:submit|preventDefault={formHandler} class="space-y-6">
          <div class="flex flex-col gap-3 mx-auto max-w-md">
            <label class="text-secondary text-sm" for="">Nombre</label>
            <input
              class="w-full px-8 py-4 rounded-lg font-medium border text-secondary border-gray-200 placeholder-gray-400 text-sm focus:outline-primary 0 bg-transparent"
              placeholder="Introduce tu nombre"
              bind:value={formData.username}
              required
              minlength="4"
            />
            <label class="text-secondary text-sm" for="">Apellido</label>
            <input
              class="w-full px-8 py-4 rounded-lg font-medium border text-secondary border-gray-200 placeholder-gray-400 text-sm focus:outline-primary bg-transparent"
              placeholder="Introduce tu apellido"
              bind:value={formData.lastName}
              required
              minlength="5"
            />
            <label class="text-secondary text-sm" for=""
              >Razones por las que quieres usar la App</label
            >
            <input
              class="w-full px-8 py-4 rounded-lg font-medium border text-secondary border-gray-200 placeholder-gray-400 text-sm focus:outline-primary bg-transparent"
              placeholder="Cuentanos porque quieres usar nuestro software"
              minlength="10"
              required
              bind:value={formData.reasonsToUseApp}
            />
            <label class="text-secondary text-sm" for=""
              >Correo electrónico</label
            >
            <input
              class="w-full px-8 py-4 rounded-lg font-medium border text-secondary border-gray-200 placeholder-gray-400 text-sm focus:outline-primary bg-transparent"
              type="email"
              placeholder="example@xyz.com"
              bind:value={formData.userEmail}
              required
            />
            <label class="text-secondary text-sm" for="">Contraseña</label>
            <input
              class="w-full px-8 py-4 rounded-lg font-medium border text-secondary border-gray-200 placeholder-gray-400 text-sm focus:outline-primary bg-transparent"
              type="password"
              placeholder="*********"
              bind:value={formData.password}
              required
            />

            <button
              class="mt-5 mb-10 xl:max-w-sm xl:mx-auto tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <svg
                class="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span class="ml-3"> Crear cuenta </span>
            </button>
          </div>
          <div class="flex w-full items-center justify-center gap-1">
            <span class="text-sm text-secondary">¿Ya tienes una cuenta?</span>
            <a href="/auth/login" type="reset" class="w-max">
              <span
                class="text-md tracking-wide text-secondary hover:text-primary underline"
              >
                Inicia sesión aqui</span
              >
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
