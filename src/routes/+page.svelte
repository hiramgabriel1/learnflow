<script>
  import "../app.css";
  import ceoProfile from "$lib/public/images/profile.jpg";
  import member from "$lib/public/images/alexander.webp";
  import memberJaf from "$lib/public/images/jafet.webp";
  import memberCrisFront from "$lib/public/images/crisfront.webp";
  import memberEcuDaniFront from "$lib/public/images/ecuadaniflow.webp";
  // import memberEcu from "$lib/public/images/"

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
</script>

<body
  class="bg-white dark:bg-[#090d0f] dark:before:fixed dark:before:-z-50 dark:before:inset-0 dark:before:bg-gray-950/50"
>
  <header>
    <nav
      class="fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-b border-[#1a232a] border-x dark:border-[#1a232a] backdrop-blur-2xl"
    >
      <div class="px-6 m-auto max-w-6xl 2xl:px-0">
        <div class="flex flex-wrap items-center justify-between py-2 sm:py-4">
          <div class="w-full items-center flex justify-between lg:w-auto">
            <a href="/" aria-label="tailus logo">
              <span class="text-white text-3xl">LearnFlowAI</span>
            </a>
            <div class="flex lg:hidden">
              <button>
                <div
                  aria-hidden="true"
                  id="line1"
                  class="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
                ></div>
              </button>
            </div>
          </div>

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
                    href="/"
                    class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                  >
                    <span>Conocer mas</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                  >
                    <span>Creadores</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="block md:px-4 transition hover:text-green-600 dark:hover:text-green-400"
                  >
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[#1a232a] dark:border-[#1a232a] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2"
            >
              <button
                class="w-full h-9 lg:w-fit group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center"
              >
                <span>Login</span>
              </button>
              <button
                class="w-full h-9 lg:w-fit group flex items-center relative border rounded-full *:select-none [&>*:not(.sr-only)]:relative before:rounded-full before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center"
              >
                <span>Sign Up</span>
              </button>
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
              href="https://beta.tailus.io/demo"
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
                  href="/"
                  class="*:select-none dark:shadow-green-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-3xl border border-green-600 bg-green-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-green-600 active:bg-green-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative"
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
                  <span class="text-nowrap">Start Studying</span></a
                >
              </div>
            </div>
          </div>
          <div class="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
            <div
              class="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 bg-gradient-to-b  to-gray-200/25,bg-gradient-to-r from-transparent via-gray-200 to-transparent bg-no-repeat bg-16 bg-35 mask bg-opacity-95"
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
                        width="512"
                        height="209"
                        viewBox="0 0 512 209"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_235_8)">
                          <path
                            d="M117.436 207.036V154.604L118.529 153.51H129.452L130.545 154.604V207.036L129.452 208.13H118.529L117.436 207.036Z"
                            fill="#05BDBA"
                          />
                          <path
                            d="M117.436 53.5225V1.09339L118.529 0H129.452L130.545 1.09339V53.5225L129.452 54.6159H118.529L117.436 53.5225Z"
                            fill="#05BDBA"
                          />
                          <path
                            d="M69.9539 169.238H68.4094L60.6869 161.512V159.967L78.7201 141.938L86.8976 141.942L87.9948 143.031V151.209L69.9539 169.238Z"
                            fill="#05BDBA"
                          />
                          <path
                            d="M69.9462 38.8917H68.4017L60.6792 46.6181V48.1626L78.7124 66.192L86.8899 66.1882L87.9871 65.0986V56.9212L69.9462 38.8917Z"
                            fill="#05BDBA"
                          />
                          <path
                            d="M1.09339 97.5104H75.3711L76.4645 98.6038V109.526L75.3711 110.62H1.09339L0 109.526V98.6038L1.09339 97.5104Z"
                            fill="#05BDBA"
                          />
                          <path
                            d="M440.999 97.5104H510.91L512.004 98.6038V109.526L510.91 110.62H436.633L435.539 109.526L439.905 98.6038L440.999 97.5104Z"
                            fill="#05BDBA"
                          />
                          <path
                            d="M212.056 108.727L210.963 109.821H177.079L175.986 110.914C175.986 113.101 178.173 119.657 186.916 119.657C190.196 119.657 193.472 118.564 194.566 116.377L195.659 115.284H208.776L209.869 116.377C208.776 122.934 203.313 132.774 186.916 132.774C168.336 132.774 159.589 119.657 159.589 104.357C159.589 89.0576 168.332 75.9408 185.822 75.9408C203.313 75.9408 212.056 89.0576 212.056 104.357V108.731V108.727ZM195.659 97.7971C195.659 96.7037 194.566 89.0538 185.822 89.0538C177.079 89.0538 175.986 96.7037 175.986 97.7971L177.079 98.8905H194.566L195.659 97.7971Z"
                            fill="#014847"
                          />
                          <path
                            d="M242.66 115.284C242.66 117.47 243.753 118.564 245.94 118.564H255.776L256.87 119.657V130.587L255.776 131.681H245.94C236.103 131.681 227.36 127.307 227.36 115.284V91.2368L226.266 90.1434H218.617L217.523 89.05V78.1199L218.617 77.0265H226.266L227.36 75.9332V66.0965L228.453 65.0031H241.57L242.663 66.0965V75.9332L243.757 77.0265H255.78L256.874 78.1199V89.05L255.78 90.1434H243.757L242.663 91.2368V115.284H242.66Z"
                            fill="#014847"
                          />
                          <path
                            d="M283.1 131.681H269.983L268.889 130.587V56.2636L269.983 55.1702H283.1L284.193 56.2636V130.587L283.1 131.681Z"
                            fill="#014847"
                          />
                          <path
                            d="M312.61 68.2871H299.493L298.399 67.1937V56.2636L299.493 55.1702H312.61L313.703 56.2636V67.1937L312.61 68.2871ZM312.61 131.681H299.493L298.399 130.587V78.1237L299.493 77.0304H312.61L313.703 78.1237V130.587L312.61 131.681Z"
                            fill="#014847"
                          />
                          <path
                            d="M363.98 56.2636V67.1937L362.886 68.2871H353.05C350.863 68.2871 349.769 69.3805 349.769 71.5672V75.9408L350.863 77.0342H361.793L362.886 78.1276V89.0576L361.793 90.151H350.863L349.769 91.2444V130.591L348.676 131.684H335.559L334.466 130.591V91.2444L333.372 90.151H325.723L324.629 89.0576V78.1276L325.723 77.0342H333.372L334.466 75.9408V71.5672C334.466 59.5438 343.209 55.1702 353.046 55.1702H362.882L363.976 56.2636H363.98Z"
                            fill="#014847"
                          />
                          <path
                            d="M404.42 132.774C400.046 143.704 395.677 150.261 380.373 150.261H374.906L373.813 149.167V138.237L374.906 137.144H380.373C385.836 137.144 386.929 136.05 388.023 132.77V131.677L370.536 89.05V78.1199L371.63 77.0265H381.466L382.56 78.1199L395.677 115.284H396.77L409.887 78.1199L410.98 77.0265H420.817L421.91 78.1199V89.05L404.424 132.77L404.42 132.774Z"
                            fill="#014847"
                          />
                          <path
                            d="M135.454 131.681L134.361 130.587L134.368 98.9172C134.368 93.4541 132.22 89.2182 125.625 89.0806C122.234 88.9926 118.354 89.0729 114.209 89.2488L113.59 89.8834L113.598 130.587L112.504 131.681H99.3913L98.2979 130.587V77.5388L99.3913 76.4454L128.901 76.1778C143.685 76.1778 149.668 86.3356 149.668 97.8009V130.587L148.575 131.681H135.454Z"
                            fill="#014847"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_235_8">
                            <rect width="512" height="208.126" fill="white" />
                          </clipPath>
                        </defs>
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
      <div class="pt-36">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
          <div class="relative">
            <h1
              class="mt-8 text-center pb-20 text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]"
            >
              Características que destacan a <br class="hidden sm:block" /> LearnflowAI
            </h1>

            <div class="relative z-10 grid gap-3 grid-cols-6">
              <div
                class="col-span-full lg:col-span-2 overflow-hidden flex relative p-6 rounded-3xl bg-white shadow-  shadow-green-600  dark:bg-[#10161b]"
                
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
                <span class="flex ">Soporte</span>

                <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">
                    Damos soporte a tus dudas o posibles  problemas sobre la
                    aplicación en el  menor tiempo posible
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
              <svg  class="text-[#000014] dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100"><path fill="currentColor" d="m70.387 70l-3.854 7.247l18.87-3.085c-3.808-1.91-8.963-3.275-15.016-4.162m-48.61 1.58C13.037 73.885 7.5 77.662 7.5 83.272a8.4 8.4 0 0 0 .774 3.497l30.285-4.95zM91.79 80l-42.15 6.87l11.116 12.646C79.01 97.881 92.5 92.05 92.5 83.272c0-1.17-.252-2.257-.71-3.271m-49.272 8.055l-28.48 4.655C21.566 97.374 34.853 100 50 100c.918 0 1.815-.026 2.719-.045z"/><path fill="currentColor" d="M50.002 0c-16.3 0-29.674 13.333-29.674 29.596c0 6.252 1.987 12.076 5.342 16.865l19.234 33.25l.082.107c.759.991 1.5 1.773 2.37 2.348c.87.576 1.95.92 3.01.814c2.118-.212 3.415-1.708 4.646-3.376l.066-.086l21.234-36.141l.012-.023c.498-.9.866-1.816 1.178-2.708a29.246 29.246 0 0 0 2.17-11.05C79.672 13.333 66.302 0 50.002 0m0 17.045c7.071 0 12.59 5.509 12.59 12.55c0 7.043-5.519 12.55-12.59 12.55c-7.072 0-12.594-5.508-12.594-12.55c0-7.04 5.523-12.55 12.594-12.55" color="currentColor"/>
              </svg>
              </div>
              <span class="flex ">No importa el lugar donde te encuentres</span>

              <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                <p class="text-gray-700 dark:text-gray-300">
                  A pesar de que estés al otro lado del mundo, te damos soporte para que disfrutes de la mejor manera a LearnflowAI
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    
    <div class="text-gray-600 dark:text-gray-300 mt-28" id="creadores">
      <!-- <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="mb-20 space-y-4 px-6 md:px-0">
          <h2
            class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl"
          >
            Fundadores de LearnflowAI
          </h2>
        </div>
        <div class="">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              <div
                class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-5"
              >
                <div
                  class="h-full w-full flex flex-col justify-center space-y-4"
                >
                  <img
                    class="w-40 h-40 mx-auto rounded-xl"
                    src=""
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  />
                  <p class="text-gray-600 md:text-xl">
                    <br />
                    <span class="font-serif">"</span>El lanzamiento de
                    LearnflowAI marca un hito importante en mi vida. Creo que
                    será una herramienta invaluable tanto para estudiantes como
                    para cualquier persona en busca de conocimiento. Como
                    alguien que ha enfrentado sus propios desafíos de
                    aprendizaje, sé que una plataforma como esta habría hecho
                    una gran diferencia en mi camino educativo. Estoy emocionado
                    de compartir esta oportunidad con todos aquellos que buscan
                    aprender y crecer.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Hiram Gabriel
                    </h6>
                    <span class="text-sm text-gray-600"
                      >CEO Learnflow & Fullstack Developer</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="p-6 border border-gray-100 rounded-xl bg-gray-50 xs:flex sm:space-x-8 sm:p-8"
              >
                <img
                  class="w-40 h-40 mx-auto rounded-xl"
                  src=""
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p class="text-gray-600">
                    <br />
                    <span class="font-serif">"</span>Estoy ansioso por el
                    lanzamiento de LearnflowAI. Sé que esta maravillosa
                    herramienta no solo permitirá que las personas transformen
                    su curiosidad en conocimiento, sino que también las motivará
                    a seguir aprendiendo constantemente. Ya quiero ver la
                    comunidad que se formará alrededor de LearnflowAI, donde las
                    personas compartiran sus experiencias y conocimientos.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Alexander Bris
                    </h6>
                    <span class="text-sm text-gray-600"
                      >Co-Fundador & Frontend Developer & UX/UI</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="p-6 border border-gray-100 rounded-xl bg-gray-50 xs:flex sm:space-x-8 sm:p-8"
              >
                <img
                  class="w-40 h-40 mx-auto rounded-xl"
                  src=""
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p class="text-gray-600">
                    <br />
                    <span class="font-serif">"</span> En todo el tiempo de mi
                    vida, he pensado que alcanzar nuestras metas era algo
                    imposible, pero ahora, sé que todo es posible. Desde que
                    comenzamos con el desarrollo de Learnflow, he amado con cada
                    parte de mi alma saber que podremos ayudar a miles de
                    estudiantes y personas a cumplir sus sueños, sus sueños de
                    progresar, de ser mejores, de vivir de una mejor manera. La
                    vida está llena de desafíos, conflictos y problemas, pero
                    con Learnflow deseamos que puedan prepararse de una mejor
                    manera, a soñar en grande, pero sobre todo, a nunca
                    rendirse.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Jafett Baez
                    </h6>
                    <span class="text-xs text-gray-600">Frontend Developer</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="row-span-1 justify-center p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-5"
              >
                <div
                  class="h-full w-full flex flex-col justify-center space-y-4"
                >
                  <img
                    class="w-40 h-40 mx-auto rounded-xl"
                    src=""
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  />
                  <p class="text-gray-600 md:text-xl">
                    <br />
                    <span class="font-serif">"</span>
                    En el transcurso de nuestro aprendizaje como desarrolladores,
                    siempre hay altibajos. Sin embargo, en esas situaciones, es crucial
                    saber cómo levantarnos y seguir adelante. Internet es uno de
                    los recursos más valiosos para el aprendizaje constante; sin
                    embargo, el mal uso de este también puede alejarnos de nuestra
                    humanidad. Estoy orgulloso de formar parte de LearnFlow para
                    contribuir al esfuerzo constante de aprendizaje.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Cristhian Bautista
                    </h6>
                    <span class="text-sm text-gray-600"
                      >Frontend Developer
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="row-span-1 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-5"
              >
                <div
                  class="h-full w-full flex flex-col justify-center space-y-4"
                >
                  <img
                    class="w-40 h-40 mx-auto rounded-xl"
                    src=""
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  />
                  <p class="text-gray-600 md:text-xl">
                    <br />
                    <span class="font-serif">"</span>
                    Con el lanzamiento de LearnflowAI, encontramos en una sola plataforma
                    la llave que transforma desafíos en oportunidades, inspirando
                    a todos a alcanzar sus metas, aprender constantemente y construir
                    una comunidad de conocimiento compartido. Me llena de gratitud
                    formar parte de LearnflowAI, una plataforma que no solo me ha
                    brindado la oportunidad de contribuir al aprendizaje constante,
                    sino que también me llena de alegría saber que estamos allanando
                    el camino para que innumerables personas alcancen sus metas educativas
                    y sueños de superación.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Daniel Cantillo
                    </h6>
                    <span class="text-sm text-gray-600"
                      >Frontend Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative py-16">
        <div
          aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div
            class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
          ></div>
          <div
            class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
          ></div>
        </div>
      </div> -->
      
      
      
      <div id="blog">
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
                  "El lanzamiento de LearnflowAI marca un hito importante en mi vida. Creo que será una herramienta invaluable tanto para estudiantes como para cualquier persona en busca de conocimiento. Como alguien que ha enfrentado sus propios desafíos de aprendizaje, sé que una plataforma como esta habría hecho una gran diferencia en mi camino educativo. Estoy emocionado de compartir esta oportunidad con todos aquellos que buscan aprender y crecer."
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
                  "En todo el tiempo de mi vida, he pensado que alcanzar nuestras metas era algo imposible, pero ahora, sé que todo es posible. Desde que comenzamos con el desarrollo de Learnflow, he amado con cada parte de mi alma saber que podremos ayudar a miles de estudiantes y personas a cumplir sus sueños, sus sueños de progresar, de ser mejores, de vivir de una mejor manera. La vida está llena de desafíos, conflictos y problemas, pero con Learnflow deseamos que puedan prepararse de una mejor manera, a soñar en grande, pero sobre todo, a nunca rendirse."
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
                  "En el transcurso de nuestro aprendizaje como desarrolladores, siempre hay altibajos. Sin embargo, en esas situaciones, es crucial saber cómo levantarnos y seguir adelante. Internet es uno de los recursos más valiosos para el aprendizaje constante; sin embargo, el mal uso de este también puede alejarnos de nuestra humanidad. Estoy orgulloso de formar parte de LearnFlow para contribuir al esfuerzo constante de aprendizaje."
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
                  "Con el lanzamiento de LearnflowAI, encontramos en una sola plataforma la llave que transforma desafíos en oportunidades, inspirando a todos a alcanzar sus metas, aprender constantemente y construir una comunidad de conocimiento compartido. Me llena de gratitud formar parte de LearnflowAI, una plataforma que no solo me ha brindado la oportunidad de contribuir al aprendizaje constante, sino que también me llena de alegría saber que estamos allanando el camino para que innumerables personas alcancen sus metas educativas y sueños de superación."
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
  </main>

  <footer class="dark:bg-[#090d0f] ">
    <div class="mx-auto">
      <div class="mt-16 border-t border-gray-100 pb-5 dark:border-gray-800 flex justify-center  flex-col">
        <p class="text-center text-sm/relaxed text-gray-500 dark:text-gray-400 mt-5">
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
    /* Estilo para el track del scrollbar */
::-webkit-scrollbar {
  width: 10px; /* Ancho del scrollbar */
}

/* Estilo para el thumb del scrollbar */
::-webkit-scrollbar-thumb {
  background-color: #888; /* Color del thumb */
  border-radius: 5px; /* Radio de borde del thumb */
}

/* Estilo para el track del scrollbar en hover */
::-webkit-scrollbar-track:hover {
  background-color: #090d0f; /* Color del track en hover */
}

/* Estilo para el thumb del scrollbar en hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color del thumb en hover */
}

  </style>
</body>


<!-- <style>
  @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap");

  @media (min-width: 600px) {
    iframe {
      width: 400px;
    }
  }

  @media (min-width: 500px) {
    iframe {
      width: 400px;
    }
  }

  @media (min-width: 490px) {
    iframe {
      width: 400px;
    }
  }

  *,
  :before,
  :after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #c6c8cd;
  }

  :before,
  :after {
    --tw-content: "";
  }

  body {
    margin: 0;
    line-height: inherit;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family:
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      Liberation Mono,
      Courier New,
      monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /* search */
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    opacity: 1;
    color: #92959f;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #92959f;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }

  *,
  :before,
  :after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }

  ::-webkit-backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }

  ::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }

  .invisible {
    visibility: hidden;
  }

  .fixed {
    position: fixed;
  }

  .absolute {
    position: absolute;
  }

  .relative {
    position: relative;
  }

  .inset-0 {
    inset: 0;
  }

  .top-full {
    top: 100%;
  }

  .left-0 {
    left: 0;
  }

  .z-10 {
    z-index: 10;
  }

  .z-20 {
    z-index: 20;
  }

  .m-auto {
    margin: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .mt-16 {
    margin-top: 4rem;
  }

  .-mr-6 {
    margin-right: -1.5rem;
  }

  .mt-2 {
    margin-top: 0.5rem;
  }

  .mt-12 {
    margin-top: 3rem;
  }

  .mb-12 {
    margin-bottom: 3rem;
  }

  .mt-6 {
    margin-top: 1.5rem;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mt-8 {
    margin-top: 2rem;
  }

  .mb-20 {
    margin-bottom: 5rem;
  }

  .mb-40 {
    margin-bottom: 10rem;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .grid {
    display: grid;
  }

  .hidden {
    display: none;
  }

  .aspect-auto {
    aspect-ratio: auto;
  }

  .h-5 {
    height: 1.25rem;
  }

  .h-4 {
    height: 1rem;
  }

  .h-6 {
    height: 1.5rem;
  }

  .h-0\.5 {
    height: 0.125rem;
  }

  .h-0 {
    height: 0px;
  }

  .h-screen {
    height: 100vh;
  }

  .h-9 {
    height: 2.25rem;
  }

  .h-64 {
    height: 16rem;
  }

  .h-max {
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
  }

  .h-56 {
    height: 14rem;
  }

  .h-32 {
    height: 8rem;
  }

  .h-8 {
    height: 2rem;
  }

  .h-12 {
    height: 3rem;
  }

  .h-16 {
    height: 4rem;
  }

  .h-11 {
    height: 2.75rem;
  }

  .max-h-10 {
    max-height: 2.5rem;
  }

  .w-full {
    width: 100%;
  }

  .w-5 {
    width: 1.25rem;
  }

  .w-10\/12 {
    width: 83.333333%;
  }

  .w-4 {
    width: 1rem;
  }

  .w-2 {
    width: 0.5rem;
  }

  .w-screen {
    width: 100vw;
  }

  .w-8 {
    width: 2rem;
  }

  .w-12 {
    width: 3rem;
  }

  .w-16 {
    width: 4rem;
  }

  .w-6 {
    width: 1.5rem;
  }

  .w-auto {
    width: auto;
  }

  .w-5\/6 {
    width: 83.333333%;
  }

  .max-w-7xl {
    max-width: 80rem;
  }

  .origin-bottom {
    transform-origin: bottom;
  }

  .origin-top {
    transform-origin: top;
  }

  .translate-y-1 {
    --tw-translate-y: 0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .translate-y-1\.5 {
    --tw-translate-y: 0.375rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .-translate-y-1 {
    --tw-translate-y: -0.25rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .-translate-x-4 {
    --tw-translate-x: -1rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .rotate-45 {
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .-rotate-45 {
    --tw-rotate: -45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .scale-95 {
    --tw-scale-x: 0.95;
    --tw-scale-y: 0.95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .scale-y-0 {
    --tw-scale-y: 0;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .list-inside {
    list-style-position: inside;
  }

  .list-disc {
    list-style-type: disc;
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .items-center {
    align-items: center;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .gap-8 {
    gap: 2rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-y-4 {
    row-gap: 1rem;
  }

  .gap-x-6 {
    -moz-column-gap: 1.5rem;
    column-gap: 1.5rem;
  }

  .space-x-12 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(3rem * var(--tw-space-x-reverse));
    margin-left: calc(3rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .space-y-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2rem * var(--tw-space-y-reverse));
  }

  .space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .space-y-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
  }

  .space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .space-x-1 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.25rem * var(--tw-space-x-reverse));
    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .space-y-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  .-space-x-52 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(-13rem * var(--tw-space-x-reverse));
    margin-left: calc(-13rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .-space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(-0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }

  .space-y-40 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(10rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(10rem * var(--tw-space-y-reverse));
  }

  .divide-x > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px * var(--tw-divide-x-reverse));
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
  }

  .divide-y > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
  }

  .divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-opacity: 1;
    border-color: rgb(233 233 236 / var(--tw-divide-opacity));
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .rounded {
    border-radius: 0.25rem;
  }

  .rounded-3xl {
    border-radius: 1.5rem;
  }

  .rounded-xl {
    border-radius: 0.75rem;
  }

  .border {
    border-width: 1px;
  }

  .border-y {
    border-top-width: 1px;
    border-bottom-width: 1px;
  }

  .border-gray-100 {
    --tw-border-opacity: 1;
    border-color: rgb(233 233 236 / var(--tw-border-opacity));
  }

  .bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(15 23 42 / var(--tw-bg-opacity));
  }

  .bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(147 51 234 / var(--tw-bg-opacity));
  }

  .bg-sky-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(12 74 110 / var(--tw-bg-opacity));
  }

  .bg-white\/70 {
    background-color: #ffffffb3;
  }

  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }

  .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(250 250 252 / var(--tw-bg-opacity));
  }

  .bg-indigo-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(224 231 255 / var(--tw-bg-opacity));
  }

  .bg-teal-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(204 251 241 / var(--tw-bg-opacity));
  }

  .bg-opacity-50 {
    --tw-bg-opacity: 0.5;
  }

  .bg-gradient-to-br {
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
  }

  .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
  }

  .from-primary {
    --tw-gradient-from: #9333ea;
    --tw-gradient-to: rgb(147 51 234 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }

  .from-cyan-400 {
    --tw-gradient-from: #22d3ee;
    --tw-gradient-to: rgb(34 211 238 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }

  .to-purple-400 {
    --tw-gradient-to: #c084fc;
  }

  .to-sky-300 {
    --tw-gradient-to: #7dd3fc;
  }

  .object-cover {
    -o-object-fit: cover;
    object-fit: cover;
  }

  .object-top {
    -o-object-position: top;
    object-position: top;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .p-8 {
    padding: 2rem;
  }

  .p-4 {
    padding: 1rem;
  }

  .py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .pt-36 {
    padding-top: 9rem;
  }

  .pt-4 {
    padding-top: 1rem;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .font-semibold {
    font-weight: 600;
  }

  .font-bold {
    font-weight: 700;
  }

  .tracking-wide {
    letter-spacing: 0.025em;
  }

  .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(93 99 112 / var(--tw-text-opacity));
  }

  .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(119 124 135 / var(--tw-text-opacity));
  }

  .text-gray-900 {
    --tw-text-opacity: 1;
    color: rgb(15 23 42 / var(--tw-text-opacity));
  }

  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .text-gray-800 {
    --tw-text-opacity: 1;
    color: rgb(41 48 65 / var(--tw-text-opacity));
  }

  .text-info {
    --tw-text-opacity: 1;
    color: rgb(12 99 231 / var(--tw-text-opacity));
  }

  .text-primary {
    --tw-text-opacity: 1;
    color: rgb(147 51 234 / var(--tw-text-opacity));
  }

  .text-secondary {
    --tw-text-opacity: 1;
    color: rgb(255 126 51 / var(--tw-text-opacity));
  }

  .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(67 73 89 / var(--tw-text-opacity));
  }

  .text-sky-500 {
    --tw-text-opacity: 1;
    color: rgb(14 165 233 / var(--tw-text-opacity));
  }

  .text-indigo-500 {
    --tw-text-opacity: 1;
    color: rgb(99 102 241 / var(--tw-text-opacity));
  }

  .text-teal-600 {
    --tw-text-opacity: 1;
    color: rgb(13 148 136 / var(--tw-text-opacity));
  }

  .opacity-0 {
    opacity: 0;
  }

  .opacity-40 {
    opacity: 0.4;
  }

  .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .shadow-gray-600\/10 {
    --tw-shadow-color: rgb(93 99 112 / 0.1);
    --tw-shadow: var(--tw-shadow-colored);
  }

  .blur-\[106px\] {
    --tw-blur: blur(106px);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
      var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
      var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }

  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
      var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
      var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }

  .backdrop-blur-2xl {
    --tw-backdrop-blur: blur(40px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur)
      var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
      var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
      var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
      var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
      var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
      var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
      var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
      var(--tw-backdrop-sepia);
  }

  .transition {
    transition-property:
      color,
      background-color,
      border-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-property:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter,
      -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  .duration-300 {
    transition-duration: 0.3s;
  }

  .duration-500 {
    transition-duration: 0.5s;
  }

  .duration-200 {
    transition-duration: 0.2s;
  }

  .before\:absolute:before {
    content: var(--tw-content);
    position: absolute;
  }

  .before\:inset-0:before {
    content: var(--tw-content);
    inset: 0;
  }

  .before\:rounded-full:before {
    content: var(--tw-content);
    border-radius: 9999px;
  }

  .before\:border:before {
    content: var(--tw-content);
    border-width: 1px;
  }

  .before\:border-transparent:before {
    content: var(--tw-content);
    border-color: transparent;
  }

  .before\:bg-primary:before {
    content: var(--tw-content);
    --tw-bg-opacity: 1;
    background-color: rgb(147 51 234 / var(--tw-bg-opacity));
  }

  .before\:bg-primary\/10:before {
    content: var(--tw-content);
    background-color: #9333ea1a;
  }

  .before\:bg-gradient-to-b:before {
    content: var(--tw-content);
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  }

  .before\:transition:before {
    content: var(--tw-content);
    transition-property:
      color,
      background-color,
      border-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-property:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter,
      -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  .before\:duration-300:before {
    content: var(--tw-content);
    transition-duration: 0.3s;
  }

  .hover\:z-\[1\]:hover {
    z-index: 1;
  }

  .hover\:text-primary:hover {
    --tw-text-opacity: 1;
    color: rgb(147 51 234 / var(--tw-text-opacity));
  }

  .hover\:shadow-2xl:hover {
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .hover\:shadow-gray-600\/10:hover {
    --tw-shadow-color: rgb(93 99 112 / 0.1);
    --tw-shadow: var(--tw-shadow-colored);
  }

  .hover\:grayscale-0:hover {
    --tw-grayscale: grayscale(0);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
      var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
      var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  }

  .hover\:before\:scale-105:hover:before {
    content: var(--tw-content);
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .active\:duration-75:active {
    transition-duration: 75ms;
  }

  .active\:before\:scale-95:active:before {
    content: var(--tw-content);
    --tw-scale-x: 0.95;
    --tw-scale-y: 0.95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .group:hover .group-hover\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .group:hover .group-hover\:scale-105 {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .group:hover .group-hover\:bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }

  .group:hover .group-hover\:text-secondary {
    --tw-text-opacity: 1;
    color: rgb(255 126 51 / var(--tw-text-opacity));
  }

  .group:hover .group-hover\:opacity-100 {
    opacity: 1;
  }

  .peer:checked ~ .peer-checked\:visible {
    visibility: visible;
  }

  .peer:checked ~ .peer-checked\:origin-top {
    transform-origin: top;
  }

  .peer:checked ~ .peer-checked\:scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .peer:checked ~ .peer-checked\:scale-y-100 {
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .peer:checked ~ .peer-checked\:opacity-100 {
    opacity: 1;
  }

  @media (min-width: 640px) {
    .sm\:mt-auto {
      margin-top: auto;
    }

    .sm\:flex {
      display: flex;
    }

    .sm\:w-7\/12 {
      width: 58.333333%;
    }

    .sm\:w-5\/12 {
      width: 41.666667%;
    }

    .sm\:w-max {
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }

    .sm\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .sm\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .sm\:p-8 {
      padding: 2rem;
    }

    .sm\:text-left {
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    .md\:flex {
      display: flex;
    }

    .md\:w-10\/12 {
      width: 83.333333%;
    }

    .md\:w-8\/12,
    .md\:w-2\/3 {
      width: 66.666667%;
    }

    .md\:columns-2 {
      -moz-columns: 2;
      columns: 2;
    }

    .md\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .md\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    .md\:flex-nowrap {
      flex-wrap: nowrap;
    }

    .md\:items-center {
      align-items: center;
    }

    .md\:justify-start {
      justify-content: flex-start;
    }

    .md\:gap-0 {
      gap: 0px;
    }

    .md\:gap-6 {
      gap: 1.5rem;
    }

    .md\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0px * var(--tw-space-y-reverse));
    }

    .md\:py-40 {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    .md\:py-4 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .md\:px-0 {
      padding-left: 0;
      padding-right: 0;
    }

    .md\:px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .md\:px-12 {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .md\:text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    .md\:text-5xl {
      font-size: 3rem;
      line-height: 1;
    }

    .md\:text-6xl {
      font-size: 3.75rem;
      line-height: 1;
    }
  }

  @media (min-width: 1024px) {
    .lg\:visible {
      visibility: visible;
    }

    .lg\:relative {
      position: relative;
    }

    .lg\:mx-auto {
      margin-left: auto;
      margin-right: auto;
    }

    .lg\:mt-0 {
      margin-top: 0;
    }

    .lg\:flex {
      display: flex;
    }

    .lg\:hidden {
      display: none;
    }

    .lg\:w-8\/12 {
      width: 66.666667%;
    }

    .lg\:w-max {
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }

    .lg\:w-7\/12 {
      width: 58.333333%;
    }

    .lg\:w-auto {
      width: auto;
    }

    .lg\:w-6\/12,
    .lg\:w-1\/2 {
      width: 50%;
    }

    .lg\:w-2\/3 {
      width: 66.666667%;
    }

    .lg\:translate-y-0 {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    .lg\:scale-100 {
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    .lg\:columns-3 {
      -moz-columns: 3;
      columns: 3;
    }

    .lg\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .lg\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .lg\:flex-row {
      flex-direction: row;
    }

    .lg\:items-center {
      align-items: center;
    }

    .lg\:gap-0 {
      gap: 0px;
    }

    .lg\:gap-12 {
      gap: 3rem;
    }

    .lg\:divide-y-0 > :not([hidden]) ~ :not([hidden]) {
      --tw-divide-y-reverse: 0;
      border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
      border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
    }

    .lg\:border-none {
      border-style: none;
    }

    .lg\:bg-transparent {
      background-color: transparent;
    }

    .lg\:p-0 {
      padding: 0;
    }

    .lg\:pr-4 {
      padding-right: 1rem;
    }

    .lg\:pt-0 {
      padding-top: 0;
    }

    .lg\:text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .lg\:opacity-100 {
      opacity: 1;
    }

    .lg\:shadow-none {
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .peer:checked ~ .lg\:peer-checked\:translate-y-0 {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y))
        rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
        scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  @media (min-width: 1280px) {
    .xl\:w-6\/12 {
      width: 50%;
    }

    .xl\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .xl\:px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .xl\:text-7xl {
      font-size: 4.5rem;
      line-height: 1;
    }
  }

  #toggle_nav:where(.astro-LEPVKGVF):checked
    ~ div:where(.astro-LEPVKGVF)
    #hamburger:where(.astro-LEPVKGVF)
    #line:where(.astro-LEPVKGVF) {
    --tw-translate-y: 0.375rem;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  #toggle_nav:where(.astro-LEPVKGVF):checked
    ~ div:where(.astro-LEPVKGVF)
    #hamburger:where(.astro-LEPVKGVF)
    #line2:where(.astro-LEPVKGVF) {
    --tw-translate-y: -0.25rem;
    --tw-rotate: -45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  body {
    margin: 0;
  }
</style> -->

<style>
  /* Estilos Tailwind CSS */
  /* La clase bg-white ya está incluida en Tailwind CSS, por lo que no es necesario definirla nuevamente */
  .shadow-xl {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .p-card-padding {
    padding: var(--card-padding);
  }
  .rounded-card-border-radius {
    border-radius: var(--card-border-radius);
  }
  .border-ui-light-border-color {
    border-color: var(--ui-light-border-color);
  }
  .dark\:border-ui-dark-border-color {
    border-color: var(--ui-dark-border-color);
  }
  .dark\:bg-card-dark-bg {
    background-color: var(--card-dark-bg);
  }
  .border-length {
    border-width: var(--border-width);
  }
  .dark\:text-[--lightness-14-percent] {
    --tw-text-opacity: 1;
    color: hsla(var(--hue), var(--saturation), 14%, var(--tw-text-opacity));
  }
  .text-opacity-1 {
    --tw-text-opacity: 1;
    opacity: var(--tw-text-opacity);
  }
  .rounded-[--radius] {
    border-radius: var(--radius);
  }
  .dark\:text-[--saturation-97-percent] {
    --tw-text-opacity: 1;
    color: hsla(var(--hue), var(--saturation), 97%, var(--tw-text-opacity));
  }
</style>
