<script>
  import "../../app.css";
  import "../../main.styles.css";
  import { goto } from "$app/navigation";
  // import { Data } from "../../interfaces/data.interface"

  /**
   * @type {any}
   */
  let awaitAI;
  let currentDate = new Date();

  let formData = {
    theme: "",
  };

  // const API_KEY = "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"
  const responseGPT = async () => {
    try {
      //
      // goto()
      // awaitAI = true
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="app-container">
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">Learnflow</p>
      <div class="search-wrapper">
        <!-- ? search input -->
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
    <div class="app-header-right">
      <!-- ? dark mode -->
      <button class="mode-switch" title="Switch Theme">
        <svg
          class="moon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>

      <!-- ? button add -->
      <a class="add-btn" href="/estudiar">
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

      <!-- ? notifications -->
      <button class="notification-btn">
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
          class="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg
        >
      </button>

      <!-- ? profile button -->
      <button class="profile-btn">
        <!-- <img src="https://assets.codepen.io/3306515/IMG_2025.jpg"/> -->
        <span>Hiram Gabriel</span>
      </button>
    </div>
  </div>
  <div class="app-content">
    <div class="app-sidebar">
      <a href="/" class="app-sidebar-link active" title="home">
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
          class="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg
        >
      </a>
      <a href="/estudiar" class="app-sidebar-link">
        <svg
          class="link-icon feather feather-pie-chart"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <defs />
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
        </svg>
      </a>
      <a href="/calendario" class="app-sidebar-link">
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
          class="feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" /></svg
        >
      </a>
      <a href="/configuracion" class="app-sidebar-link">
        <svg
          class="link-icon feather feather-settings"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <defs />
          <circle cx="12" cy="12" r="3" />
          <path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
          />
        </svg>
      </a>
    </div>

    <!-- todo: menu index -->
    <div class="projects-section">
      <div class="projects-section-header">
        <p class="text-center font-bolder">Selecciona una tarjeta</p>
        <!-- <p class="time">{ currentDate.toLocaleDateString() }</p> -->
      </div>
      <br /><br />

      <!-- todo: index component -->

      
      
      <!-- todo: final component -->
      
      
      <article class='flex'>
      <section class='flex flex-col items-center'>
        <div class='min-h-96 rounded-lg border border-gray-900 max-w-md p-3'>
          <p class='text-center text-lg font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis aspernatur omnis necessitatibus eaque minus provident eum explicabo laudantium obcaecati quo vitae cupiditate, tempora veniam accusantium ipsa perferendis praesentium reprehenderit sed neque distinctio illo! Rem fugit eum ullam quasi atque veniam ea, similique repudiandae exercitationem doloribus assumenda hic enim asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum earum enim nobis! Doloribus, pariatur. Neque sit eos aut assumenda cupiditate?.</p>
        </div>
        <div class="flex flex-col items-center mt-3">
          <div class="mr-2">Icon</div>
          <div>.............................</div>
        </div>
      </section>
      <section class='flex mx-5 flex-col items-center'>
        <div class='min-h-96 rounded-lg border border-gray-900 max-w-md p-3'>
          <p class='text-center text-lg font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis aspernatur omnis necessitatibus eaque minus provident eum explicabo laudantium obcaecati quo vitae cupiditate, tempora veniam accusantium ipsa perferendis praesentium reprehenderit sed neque distinctio illo! Rem fugit eum ullam quasi atque veniam ea, similique repudiandae exercitationem doloribus assumenda hic enim asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum earum enim nobis! Doloribus, pariatur. Neque sit eos aut assumenda cupiditate?.</p>
        </div>
        <div class="flex flex-col items-center mt-3">
          <div class="mr-2">Icon</div>
          <div>.............................</div>
        </div>
      </section>
      <section class='flex flex-col items-center'>
        <div class='min-h-96 rounded-lg border border-gray-900 max-w-md p-3'>
          <p class='text-center text-lg font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis aspernatur omnis necessitatibus eaque minus provident eum explicabo laudantium obcaecati quo vitae cupiditate, tempora veniam accusantium ipsa perferendis praesentium reprehenderit sed neque distinctio illo! Rem fugit eum ullam quasi atque veniam ea, similique repudiandae exercitationem doloribus assumenda hic enim asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum earum enim nobis! Doloribus, pariatur. Neque sit eos aut assumenda cupiditate?.</p>
        </div>
        <div class="flex flex-col items-center mt-3">
          <div class="mr-2">Icon</div>
          <div>.............................</div>
        </div>
      </section>
      </article>
        
      <!-- index -->
      <!-- <div class="py-16 bg-gradient-to-br from-gray-50 to-blue-100 overflow-auto border-10">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 border-10">
      <div class="mb-12 space-y-2 text-center">
        <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">¿Qué es programación?</h2>
        <p class="lg:w-6/12 lg:mx-auto">Da click en la respuesta correcta</p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div class="p-10 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              </div>
              <button class="block w-max text-green-600 text-bolder">Seleccionar ✔</button>
            </div>
          </div>
        </div>

        <div class="p-10 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              </div>
              <button class="block w-max text-cyan-600">Seleccionar ✔</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</div> -->
      <!-- finish -->
    </div>

    <!-- ? acciones start -->
    <!-- <div class="messages-section hidden sm:block">
    <button class="messages-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" /></svg>
    </button>
    <div class="projects-section-header">
      <p>Acciones</p>
    </div>
  </div> -->

    <!-- ? dont touch -->
  </div>
</div>
