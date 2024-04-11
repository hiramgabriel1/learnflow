<script>
  import "../app.css";
  import ceoProfile from "$lib/public/images/profile.jpg";
  import memberJaf from "$lib/public/images/jafet.webp";
  import memberCrisFront from "$lib/public/images/crisfront.webp";
  import memberEcuDaniFront from "$lib/public/images/ecuadaniflow.webp";
  import memberLohanaFront from "$lib/public/images/lohana.jpeg";
  import memberCecilFront from "$lib/public/images/cecil.png";

  const imagesSlider = [
    "https://crehana-blog.imgix.net/media/filer_public/72/92/729243d3-0d4a-455b-b680-ec4f8ab237a1/tecnologia-futurista-glass.jpg?auto=format&q=50",
    "https://cdn.pixabay.com/photo/2023/12/21/19/00/city-8462425_1280.png",
    "https://i.pinimg.com/736x/1b/d2/0b/1bd20b54564d52930bd77af2e199375c.jpg",
    "https://www.harvard-deusto.com/sites/default/files/styles/article_front/public/2022-09/foto-prospectiva-estrategica.jpg?itok=cpHvCuVw",
  ];

  import { onMount } from "svelte";
  import Swiper from "swiper/bundle";
  import { Pagination } from "swiper/modules";
  import "swiper/css/bundle";
  import "swiper/css/pagination";
  import "swiper/css/effect-cards";

  onMount(() => {
    //@ts-ignore
    let swiper = new Swiper(".proofSlides", {
      effect: "cube",
      cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        //@ts-ignore
        duration: 500,
      },
      grabCursor: true,
      modules: [Pagination],
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  });
  let showMenu = false;
</script>

<body
  class="bg-white dark:bg-[#090d0f] dark:before:fixed dark:before:-z-50 dark:before:inset-0 dark:before:bg-gray-950/50"
>

<header>
  <nav
    class="fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg  border-b border-x dark:border-[#1a232a] backdrop-blur-2xl"
  >
    <div class="px-6 m-auto max-w-6xl 2xl:px-0">
      <div class="flex flex-wrap items-center justify-between py-2 sm:py-4">
        <div class="w-full items-center flex justify-between lg:w-auto">
          <a href="/" aria-label="tailus logo">
            <span class="text-white text-3xl">LearnFlowAI</span>
          </a>
          <button
            class="block lg:hidden"
            on:click={() => showMenu = !showMenu}
          >
            <svg
              class="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class="{showMenu ? 'block bg-black/50 text-white' : 'hidden lg:hidden'} lg:hidden rounded-b-lg lg:rounded-none w-full"
        >
          <ul class="py-4 space-y-4 text-left bg-black"> <!-- Cambiado el fondo de gris a negro -->
            <li class="pl-3">
              <a
                href="/"
                class="block transition hover:text-green-600 dark:hover:text-green-400 text-white"
              > <!-- Quitado el underline -->
                <span>Features</span>
              </a>
            </li>
            <li class="pl-3">
              <a
                href="#conocer"
                class="block transition hover:text-green-600 dark:hover:text-green-400 text-white"
              > <!-- Quitado el underline -->
                <span>Conocer mas</span>
              </a>
            </li>
            <li class="pl-3">
              <a
                href="#creadores"
                class="block transition hover:text-green-600 dark:hover:text-green-400 text-white"
              > <!-- Quitado el underline -->
                <span>Creadores</span>
              </a>
            </li>
            <li class="pl-3">
              <a
                href="#blog"
                class="block transition hover:text-green-600 dark:hover:text-green-400 text-white"
              > <!-- Quitado el underline -->
                <span>Novedades</span>
              </a>
            </li>
            <li>
              <button
                on:click={() => (window.location.href = "/auth/login")}
                class="inline-block min-w-min h-9 ml-2 group flex items-center rounded-full disabled:border :select-none [&>:not(.sr-only)]:relative :disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark::disabled:!text-white hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center bg-green-500"
              > <!-- Cambiado a inline-block y min-w-min, añadido ml-2 para el margen izquierdo -->
                <span>Iniciar Sesión</span>
              </button>
            </li>
            <li>
              <button
                on:click={() => (window.location.href = "/auth/register")}
                class="inline-block min-w-min h-9 ml-2 group flex items-center rounded-full disabled:border :select-none [&>:not(.sr-only)]:relative :disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark::disabled:!text-white hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center bg-green-500"
              > <!-- Cambiado a inline-block y min-w-min, añadido ml-2 para el margen izquierdo -->
                <span>Crear cuenta</span>
              </button>
            </li>
          </ul>
        </div>
        <!-- Aquí continúa el resto del contenido del header -->
        <div
          class="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap"
        >
          <div
            class="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0"
          >
            <ul
              class="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0"
            >
              <li>
                <a
                  href="/"
                  class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                >
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a
                  href="#conocer"
                  class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                >
                  <span>Conocer mas</span>
                </a>
              </li>
              <li>
                <a
                  href="#creadores"
                  class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                >
                  <span>Creadores</span>
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                >
                  <span>Novedades</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>






  <main class="overflow-hidden">
    <section class="relative">
      <div class="relative pt-24 lg:pt-28">
        <div class="mx-auto px-6 max-w-7xl md:px-12">
          <div
            class="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5"
          >
            <a
              href="/auth/login"
              class="border w-fit mx-auto flex justify-between items-center transition duration-200 rounded-full border-white hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color] p-1 group gap-2"
            >
              <span
                class="block text-sm px-2 py-0.5 rounded-full text-white bg-green-600"
                >New</span
              >
              <span
                class="text-sm font-medium text-gray-700 dark:text-gray-300 flex gap-6"
              >
                Introduccion a LearnFlowAI
                <div
                  class="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300"
                >
                  <span
                    class="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"
                  ></span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 text-gray-950 dark:text-white -translate-x-2 transition duration-300 group-hover:translate-x-px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </span>
            </a>
            <h1
              class="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]"
            >
              Convierte tu curiosidad <br class="hidden sm:block" /> en conocimiento.
            </h1>
            <p
              class="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block"
            >
              The world's leading Ai Learnflow
            </p>

            <div class="mt-8 flex flex-col items-center justify-center gap-4">
              <div
                class="p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5"
              >
                <a
                  href="/auth/register"
                  class=":select-none dark:shadow-green-500/10 *:disabled:opacity-20 disabled::text-gray-300 disabled:dark::text-gray-700 dark::disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-3xl border border-green-600 bg-green-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-green-600 active:bg-green-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative"
                >
                  <svg
                    class="size-5 relative"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="opacity-20 dark:opacity-50"
                      d="M7.40705 15L5.10627 16.7375C5.0234 16.8039 4.92499 16.848 4.82033 16.8658C4.71567 16.8836 4.6082 16.8744 4.50806 16.8392C4.40793 16.8039 4.31842 16.7437 4.24798 16.6643C4.17755 16.5849 4.12851 16.4888 4.10549 16.3852L3.13986 12.0391C3.11906 11.9458 3.11993 11.8489 3.14241 11.756C3.16489 11.6631 3.20839 11.5766 3.26955 11.5031L5.63752 8.66484C5.5469 10.4883 5.99221 12.6117 7.40705 15ZM16.7305 11.5031L14.3625 8.66484C14.4571 10.4883 14.0078 12.6117 12.593 15L14.8938 16.7375C14.9766 16.8039 15.075 16.848 15.1797 16.8658C15.2844 16.8836 15.3918 16.8744 15.492 16.8392C15.5921 16.8039 15.6816 16.7437 15.7521 16.6643C15.8225 16.5849 15.8715 16.4888 15.8946 16.3852L16.8602 12.0391C16.881 11.9458 16.8801 11.8489 16.8576 11.756C16.8351 11.6631 16.7917 11.5766 16.7305 11.5031Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.875 17.5C11.875 17.6658 11.8092 17.8247 11.6919 17.9419C11.5747 18.0591 11.4158 18.125 11.25 18.125H8.75C8.58424 18.125 8.42527 18.0591 8.30806 17.9419C8.19085 17.8247 8.125 17.6658 8.125 17.5C8.125 17.3342 8.19085 17.1753 8.30806 17.0581C8.42527 16.9408 8.58424 16.875 8.75 16.875H11.25C11.4158 16.875 11.5747 16.9408 11.6919 17.0581C11.8092 17.1753 11.875 17.3342 11.875 17.5ZM10 8.75C10.1854 8.75 10.3667 8.69501 10.5208 8.592C10.675 8.48899 10.7952 8.34257 10.8661 8.17126C10.9371 7.99996 10.9557 7.81146 10.9195 7.6296C10.8833 7.44774 10.794 7.2807 10.6629 7.14959C10.5318 7.01847 10.3648 6.92919 10.1829 6.89301C10.001 6.85684 9.81254 6.8754 9.64123 6.94636C9.46993 7.01732 9.32351 7.13748 9.2205 7.29165C9.11748 7.44582 9.0625 7.62708 9.0625 7.8125C9.0625 8.06114 9.16127 8.2996 9.33709 8.47541C9.5129 8.65123 9.75136 8.75 10 8.75ZM17.4703 12.1742L16.5047 16.5203C16.4589 16.7267 16.3615 16.9181 16.2216 17.0766C16.0817 17.2351 15.9039 17.3555 15.7048 17.4266C15.5057 17.4977 15.2918 17.5172 15.0832 17.4831C14.8745 17.4491 14.6779 17.3627 14.5117 17.232L12.3836 15.625H7.61797L5.48828 17.232C5.3221 17.3627 5.12549 17.4491 4.91684 17.4831C4.70819 17.5172 4.49431 17.4977 4.29522 17.4266C4.09613 17.3555 3.91832 17.2351 3.77842 17.0766C3.63853 16.9181 3.54112 16.7267 3.49531 16.5203L2.52969 12.1742C2.48873 11.9877 2.4908 11.7943 2.53574 11.6087C2.58068 11.4231 2.66731 11.2502 2.78906 11.1031L5.02031 8.42656C5.0952 7.44292 5.32102 6.47666 5.68984 5.56172C6.69766 3.03515 8.50234 1.45 9.23437 0.885935C9.45348 0.716157 9.72281 0.624023 10 0.624023C10.2772 0.624023 10.5465 0.716157 10.7656 0.885935C11.4953 1.45 13.3023 3.03515 14.3102 5.56172C14.679 6.47666 14.9048 7.44292 14.9797 8.42656L17.2109 11.1031C17.3327 11.2502 17.4193 11.4231 17.4643 11.6087C17.5092 11.7943 17.5113 11.9877 17.4703 12.1742ZM7.76797 14.375H12.232C13.882 11.4422 14.1906 8.63437 13.1492 6.025C12.2305 3.72187 10.507 2.26562 10 1.875C9.49141 2.26562 7.76797 3.72187 6.84922 6.025C5.80937 8.63437 6.11797 11.4422 7.76797 14.375ZM6.59609 14.832C5.75495 13.3034 5.24453 11.801 5.06484 10.325L3.75 11.9031L4.71562 16.25L4.72969 16.2398L6.59609 14.832ZM16.25 11.9031L14.9352 10.325C14.757 11.7979 14.2477 13.3003 13.407 14.832L15.2703 16.2383L15.2844 16.2484L16.25 11.9031Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="text-nowrap">Comenzar</span></a
                >
              </div>
            </div>
          </div>
          <div class="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
            <div
              class="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 bg-gradient-to-b to-gray-200/25,bg-gradient-to-r from-transparent via-gray-200 to-transparent bg-no-repeat bg-16 bg-35 mask bg-opacity-95"
            ></div>
            <div
              class="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-green-300 dark:bg-white/10 mx-auto blur-3xl"
            ></div>

            <div class="swiper proofSlides pb-6">
              <div class="swiper-wrapper">
                <div class="px-6 pt-2 pb-12 swiper-slide">
                  <div
                    class="bg-white shadow-xl shadow-gray-950/5 p-6 rounded-3xl dark:border-[#1a232a] dark:bg-[#10161b] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2]"
                  >
                    <div>
                      <svg
                        class="h-12 w-fit mx-auto dark:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        ><path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V2H8m0 16l-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-6-6h2m5-1v2m6-2v2m5-1h2"
                        />
                      </svg>

                      <svg
                        class="h-12 w-fit mx-auto hidden dark:block"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        ><path
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V2H8m0 16l-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-6-6h2m5-1v2m6-2v2m5-1h2"
                        />
                      </svg>

                      <p
                        class="mt-6 text-lg text-gray-950 dark:text-white text-center"
                      >
                        Estudia con nuestro chat
                      </p>
                    </div>
                    <span
                      class="glow absolute inset-[calc(var(--border-width)*-1)] rounded-3xl border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
                    >
                      <span
                        class="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"
                      ></span>
                    </span>
                  </div>
                </div>
                <div class="px-6 pt-2 pb-12 swiper-slide">
                  <div
                    class="bg-white shadow-xl shadow-gray-950/5 p-6 rounded-3xl dark:border-[#1a232a] dark:bg-[#10161b] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:295] [--lightness:63%] [--opacity:1] [--radius:24] [--saturation:100%] [--speed:2]"
                  >
                    <div>
                      <svg
                        class="h-12 w-fit mx-auto text-black dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        ><path
                          fill="currentColor"
                          d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m-2.68 4.39h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91c-.2.26-.31.68-.31 1.18h2c0-.31.04-.56.13-.74c.09-.19.26-.36.51-.52c.45-.24.82-.53 1.11-.93c.29-.4.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82c-.53-.45-1.26-.68-2.19-.68c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77zM12 14h2v-2h-2zm1-13C8.41 1 4.61 4.42 4.06 8.9L2.5 11h-.03l-.02.03c-.55.76-.62 1.76-.19 2.59c.36.69 1 1.17 1.74 1.32V16c0 1.85 1.28 3.42 3 3.87V23h11v-5.5c2.5-1.67 4-4.44 4-7.5c0-4.97-4.04-9-9-9"
                        />
                      </svg>

                      <p
                        class="mt-6 text-lg text-gray-950 dark:text-white text-center"
                      >
                        Hazle cualquier pregunta
                      </p>
                    </div>
                    <span
                      class="glow absolute inset-[calc(var(--border-width)*-1)] rounded-3xl border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
                    >
                      <span
                        class="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"
                      ></span>
                    </span>
                  </div>
                </div>
                <div class="px-6 pt-2 pb-12 swiper-slide">
                  <div
                    class="bg-white shadow-xl shadow-accent-950/5 p-6 rounded-3xl dark:border-[#1a232a] dark:bg-[#10161b] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:240] [--lightness:67%] [--opacity:1] [--radius:24] [--saturation:84%] [--speed:2]"
                  >
                    <div>
                      <div class="h-12 w-fit mx-auto">
                        <svg
                          class="h-12 my-auto w-fit dark:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 14 14"
                          ><g
                            fill="none"
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                              d="M.576 6.733a6.538 6.538 0 0 1 1.164-.104c1.58 0 3.027.563 4.154 1.5"
                            /><path
                              d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5"
                            /><path
                              d="M6.326 5.629a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.014 4.934c-.351-.061-.351-.565 0-.626a3.176 3.176 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.193 3.193 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.192 3.192 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.176 3.176 0 0 0-2.558-2.45"
                            /></g
                          >
                        </svg>
                        <svg
                          class="h-12 my-auto w-fit"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 14 14"
                          ><g
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                              d="M.576 6.733a6.538 6.538 0 0 1 1.164-.104c1.58 0 3.027.563 4.154 1.5"
                            /><path
                              d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5"
                            /><path
                              d="M6.326 5.629a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.014 4.934c-.351-.061-.351-.565 0-.626a3.176 3.176 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.193 3.193 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.192 3.192 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.176 3.176 0 0 0-2.558-2.45"
                            /></g
                          >
                        </svg>
                      </div>
                      <p
                        class="mt-6 text-lg text-gray-950 dark:text-white text-center"
                      >
                        Genera cualquier imagen
                      </p>
                    </div>
                    <span
                      class="glow absolute inset-[calc(var(--border-width)*-1)] rounded-3xl border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
                    >
                      <span
                        class="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-pagination -mb-3 *:!rounded-lg *:!w-14 *:!h-0.5"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features">
      <div class="pt-36" id="conocer">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
          <div class="relative">
            <h1
              class="mt-8 text-center pb-20 text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]"
            >
              Características que destacan a <br class="hidden sm:block" /> LearnflowAI
            </h1>

            <div class="relative z-10 grid gap-3 grid-cols-6">
              <div
                class="col-span-full lg:col-span-2 overflow-hidden flex relative p-6 rounded-3xl bg-white shadow- shadow-green-600 dark:bg-[#10161b]"
              >
                <div
                  class="size-fit m-auto relative flex flex-col justify-center items-center"
                >
                  <div
                    class="relative h-24 w-56 flex justify-center items-center"
                  >
                    <svg
                      class="absolute inset-0 size-full text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 14 14"
                      ><path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.28 8.231H1.132a.488.488 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.488.488 0 0 0-.488-.488Zm7.589 0h-4.15a.488.488 0 0 0-.488.488v4.15c0 .27.218.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.488.488 0 0 0-.488-.488M5.28.643H1.132a.488.488 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488V1.13a.488.488 0 0 0-.488-.488Zm2.866 2.941c-.301-.052-.301-.483 0-.536A2.72 2.72 0 0 0 10.337.95l.018-.083c.065-.297.488-.3.556-.003l.022.097a2.735 2.735 0 0 0 2.197 2.086c.302.052.302.486 0 .539a2.735 2.735 0 0 0-2.197 2.086l-.022.096c-.068.297-.49.295-.556-.002l-.018-.083a2.72 2.72 0 0 0-2.191-2.099"
                      />
                    </svg>
                  </div>
                  <h2
                    class="mt-6 text-center font-semibold text-gray-950 dark:text-white text-lg"
                  >
                    Generación Instantánea
                  </h2>
                  <p class="text-center pt-2">
                    Obtén flashcards personalizadas al instante para cualquier
                    tema que ingreses.
                  </p>
                </div>
              </div>
              <div
                class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-6 rounded-3xl bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[#10161b]"
              >
                <div>
                  <div
                    class="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full"
                  >
                    <svg
                      class="w-24 m-auto h-fit"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      ><path
                        fill="currentColor"
                        d="M18.425 22.3q-.425 0-.712-.288t-.288-.712q0-.2.075-.4t.2-.325q1.075-1.075 1.688-2.475T20 15.05q0-1.625-.612-3.037T17.7 9.525q-.125-.125-.2-.325t-.075-.4q0-.425.288-.712t.712-.288q.2 0 .388.088t.312.212q1.35 1.35 2.113 3.138T22 15.05q0 2.05-.763 3.825T19.126 22q-.125.125-.312.213t-.388.087m-2.85-2.85q-.425 0-.712-.287t-.288-.713q0-.2.088-.387t.212-.313q.525-.525.825-1.213t.3-1.487q0-.8-.312-1.487t-.813-1.213q-.15-.125-.225-.312t-.075-.388q0-.425.288-.712t.712-.288q.2 0 .4.075t.325.225q.8.8 1.25 1.85t.45 2.25q0 1.2-.45 2.25t-1.25 1.85q-.125.15-.325.225t-.4.075M2 22v-2q1.15 0 2.275-.15t2.2-.55q-1.15-.575-1.812-1.662T4 15.275V13h4v-3h3.375L8.55 4.35q-.2-.375-.062-.762T9 3q.375-.2.763-.062t.587.512l2.825 5.65q.5 1-.075 1.95t-1.7.95H10v1q0 .825-.587 1.413T8 15H6v.275q0 .875.538 1.538T7.9 17.7l.3.075q1 .25 1.125 1.25t-.775 1.5q-1.5.825-3.162 1.15T2 22"
                      />
                    </svg>
                  </div>
                  <div class="mt-6 text-center relative z-10 space-y-2">
                    <h2
                      class="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white"
                    >
                      Interacción por voz
                    </h2>
                    <p class="">
                      Responde a las preguntas utilizando tu voz y recibe
                      retroalimentación inmediata.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-6 rounded-3xl bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[#10161b]"
              >
                <div>
                  <div class="pt-6 lg:px-6">
                    <svg
                      class="w-24 m-auto h-fit"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                      ><path
                        fill="currentColor"
                        d="m309.9 23.04l-35.2 38.05l34.5 72.21l1.4 3.2l-.9 3.3c-4.7 16-6.6 34.9-4.6 51.9c1.6 13 5.4 24.7 11.5 33.3l160-173.15c-9.1-5.45-21-8.3-34.1-8.84c-17.1-.68-35.8 2.75-51.4 8.67l-3.2 1.19zM265.7 84.1L76.36 179.5c6.18 2.8 11.68 6.9 16.17 11.9l180.87-91.1zM441.8 116l-63.9 69.3c19.1 12 44.7 9 60.6-8.2c15.9-17.1 16.8-42.9 3.3-61.1m-160.6.6l-179.3 90.3c2 5.3 3.1 11.1 3.1 17.1v1.5l183.9-92.7zM56 193c-17.23 0-31 13.8-31 31s13.77 31 31 31s31-13.8 31-31s-13.77-31-31-31m45.5 49.1c-2.41 6-6 11.5-10.49 16.1L198.2 407h22.1zm-25.24 26.5c-5.82 2.6-12.25 4.2-19 4.4l96.54 134H176zM313 389v18h18v-18zm-180.7 36l-49.57 62H429.3l-49.6-62z"
                      />
                    </svg>
                  </div>
                  <div class="mt-14 text-center relative z-10 space-y-2">
                    <h2
                      class="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white"
                    >
                      Adaptabilidad Total
                    </h2>
                    <p class="">
                      Aprende de manera interactiva y eficiente, con la
                      capacidad de personalizar tu experiencia de aprendizaje
                      según tus necesidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="pt-36">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
          <div class="text-center">
            <h1
              class="mt-8 text-center pb-20 text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]"
            >
              El desarrollo de LearnflowAI lo <br class="hidden sm:block" />
              llevan a cabo desarrolladores <br /> apasionados
            </h1>
            <p class="mt-6 text-gray-700 dark:text-gray-300">
              Descubre cómo nuestra aplicación innovadora transforma la
              experiencia educativa, proporcionando herramientas intuitivas y
              adaptativas para impulsar tu conocimiento hacia nuevos horizonte
            </p>
          </div>
          <div class="mt-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
            <div
              class="relative group overflow-hidden p-6 rounded-3xl bg-white border border-[#1f2930] dark:border-[#1f2930] dark:bg-[#10161b]"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              ></div>
              <div class="relative">
                <div
                  class="border border-warning-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-full dark:bg-gray-900 dark:border-white/15 before:rounded-full before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                >
                  <svg
                    class="text-[#000014] dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                    ><path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M6.987 1.5A3.18 3.18 0 0 0 3.75 4.628V9a1 1 0 0 1-1 1H1.5A1.5 1.5 0 0 1 0 8.5v-2A1.5 1.5 0 0 1 1.5 5h.75v-.39A4.68 4.68 0 0 1 7 0a4.68 4.68 0 0 1 4.75 4.61V5h.75A1.5 1.5 0 0 1 14 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-.75v.5a2.75 2.75 0 0 1-2.44 2.733A1.5 1.5 0 0 1 8 14H6.5a1.5 1.5 0 0 1 0-3H8c.542 0 1.017.287 1.28.718a1.25 1.25 0 0 0 .97-1.218V4.627A3.18 3.18 0 0 0 6.987 1.5"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span class="flex">Soporte</span>

                <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">
                    Damos soporte a tus dudas o posibles problemas sobre la
                    aplicación en el menor tiempo posible
                  </p>
                </div>
              </div>
            </div>

            <div
              class="relative group overflow-hidden p-6 rounded-3xl bg-white border border-[--ui-light-border-color] dark:border-[#1f2930] dark:bg-[#10161b]"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              ></div>
              <div class="relative">
                <div
                  class="border border-warning-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-full dark:bg-gray-900 dark:border-white/15 before:rounded-full before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                >
                  <svg
                    class="text-[#000014] dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 100 100"
                    ><path
                      fill="currentColor"
                      d="m70.387 70l-3.854 7.247l18.87-3.085c-3.808-1.91-8.963-3.275-15.016-4.162m-48.61 1.58C13.037 73.885 7.5 77.662 7.5 83.272a8.4 8.4 0 0 0 .774 3.497l30.285-4.95zM91.79 80l-42.15 6.87l11.116 12.646C79.01 97.881 92.5 92.05 92.5 83.272c0-1.17-.252-2.257-.71-3.271m-49.272 8.055l-28.48 4.655C21.566 97.374 34.853 100 50 100c.918 0 1.815-.026 2.719-.045z"
                    /><path
                      fill="currentColor"
                      d="M50.002 0c-16.3 0-29.674 13.333-29.674 29.596c0 6.252 1.987 12.076 5.342 16.865l19.234 33.25l.082.107c.759.991 1.5 1.773 2.37 2.348c.87.576 1.95.92 3.01.814c2.118-.212 3.415-1.708 4.646-3.376l.066-.086l21.234-36.141l.012-.023c.498-.9.866-1.816 1.178-2.708a29.246 29.246 0 0 0 2.17-11.05C79.672 13.333 66.302 0 50.002 0m0 17.045c7.071 0 12.59 5.509 12.59 12.55c0 7.043-5.519 12.55-12.59 12.55c-7.072 0-12.594-5.508-12.594-12.55c0-7.04 5.523-12.55 12.594-12.55"
                      color="currentColor"
                    />
                  </svg>
                </div>
                <span class="flex">No importa el lugar donde te encuentres</span
                >

                <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">
                    A pesar de que estés al otro lado del mundo, te damos
                    soporte para que disfrutes de la mejor manera a LearnflowAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="text-gray-600 dark:text-gray-300 mt-28" id="creadores">
      <div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h1
              class="mt-8 text-center pb-20 text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]"
            >
              Fundadores de <br class="hidden sm:block" /> LearnflowAI
            </h1>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src={ceoProfile}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3
                  class="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Hiram Gabriel
                </h3>
                <span>CEO Learnflow & Fullstack Developer</span>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  "El lanzamiento de LearnflowAI marca un hito importante en mi
                  vida. Creo que será una herramienta invaluable tanto para
                  estudiantes como para cualquier persona en busca de
                  conocimiento. Como alguien que ha enfrentado sus propios
                  desafíos de aprendizaje, sé que una plataforma como esta
                  habría hecho una gran diferencia en mi camino educativo. Estoy
                  emocionado de compartir esta oportunidad con todos aquellos
                  que buscan aprender y crecer."
                </p>
                <!-- ! NO BORRAR
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a> -->
              </div>
            </div>

            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src={memberJaf}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3
                  class="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Jafett Bergas
                </h3>
                <span>Frontend Developer</span>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  "En todo el tiempo de mi vida, he pensado que alcanzar
                  nuestras metas era algo imposible, pero ahora, sé que todo es
                  posible. Desde que comenzamos con el desarrollo de Learnflow,
                  he amado con cada parte de mi alma saber que podremos ayudar a
                  miles de estudiantes y personas a cumplir sus sueños, sus
                  sueños de progresar, de ser mejores, de vivir de una mejor
                  manera. La vida está llena de desafíos, conflictos y
                  problemas, pero con Learnflow deseamos que puedan prepararse
                  de una mejor manera, a soñar en grande, pero sobre todo, a
                  nunca rendirse."
                </p>
                <!-- <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a> -->
              </div>
            </div>

            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src={memberCrisFront}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3
                  class="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Cristhian Bautista
                </h3>
                <span>Frontend Developer</span>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  "En el transcurso de nuestro aprendizaje como desarrolladores,
                  siempre hay altibajos. Sin embargo, en esas situaciones, es
                  crucial saber cómo levantarnos y seguir adelante. Internet es
                  uno de los recursos más valiosos para el aprendizaje
                  constante; sin embargo, el mal uso de este también puede
                  alejarnos de nuestra humanidad. Estoy orgulloso de formar
                  parte de LearnFlow para contribuir al esfuerzo constante de
                  aprendizaje."
                </p>
                <!-- ! NO BORRAR
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a> -->
              </div>
            </div>

            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src={memberEcuDaniFront}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3
                  class="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Luis Cantillo
                </h3>
                <span>Frontend Developer</span>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  "Con el lanzamiento de LearnflowAI, encontramos en una sola
                  plataforma la llave que transforma desafíos en oportunidades,
                  inspirando a todos a alcanzar sus metas, aprender
                  constantemente y construir una comunidad de conocimiento
                  compartido. Me llena de gratitud formar parte de LearnflowAI,
                  una plataforma que no solo me ha brindado la oportunidad de
                  contribuir al aprendizaje constante, sino que también me llena
                  de alegría saber que estamos allanando el camino para que
                  innumerables personas alcancen sus metas educativas y sueños
                  de superación."
                </p>
                <!-- ! NO BORRAR
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a> -->
              </div>
            </div>
            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src={memberLohanaFront}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3
                  class="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Lohana Orellano
                </h3>
                <span>Frontend Developer</span>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  "El desarrollo y lanzamiento de LearnFlow ha sido un hito
                  trascendental en mi vida. Creo firmemente en su potencial para
                  transformar la manera en que las personas acceden al
                  conocimiento. Como alguien que ha enfrentado obstáculos en su
                  propio camino de aprendizaje, reconozco el valor que una
                  plataforma como esta habría tenido para mí. Estoy emocionada
                  de compartir esta innovación con todos aquellos que buscan
                  ampliar sus horizontes y alcanzar sus metas educativas."
                </p>
                <!-- ! NO BORRAR
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a> -->
              </div>
            </div>
            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src={memberCecilFront}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3
                  class="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Cecilia Prado
                </h3>
                <span>Frontend Developer</span>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  "A lo largo de mi vida, he experimentado la sensación de que
                  algunas metas eran inalcanzables, pero ahora entiendo que todo
                  es posible. Desde que comenzamos a trabajar en LearnFlow, he
                  sentido una profunda satisfacción al saber que estamos
                  contribuyendo al crecimiento y desarrollo de miles de
                  personas. Nuestro objetivo es ayudar a los estudiantes y
                  profesionales a materializar sus sueños, a superarse y a vivir
                  una vida plena. Aunque la vida está llena de desafíos, estamos
                  comprometidos a preparar a nuestros usuarios para enfrentarlos
                  con determinación y nunca perder de vista sus aspiraciones."
                </p>
                <!-- ! NO BORRAR
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-10 md:py-16" id="blog">
      <h1
        class="mt-20 mb-20 text-wrap text-center text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]"
      >
        Descubre nuestras <br class="hidden sm:block" /> novedades.
      </h1>

      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="dark:bg-[#10161b] border dark:border-none px-8 py-10 rounded-md">
            <div
              class="w-20 py-6 flex justify-center bg-[#222c35]  rounded-md mb-4"
            >
              <svg
                class="h-12 w-fit mx-auto dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                ><path
                  fill="#fff"
                  d="M.034 16.668C.388 25.179 7.403 32 16 32s15.612-6.821 15.966-15.332A.493.493 0 0 0 32 16.5c0-.036-.013-.067-.02-.1c.003-.134.02-.265.02-.4c0-8.822-7.178-16-16-16S0 7.178 0 16c0 .135.017.266.02.4c-.007.033-.02.064-.02.1c0 .06.015.115.034.168m24.887 6.074a21.921 21.921 0 0 0-4.215-1.271c.158-1.453.251-2.962.28-4.47h4.98c-.091 2.054-.456 3.993-1.045 5.741M26.965 17h3.984a14.885 14.885 0 0 1-2.663 7.579a17.158 17.158 0 0 0-2.457-1.44c.645-1.869 1.042-3.943 1.136-6.139m-14.576 5.286A23.416 23.416 0 0 1 16 22c1.224 0 2.433.102 3.61.286C18.916 27.621 17.4 31 16 31s-2.916-3.379-3.611-8.714m1.519 8.378c-2.751-.882-5.078-3.471-6.482-6.984a20.873 20.873 0 0 1 3.99-1.217c.459 3.496 1.298 6.542 2.492 8.201m-1.634-19.955A24.43 24.43 0 0 0 16 11a24.43 24.43 0 0 0 3.726-.291c.172 1.62.274 3.388.274 5.291h-8c0-1.903.102-3.671.274-5.291M19.985 17a49.022 49.022 0 0 1-.26 4.291A24.397 24.397 0 0 0 16 21a24.42 24.42 0 0 0-3.726.291a48.668 48.668 0 0 1-.26-4.291zm.6 5.463c1.404.282 2.743.692 3.99 1.217c-1.404 3.513-3.731 6.102-6.482 6.984c1.193-1.659 2.032-4.705 2.492-8.201M21 16c0-1.836-.102-3.696-.294-5.47c1.48-.292 2.896-.72 4.215-1.271C25.605 11.288 26 13.574 26 16zm-.415-6.463c-.46-3.496-1.298-6.543-2.493-8.201c2.751.882 5.078 3.471 6.482 6.984a20.792 20.792 0 0 1-3.989 1.217m-.974.177C18.433 9.898 17.224 10 16 10s-2.433-.102-3.611-.286C13.084 4.379 14.6 1 16 1c1.4 0 2.916 3.379 3.611 8.714m-8.196-.177a20.895 20.895 0 0 1-3.99-1.217c1.404-3.513 3.731-6.102 6.482-6.984c-1.193 1.659-2.032 4.705-2.492 8.201m-.121.993A51.315 51.315 0 0 0 11 16H6c0-2.426.395-4.712 1.079-6.742c1.319.552 2.735.979 4.215 1.272m-.28 6.47c.029 1.508.122 3.017.28 4.471c-1.48.292-2.896.72-4.215 1.271c-.589-1.748-.954-3.687-1.045-5.742zM6.17 23.139a17.24 17.24 0 0 0-2.456 1.44A14.882 14.882 0 0 1 1.051 17h3.984c.094 2.196.491 4.27 1.135 6.139M4.313 25.38a16.126 16.126 0 0 1 2.207-1.305c1.004 2.485 2.449 4.548 4.186 5.943a15.05 15.05 0 0 1-6.393-4.638m16.981 4.637c1.738-1.394 3.182-3.458 4.186-5.943c.79.384 1.522.826 2.207 1.305a15.033 15.033 0 0 1-6.393 4.638M27 16c0-2.567-.428-4.987-1.17-7.139c.88-.422 1.698-.907 2.457-1.44A14.91 14.91 0 0 1 31 16zm.688-9.38c-.685.479-1.417.921-2.207 1.305c-1.004-2.485-2.449-4.549-4.186-5.943a15.062 15.062 0 0 1 6.393 4.638M10.706 1.983C8.968 3.377 7.524 5.441 6.52 7.926A16.173 16.173 0 0 1 4.313 6.62a15.04 15.04 0 0 1 6.393-4.637M3.714 7.421a17.185 17.185 0 0 0 2.456 1.44A21.954 21.954 0 0 0 5 16H1c0-3.19 1.009-6.145 2.714-8.579"
                />
              </svg>
              <svg
                class="h-12 w-fit mx-auto hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                ><path
                  fill="#fff"
                  d="M.034 16.668C.388 25.179 7.403 32 16 32s15.612-6.821 15.966-15.332A.493.493 0 0 0 32 16.5c0-.036-.013-.067-.02-.1c.003-.134.02-.265.02-.4c0-8.822-7.178-16-16-16S0 7.178 0 16c0 .135.017.266.02.4c-.007.033-.02.064-.02.1c0 .06.015.115.034.168m24.887 6.074a21.921 21.921 0 0 0-4.215-1.271c.158-1.453.251-2.962.28-4.47h4.98c-.091 2.054-.456 3.993-1.045 5.741M26.965 17h3.984a14.885 14.885 0 0 1-2.663 7.579a17.158 17.158 0 0 0-2.457-1.44c.645-1.869 1.042-3.943 1.136-6.139m-14.576 5.286A23.416 23.416 0 0 1 16 22c1.224 0 2.433.102 3.61.286C18.916 27.621 17.4 31 16 31s-2.916-3.379-3.611-8.714m1.519 8.378c-2.751-.882-5.078-3.471-6.482-6.984a20.873 20.873 0 0 1 3.99-1.217c.459 3.496 1.298 6.542 2.492 8.201m-1.634-19.955A24.43 24.43 0 0 0 16 11a24.43 24.43 0 0 0 3.726-.291c.172 1.62.274 3.388.274 5.291h-8c0-1.903.102-3.671.274-5.291M19.985 17a49.022 49.022 0 0 1-.26 4.291A24.397 24.397 0 0 0 16 21a24.42 24.42 0 0 0-3.726.291a48.668 48.668 0 0 1-.26-4.291zm.6 5.463c1.404.282 2.743.692 3.99 1.217c-1.404 3.513-3.731 6.102-6.482 6.984c1.193-1.659 2.032-4.705 2.492-8.201M21 16c0-1.836-.102-3.696-.294-5.47c1.48-.292 2.896-.72 4.215-1.271C25.605 11.288 26 13.574 26 16zm-.415-6.463c-.46-3.496-1.298-6.543-2.493-8.201c2.751.882 5.078 3.471 6.482 6.984a20.792 20.792 0 0 1-3.989 1.217m-.974.177C18.433 9.898 17.224 10 16 10s-2.433-.102-3.611-.286C13.084 4.379 14.6 1 16 1c1.4 0 2.916 3.379 3.611 8.714m-8.196-.177a20.895 20.895 0 0 1-3.99-1.217c1.404-3.513 3.731-6.102 6.482-6.984c-1.193 1.659-2.032 4.705-2.492 8.201m-.121.993A51.315 51.315 0 0 0 11 16H6c0-2.426.395-4.712 1.079-6.742c1.319.552 2.735.979 4.215 1.272m-.28 6.47c.029 1.508.122 3.017.28 4.471c-1.48.292-2.896.72-4.215 1.271c-.589-1.748-.954-3.687-1.045-5.742zM6.17 23.139a17.24 17.24 0 0 0-2.456 1.44A14.882 14.882 0 0 1 1.051 17h3.984c.094 2.196.491 4.27 1.135 6.139M4.313 25.38a16.126 16.126 0 0 1 2.207-1.305c1.004 2.485 2.449 4.548 4.186 5.943a15.05 15.05 0 0 1-6.393-4.638m16.981 4.637c1.738-1.394 3.182-3.458 4.186-5.943c.79.384 1.522.826 2.207 1.305a15.033 15.033 0 0 1-6.393 4.638M27 16c0-2.567-.428-4.987-1.17-7.139c.88-.422 1.698-.907 2.457-1.44A14.91 14.91 0 0 1 31 16zm.688-9.38c-.685.479-1.417.921-2.207 1.305c-1.004-2.485-2.449-4.549-4.186-5.943a15.062 15.062 0 0 1 6.393 4.638M10.706 1.983C8.968 3.377 7.524 5.441 6.52 7.926A16.173 16.173 0 0 1 4.313 6.62a15.04 15.04 0 0 1 6.393-4.637M3.714 7.421a17.185 17.185 0 0 0 2.456 1.44A21.954 21.954 0 0 0 5 16H1c0-3.19 1.009-6.145 2.714-8.579"
                />
              </svg>
            </div>

            <h4 class="font-medium dark:text-white text-lg mb-4">Chat global</h4>

            <p class="font-normal text-gray-500 text-md">
              Podras comunicarte con personas que<br /> se encuentren
              en <b>Línea</b> en ese momento, <br /> para compartir cualquier peticion.
            </p>
          </div>

       

          <div class="dark:bg-[#10161b] border dark:border-none px-8 py-10 rounded-md">
            <div
              class="w-20 py-6 flex justify-center bg-[#222c35] rounded-md mb-4"
            >
              <svg
                class="h-12 w-fit mx-auto dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                ><g fill="#fff" fill-rule="evenodd" clip-rule="evenodd"
                  ><path
                    d="M5.604 5.45a6.44 6.44 0 0 0-1.883 5.278a.5.5 0 0 1-.994.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098c2.907 2.947 2.888 7.685-.05 10.582a7.425 7.425 0 0 1-5.097 2.142a7.527 7.527 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.524 6.524 0 0 0 1.856.235a6.424 6.424 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168c-2.522-2.558-6.627-2.594-9.168-.088"
                  /><path
                    d="M3.594 11.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"
                  /><path
                    d="M2.82 11.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M10 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"
                  /><path
                    d="M13.5 10.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"
                  />
                </g>
              </svg>

              <svg
                class="h-12 w-fit mx-auto hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                ><g fill="#fff" fill-rule="evenodd" clip-rule="evenodd"
                  ><path
                    d="M5.604 5.45a6.44 6.44 0 0 0-1.883 5.278a.5.5 0 0 1-.994.105a7.44 7.44 0 0 1 2.175-6.096c2.937-2.897 7.675-2.85 10.582.098c2.907 2.947 2.888 7.685-.05 10.582a7.425 7.425 0 0 1-5.097 2.142a7.527 7.527 0 0 1-2.14-.271a.5.5 0 0 1 .266-.964a6.524 6.524 0 0 0 1.856.235a6.424 6.424 0 0 0 4.413-1.854c2.541-2.506 2.562-6.61.04-9.168c-2.522-2.558-6.627-2.594-9.168-.088"
                  /><path
                    d="M3.594 11.363a.5.5 0 0 1-.706.04l-1.72-1.53a.5.5 0 1 1 .664-.746l1.72 1.53a.5.5 0 0 1 .042.706"
                  /><path
                    d="M2.82 11.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 1 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7M10 6.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"
                  /><path
                    d="M13.5 10.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5"
                  />
                </g>
              </svg>
            </div>

            <h4 class="font-medium dark:text-white text-lg mb-4">Genera flashcards con inteligencia artificial </h4>

            <p class="font-normal text-gray-500 text-md">
              Puedes generar ahora  <b>FlashCards</b> para <br /> llevar el progreso 
              de tu apredizaje.
            </p>
          </div>

          <div class="dark:bg-[#10161b] border dark:border-none px-8 py-10 rounded-md">
            <div
              class="w-20 py-6 flex justify-center bg-[#222c35] rounded-md mb-4"
            >

            <svg
            class="h-12 w-fit mx-auto dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
                ><path
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M23.82 3.5v41m-7.23-32.517v24.034M9.374 19.759v8.482m21.725-16.258v24.034m7.527-16.258v8.482"
                />
              </svg>


              <svg
              class="h-12 w-fit mx-auto hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
                ><path
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M23.82 3.5v41m-7.23-32.517v24.034M9.374 19.759v8.482m21.725-16.258v24.034m7.527-16.258v8.482"
                />
              </svg>
            </div>

            <h4 class="font-medium dark:text-white text-lg mb-4">
              Asistente con inteligencia artificial 
            </h4>

            <p class="font-normal text-gray-500 text-md">
              Ahora todo el tiempo llevaras una <b>IA</b> <br /> para que 
              le hagas cualquier pregunta.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="dark:bg-[#090d0f]">
    <div class="mx-auto">
      <div
        class="mt-16 border-t border-gray-100 pb-5 dark:border-gray-800 flex justify-center flex-col"
      >
        <p
          class="text-center text-sm/relaxed text-gray-500 dark:text-gray-400 mt-5"
        >
          © LearnflowAI 2024. All rights reserved.
          <br />
        </p>
        <div class="mt-6 flex justify-center gap-4">
          <a
            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://instagram.com/hiram.dev"
            target="_blank"
            rel="noreferrer"
          >
            <span class="sr-only"> Instagram </span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="https://github.com/itsrusty"
            target="_blank"
            rel="noreferrer"
          >
            <span class="sr-only"> GitHub </span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <style>
    /* track del scrollbar */
    ::-webkit-scrollbar {
      width: 10px; /* Ancho del scrollbar */
    }

    /* thumb del scrollbar */
    ::-webkit-scrollbar-thumb {
      background-color: #888; /* Color del thumb */
      border-radius: 5px; /* Radio de borde del thumb */
    }

    /*  track del scrollbar en hover */
    ::-webkit-scrollbar-track:hover {
      background-color: #090d0f; /* Color del track en hover */
    }

    /* thumb del scrollbar en hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Color del thumb en hover */
    }
  </style>
</body>
