<script>
  import "../app.css";
  import "../style.main.css"
  import microsoft from "$lib/public/images/clients/microsoft.svg";
  import airbnb from "$lib/public/images/clients/airbnb.svg";
  import ge from "$lib/public/images/clients/ge.svg";
  import googleCloud from "$lib/public/images/clients/google-cloud.svg";
  import google from "$lib/public/images/clients/google.svg";
  import netflix from "$lib/public/images/clients/netflix.svg";
  import member from "$lib/public/images/profile.webp";

  // const listenEmailSender = async () => {

  // }
</script>
<body class="bg-white dark:bg-gray-900 astro-M5ZLDKQK">
  <header class="astro-LEPVKGVF">
    <nav class="z-10 w-full absolute astro-LEPVKGVF">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div
          class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative astro-LEPVKGVF"
        >
          <input
            aria-hidden="true"
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            class="hidden peer astro-LEPVKGVF"
          />
          <div
            class="relative z-20 w-full flex justify-between lg:w-max md:px-0 astro-LEPVKGVF"
          >
            <a
              href="#home"
              aria-label="logo"
              class="flex space-x-2 items-center astro-LEPVKGVF"
            >
              <div aria-hidden="true" class="flex space-x-1 astro-LEPVKGVF">
                <div
                  class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white astro-LEPVKGVF"
                ></div>
                <div class="h-6 w-2 bg-primary astro-LEPVKGVF"></div>
              </div>
              <span
                class="text-2xl font-bold text-gray-900 dark:text-white astro-LEPVKGVF"
                >LearnflowAI</span
              >
            </a>

            <div
              class="relative flex items-center lg:hidden max-h-10 astro-LEPVKGVF"
            >
              <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
              <label
                role="button"
                for="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                class="relative p-6 -mr-6 astro-LEPVKGVF"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 astro-LEPVKGVF"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 astro-LEPVKGVF"
                ></div>
              </label>
            </div>
          </div>
          <div
            aria-hidden="true"
            class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70 astro-LEPVKGVF"
          ></div>
          <div
            class="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700 astro-LEPVKGVF"
          >
            <div
              class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0 astro-LEPVKGVF"
            >
              <ul
                class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0 astro-LEPVKGVF"
              >
                <li class="astro-LEPVKGVF">
                  <a
                    href="#features"
                    class="block md:px-4 transition hover:text-primary astro-LEPVKGVF"
                  >
                    <span class="astro-LEPVKGVF">Features</span>
                  </a>
                </li>
                <li class="astro-LEPVKGVF">
                  <a
                    href="#solution"
                    class="block md:px-4 transition hover:text-primary astro-LEPVKGVF"
                  >
                    <span class="astro-LEPVKGVF">Solution</span>
                  </a>
                </li>
                <li class="astro-LEPVKGVF">
                  <a
                    href="#testimonials"
                    class="block md:px-4 transition hover:text-primary astro-LEPVKGVF"
                  >
                    <span class="astro-LEPVKGVF">Testimonials</span>
                  </a>
                </li>
                <li class="astro-LEPVKGVF">
                  <a
                    href="#blog"
                    class="block md:px-4 transition hover:text-primary astro-LEPVKGVF"
                  >
                    <span class="astro-LEPVKGVF">Blog</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-12 lg:mt-0 astro-LEPVKGVF">
              <a
                href="#"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max astro-LEPVKGVF"
              >
                <span
                  class="relative text-sm font-semibold text-white astro-LEPVKGVF"
                  >Empezar</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="space-y-40 mb-40">
    <div class="relative" id="home">
      <div
        aria-hidden="true"
        class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div
          class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
        ></div>
        <div
          class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
        ></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="relative pt-36 ml-auto">
          <div class="lg:w-2/3 text-center mx-auto">
            <h1
              class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl"
            >
              <span class="text-primary dark:text-white">
                Convierte tu curiosidad en conocimiento.</span
              >
            </h1>
            <p class="mt-8 text-gray-700 dark:text-gray-300">
              ¡Descubre nuestra plataforma de aprendizaje con Inteligencia
              Artificial! Ingresa cualquier tema y obtén flashcards
              personalizadas al instante. Utiliza tu voz para responder
              preguntas y recibe retroalimentación inmediata. ¡Aprende de manera
              interactiva y eficiente!
            </p>
            <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="/auth/register"
                class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-base font-semibold text-white"
                  >Vamos a comenzar</span
                >
              </a>
              <a
                href="#"
                class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span
                  class="relative text-base font-semibold text-primary dark:text-white"
                  >Saber más</span
                >
              </a>
            </div>
          </div>
          <div class="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div
              class="p-4 grayscale transition duration-200 hover:grayscale-0"
            >
              <img
                src={microsoft}
                class="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div
              class="p-4 grayscale transition duration-200 hover:grayscale-0"
            >
              <img
                src={airbnb}
                class="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div
              class="p-4 flex grayscale transition duration-200 hover:grayscale-0"
            >
              <img
                src={google}
                class="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div
              class="p-4 grayscale transition duration-200 hover:grayscale-0"
            >
              <img
                src={ge}
                class="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div
              class="p-4 flex grayscale transition duration-200 hover:grayscale-0"
            >
              <img
                src={netflix}
                class="h-8 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div
              class="p-4 grayscale transition duration-200 hover:grayscale-0"
            >
              <img
                src={googleCloud}
                class="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="features">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <h2
            class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl"
          >
            Características que destacan a LearnflowAI
          </h2>
        </div>
        <div
          class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
        >
          <div
            class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
          >
            <div class="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                class="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Generación Instantánea
                </h5>
                <p class="text-gray-600 dark:text-gray-300">
                  Obtén flashcards personalizadas al instante para cualquier
                  tema que ingreses.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
          >
            <div class="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                class="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Interacción por voz
                </h5>
                <p class="text-gray-600 dark:text-gray-300">
                  Responde a las preguntas utilizando tu voz y recibe
                  retroalimentación inmediata.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
          >
            <div class="relative space-y-8 py-12 p-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                class="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div class="space-y-2">
                <h5
                  class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                >
                  Adaptabilidad Total
                </h5>
                <p class="text-gray-600 dark:text-gray-300">
                  Aprende de manera interactiva y eficiente, con la capacidad de
                  personalizar tu experiencia de aprendizaje según tus
                  necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="solution">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-sky-500"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div
          class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center"
        >
          <div class="md:5/12 lg:w-1/2">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              src="../lib/public/images/pie.svg"
              loading="lazy"
              width=""
              height=""
              class="w-full"
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2
              class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
            >
              Nuxt development is carried out by passionate developers
            </h2>
            <p class="my-8 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia. <br />
              <br />
              Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur
              impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur
              asperiores eum amet.
            </p>
            <div
              class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800"
            >
              <div class="mt-8 flex gap-4 md:items-center">
                <div
                  class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="w-5/6">
                  <h4
                    class="font-semibold text-lg text-gray-700 dark:text-indigo-300"
                  >
                    Chat Anytime
                  </h4>
                  <p class="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
              <div class="pt-4 flex gap-4 md:items-center">
                <div
                  class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="w-5/6">
                  <h4
                    class="font-semibold text-lg text-gray-700 dark:text-teal-300"
                  >
                    Real Time Location
                  </h4>
                  <p class="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-gray-600 dark:text-gray-300" id="testimonials">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="mb-20 space-y-4 px-6 md:px-0">
          <h2
            class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl"
          >
            Fundadores de LearnflowAI
          </h2>
        </div>
        <!-- content -->
        <div class="">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              <div
                class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8"
              >
                <div class="h-full flex flex-col justify-center space-y-4">
                  <img
                    class="w-20 h-20 mx-auto rounded-full"
                    src={member}
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  />
                  <p class="text-gray-600 md:text-xl">
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
                      >CEO & Fullstack Developer</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8"
              >
                <img
                  class="w-20 h-20 mx-auto rounded-full"
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p class="text-gray-600">
                    <span class="font-serif">"</span> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat repellat perspiciatis
                    excepturi est. Non ipsum iusto aliquam consequatur repellat
                    provident, omnis ut, sapiente voluptates veritatis cum
                    deleniti repudiandae ad doloribus.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Alexander Bris
                    </h6>
                    <span class="text-sm text-gray-600"
                      >Frontend Developer & UX/UI</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8"
              >
                <img
                  class="w-20 h-20 mx-auto rounded-full"
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p class="text-gray-600">
                    <span class="font-serif">"</span> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat repellat perspiciatis
                    excepturi est. Non ipsum iusto aliquam consequatur repellat
                    provident, omnis ut, sapiente voluptates veritatis cum
                    deleniti repudiandae ad doloribus.
                    <span class="font-serif">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Jaffet Baez
                    </h6>
                    <span class="text-xs text-gray-600">Frontend Developer</span
                    >
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
      </div>
      <div id="blog">
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2
              class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white"
            >
              Latest Articles
            </h2>
            <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore
              sunt, debitis dolorum officia aliquid explicabo? Excepturi,
              voluptate?
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
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
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a>
              </div>
            </div>
            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
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
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a>
              </div>
            </div>
            <div
              class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
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
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-info dark:text-blue-300">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="bg-white bg-white-900">
    <div class="mx-auto max-w-md">
      <strong class="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
        Want us to email you with the latest blockbuster news?
      </strong>

      <form class="mt-6">
        <div class="relative max-w-lg">
          <label class="sr-only" for="email"> Email </label>

          <input
            class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
      <div class="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
        <p class="text-center text-sm/relaxed text-gray-500 dark:text-gray-400">
          © LearnflowAI 2024. All rights reserved.
          <br />
        </p>
        <div class="mt-6 flex justify-center gap-4 lg:justify-start">
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
            href="#"
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
</body>