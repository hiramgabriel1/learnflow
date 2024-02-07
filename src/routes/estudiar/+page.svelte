<script>
  import "../../app.css"
  import "../../main.styles.css"
  import { goto } from "$app/navigation"
  import toast, { Toaster } from 'svelte-french-toast';

    let currentDate = new Date();
    /**
   * @type {boolean}
   */
    let disabled

    let formData = {
        theme: '',
        cards: ''
    };
  
    // @ts-ignore
    const handleInputChange = async (e) => {
    const value = e.target.value;
    
    if (value <= 0) {
        toast.error("Ingresa un valor mayor ó igual a 1")
        disabled = true
    }else{
      disabled = false
    }
  };

  // @ts-ignore
  // const handleInputTheme = async (e) => {
  //   const value = e.target.value;
    
  //   if (value != "") {
  //       toast.error("Ingresa un valor mayor ó igual a 1")
  //       disabled = true
  //   }else{
  //     disabled = false
  //   }
  // };

    const responseGPT = async () => {
        try {

          // @ts-ignore
          if(formData.theme === '' || !isNaN(formData.theme)){
            return toast.error("Ingresa un tema! 🚀")
          }

          // console.log(!isNaN(formData.theme));
          toast('pensando', {
            icon: '🧠'
           })
          
           const api = "https://jsonplaceholder.typicode.com/todos/1";
            const response = await fetch(api);

            if (!response.ok) {
                throw new Error('No se pudo obtener la respuesta del servidor.');
            }

            const convertData = await response.json();
            
            goto("/flashcards")
            console.log(convertData);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
</script>
<Toaster />

<div class="app-container">
<div class="app-header">
  <div class="app-header-left">
    <span class="app-icon"></span>
    <p class="app-name">Learnflow</p>
    <div class="search-wrapper">

      <!-- ? search input -->
      <input class="search-input feather feather-search" type="text" placeholder="Buscar">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>
  </div>
  <div class="app-header-right">
    
    <!-- ? dark mode -->
    <button class="mode-switch" title="Switch Theme">
      <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
        <defs></defs>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    </button>

    <!-- ? button add -->
    <a class="add-btn" href="/estudiar">
      <svg class="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" /></svg>
    </a>

    <!-- ? notifications -->
    <button class="notification-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" /></svg>
    </a>
    <a href="/estudiar" class="app-sidebar-link">
      <svg class="link-icon feather feather-pie-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
        <defs />
        <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
      </svg>
    </a>
    <a href="/calendario" class="app-sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" /></svg>
    </a>
    <a href="/configuracion" class="app-sidebar-link">
      <svg class="link-icon feather feather-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
        <defs />
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    </a>
  </div>

  <!-- todo: menu index -->
  <div class="projects-section">
    <div class="projects-section-header">
      <!-- <p>Fecha</p> -->
      <p class="time">{ currentDate.toLocaleDateString() }</p>
    </div>

    <br><br>

    <!-- todo: enter GPT DUDE -->
    <div class="relative flex items-center justify-center py-12 px-6 lg:px-12 relative items-center">
      <div class="absolute opacity-60 inset-0 z-0"></div>
      <div class="sm:max-w-3xl w-full p-12 bg-white rounded-xl z-10">
          <div class="text-center">
              <h2 class="mt-8 text-4xl font-bold text-gray-900">
                  Ingresa un tema!
              </h2>
              <p class="mt-4 text-lg text-gray-400">Puedes decirle que te diga qué es la programación.</p>
          </div>
  
          <!-- ? form here -->
          <form class="mt-10 space-y-6">
            
              <div class="grid grid-cols-1 space-y-4">
                    <input 
                    class="text-lg p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500" 
                    type="text"
                    id="theme"
                    required
                    minlength="1"
                    bind:value={formData.theme} 
                    placeholder="¿Qué es NestJS?" />
              </div>
              <div class="grid grid-cols-1 space-y-4">
                <input 
                    class="text-lg p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500" 
                    type="number"
                    id="numberCards"
                    required
                    min="1"
                    on:input={handleInputChange}
                    bind:value={formData.cards}
                    placeholder="¿Cuantas tarjetas deseas?" />
            </div>
              <div>
                  {#if !disabled}
                      <button
                      on:click={responseGPT}
                      class="my-8 w-full flex justify-center bg-blue-500 text-gray-100 p-6 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                      >
                        Comenzar
                    </button>
                  {/if}
              </div>
          </form>
      </div>
  </div>
  
  </div>
</div>
</div>