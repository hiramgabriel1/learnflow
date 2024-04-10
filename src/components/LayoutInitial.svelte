<script lang="ts">
  /**
   * @type {import("../interfaces/MessageJwt.interface").MessageJwtInterface} User
   * @description Representa la información del usuario autenticado. Puede ser un objeto de usuario o una cadena vacía si no hay usuario autenticado.
   */
  export let user: any;

  let timer: Boolean;

  import { page } from "$app/stores";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import { envDataConf } from "../server/server";
  import toast, { Toaster } from "svelte-french-toast";
  import alarm from "$lib/public/assets/alarm.mp3";
  // import { JsonWebTokenError } from "jsonwebtoken";
  // import pomodoro from "$lib/public/assets/pomodoro.svg";

  import "./style.css";

  const pathCurrent = $page.url.pathname;

  let inputValue = 1;
  let miliSeconds = 0;
  let currentTimeAlarm: Number;
  let interval: Number | any;
  let showModalStopAlarm: Boolean;
  let value: any;

  onMount(() => {
    const cookie = Cookies.get("jwt") || "";
    // console.log(cookie);
    // console.log(jwt.decode(cookie));
  });

  async function handleLogout() {
    try {
      const response = await fetch(`${envDataConf.URLBACK}/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      }

      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });

      console.log("Sesión cerrada correctamente");
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }

  const validateInput = (e: Event) => {
    //@ts-ignore
    value = e.target.value;

    if (value < 1 || typeof value === "string")
      toast.error("No puedes ingresar valores menores a 1");
  };

  const handleCreateTimer = () => {
    timer = false;

    if (interval) {
      clearInterval(interval); // Limpiar temporizador existente si lo hay
    }

    miliSeconds = inputValue * 60000;

    interval = setInterval(() => {
      miliSeconds -= 1000;
      console.log("El timer restante es de: " + miliSeconds / 1000);

      if (miliSeconds <= 0) {
        const audio = new Audio(alarm);

        audio.play();

        currentTimeAlarm = audio.currentTime = 0;
        showModalStopAlarm = true;

        clearInterval(interval); // Limpiar temporizador cuando termine
        setTimeout(() => {
          audio.pause();
        }, 10000); // 10 seconds
      }
    }, 1000);
  };

  let hoverDashboard = false;
  let hoverEstudiar = false;
  let hoverAsistente = false;
  let hoverGenerador = false;
  let hoverAjuste = false;
  let hoverSalir = false;

  function toggleMenu() {
    const sidebar = document.querySelector(".app-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("sidebar-active");
    }
  }
</script>

<Toaster />

<main class="app-container">
  <header class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">Learnflow AI</p>
      <div class="search-wrapper">
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
      <button
        class="md:hidden flex items-center justify-center  bg-secondary rounded p-1  hover:cursor-pointer hover:scale-105 hover:border-2git  border-primary"
        on:click={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 48 48"
          ><path
            fill="none"
            color="#000000"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M7.95 11.95h32m-32 12h32m-32 12h32"
          /></svg
        >
      </button>
      <a class=" add-btn" href="/estudiar">
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

      <!-- poner un nuevo icon -->
      <button class="activate-pomodoro" on:click={() => (timer = true)}>
        <!-- <img src={pomodoro} alt=""> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-alarm-filled"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -1 1v3l.007 .117a1 1 0 0 0 .993 .883h2l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z"
            stroke-width="0"
            fill="#fff"
          />
          <path
            d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z"
            stroke-width="0"
            fill="#fff"
          />
          <path
            d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z"
            stroke-width="0"
            fill="#fff"
          />
        </svg>
      </button>

      <a class="profile-btn" href="/profile">
        <span>{user && user.userName}</span>
      </a>
    </div>
  </header>
  <aside class="app-content">
    <nav class="app-sidebar">
      <!-- <Tooltip> -->
      <div class="flex flex-col gap-5">
        <div
          class=" rounded-full p-2 flex hover:bg-gray-500"
          style="
          display: flex;
          text-align: left;
          height: 3em;
          width: 10em;
          color: white;
          padding: 10px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          transition: background-color 0.3s;
          cursor: pointer;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            height="24"
            width="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <a href="/dashboard">Dashboard</a>
        </div>

        <div
          class=" rounded-full p-2 flex hover:bg-gray-500"
          style="
        display: flex;
        text-align: left;
        height: 3em;
        width: 10em;
        color: white;
        padding: 10px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        transition: background-color 0.3s;
        cursor: pointer;
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="24"
            width="24"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
            />
          </svg>
          <a href="/estudiar">Estudiar</a>
        </div>

        <div
          class=" rounded-full p-2 flex hover:bg-gray-500"
          style="
      display: flex;
      height: 3em;
      width: 10em;
      color: white;
      padding: 10px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      transition: background-color 0.3s;
      cursor: pointer;
      "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="24"
            width="24"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"
            />
          </svg>
          <a href="/asistente">Asistente</a>
        </div>

        <div
          class="rounded-full p-2 flex hover:bg-gray-500"
          style="
      display: flex;
      height: 3em;
      width: 10em;
      color: white;
      padding: 10px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      transition: background-color 0.3s;
      cursor: pointer;
      "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"
            />
          </svg>
          <a href="/image-generator">Generar IMG</a>
        </div>

     <!-- ! poner solo para desarrollo NO produccion todavia -->
        <!-- <div
          class=" rounded-full p-2 flex hover:bg-gray-500"
          style="
    display: flex;
    height: 3em;
    width: 10em;
    color: white;
    padding: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    transition: background-color 0.3s;
    cursor: pointer;
    "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>
              <a href="/configuracion">Configuracion</a>
        </div> -->

        <button
          id="logoutButton"
          on:click={handleLogout}
          class=" rounded-full p-2 flex hover:bg-gray-500"
          style="
  display: flex;
  height: 3em;
  width: 10em;
  color: white;
  padding: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  transition: background-color 0.3s;
  cursor: pointer;
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
          <a href="/configuracion">Salir</a>
        </button>

        <!-- <a
            href="/dashboard"
            class={`app-sidebar-link ${pathCurrent.includes("/dashboard") && "active text-slate-50"}`}
            title="dashboard"
            on:mouseenter="{() => hoverDashboard = true}"
            on:mouseleave="{() => hoverDashboard = false}"
            style="
            display: flex;
            text-align: left;
            height: 3em;
            width: 10em;
            color: white;
            padding: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            background-color: #16a34a;
            background-color: {hoverDashboard ? '#21232b' : '#16a34a'};
            transition: background-color 0.3s;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="24"
              width="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              fill="#fff"
              class="mr-3"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            <span class="ml-3">

              Dashboard
            </span>
          </a> -->

        <!-- <a
          href="/estudiar"
          class={`app-sidebar-link ${pathCurrent.includes("/estudiar") && "active text-slate-50"}`}
          title="estudiar"
          on:mouseenter={() => (hoverEstudiar = true)}
          on:mouseleave={() => (hoverEstudiar = false)}
          style="
            display: flex;
            text-align: left;
            height: 3em;
            width: 10em;
            color: white;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            padding: 10px;
            background-color: #16a34a;
            background-color: {hoverEstudiar ? '#21232b' : '#16a34a'};
            transition: background-color 0.3s;
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="24"
            width="24"
            fill="#fff"
            class="mr-3"
          >
            <path
              d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
            />
          </svg>
          <span class="ml-3"> Estudiar </span>
        </a> -->
        <!-- <a
          href="/asistente"
          class={`app-sidebar-link ${pathCurrent.includes("/asistente") && "active text-slate-50"}`}
          title="asistente"
          on:mouseenter={() => (hoverAsistente = true)}
          on:mouseleave={() => (hoverAsistente = false)}
          style="
            display: flex;
            gap: 10px;
            height: 3em;
            width: 10em;
            color: white;
            padding: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            background-color: #16a34a;
            justify-content: space-around;
            transition: background-color 0.3s;
            background-color: {hoverAsistente ? '#21232b' : '#16a34a'};
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="24"
            width="24"
            fill="#fff"
          >
            <path
              d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"
            />
          </svg>
          Asistente
        </a> -->

        <!-- <a
          href="/image-generator"
          class={`app-sidebar-link ${pathCurrent.includes("/image-generator") && "active text-slate-50"}`}
          title="image-generator"
          on:mouseenter={() => (hoverGenerador = true)}
          on:mouseleave={() => (hoverGenerador = false)}
          style="
            display: flex;
            gap: 10px;
            height: 3em;
            width: 10em;
            color: white;
            padding: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            background-color: #16a34a;
            justify-content: space-around;
            transition: background-color 0.3s;
            background-color: {hoverGenerador ? '#21232b' : '#16a34a'};
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill="#fff"
          >
            <path
              d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"
            />
          </svg>
          Generar IMG
        </a> -->
        <!-- <a
          href="/configuracion"
          class={`app-sidebar-link ${pathCurrent.includes("/configuracion") && "active text-slate-50"}`}
          title="configuracion"
          on:mouseenter={() => (hoverAjuste = true)}
          on:mouseleave={() => (hoverAjuste = false)}
          style="
            display: flex;
            gap: 10px;
            height: 3em;
            width: 10em;
            color: white;
            padding: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            background-color: #16a34a;
            justify-content: space-around;
            transition: background-color 0.3s;
            background-color: {hoverAjuste ? '#21232b' : '#16a34a'};
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            fill="#fff"
          >
            <path
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>
          Configuracion
        </a> -->
        <!-- <button
          class="mt-4"
          id="logoutButton"
          on:click={handleLogout}
          on:mouseenter={() => (hoverSalir = true)}
          on:mouseleave={() => (hoverSalir = false)}
          style="
            display: flex;
            gap: 10px;
            height: 3em;
            width: 10em;
            color: white;
            padding: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            background-color: #16a34a;
            align-items: center;
            justify-content: space-around;
            transition: background-color 0.3s;
            background-color: {hoverSalir ? '#21232b' : '#16a34a'};
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            fill="#fff"
          >
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
          Salir
        </button> -->
      </div>
    </nav>

    <!-- todo: menu index -->
    <slot />
  </aside>
</main>

<!-- modal to create timer here -->
{#if timer}
  <!-- component -->
  <div class="flex items-center justify-center h-screen">
    <div>
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <!-- Modal -->
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <!-- Modal panel -->
          <div
            class="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-[#1f2937] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <!-- Modal content -->
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <!-- Icon for newsletter -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-hourglass"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6.5 7h11" />
                    <path d="M6.5 17h11" />
                    <path
                      d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z"
                    />
                    <path
                      d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z"
                    />
                  </svg>
                </div>
                <div
                  class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                >
                  <h3
                    class="text-lg leading-6 font-medium text-white"
                    id="modal-headline"
                  >
                    Añadir un temporizador
                  </h3>
                  <form
                    on:submit|preventDefault={handleCreateTimer}
                    class="mt-2"
                  >
                    <p class="text-sm text-white">
                      <!-- ! modificar éste texto -->
                      La técnica divide el trabajo en intervalos cortos de 25 minutos,
                      llamados "pomodoros", seguidos de pausas de 5 minutos.
                    </p>
                    <input
                      type="number"
                      class="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                      on:input={validateInput}
                      bind:value={inputValue}
                      max="30"
                      min="1"
                      placeholder="Ingresa el tiempo de estudio"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div
              class="bg-[#1f2937] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <!-- Subscribe button -->
              {#if value < 1}
                <button
                  type="button"
                  disabled
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Añadir
                </button>
              {:else}
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  on:click={handleCreateTimer}
                >
                  Añadir
                </button>
              {/if}

              <!-- Cancel button -->
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                on:click={() => (timer = false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
{#if showModalStopAlarm}
  <!-- component -->
  <div class="flex items-center justify-center h-screen">
    <div>
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <!-- Modal -->
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <!-- Modal panel -->
          <div
            class="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <!-- Modal content -->
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <!-- Icon for newsletter -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-hourglass"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6.5 7h11" />
                    <path d="M6.5 17h11" />
                    <path
                      d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z"
                    />
                    <path
                      d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z"
                    />
                  </svg>
                </div>
                <div
                  class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                >
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Añadir un pomodoro
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      <!-- ! modificar éste texto -->
                      Puedes aplazar el tiempo si deseas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <!-- Subscribe button -->
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                on:click={() => ((timer = true), (showModalStopAlarm = false))}
              >
                Aplazar
              </button>

              <!-- Cancel button -->
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                on:click={() => (showModalStopAlarm = false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
