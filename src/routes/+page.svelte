<script>
    import "../app.css"
    import "../main.styles.css"

    /**
   * @type {boolean}
   */
    let showModal

    // current date
    let currentDate = new Date()

</script>
 
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
      <!-- <Tooltip> -->
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
        <p>Continua estudiando</p>
        <p class="time">{currentDate.toLocaleDateString()}</p>
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <div class="item-status">
            <span class="status-number">4</span>
            <span class="status-type">En progreso</span>
          </div>
          <div class="item-status">
            <span class="status-number">62</span>
            <span class="status-type">Temas totales</span>
          </div>
        </div>
        <div class="view-actions">
          <button class="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      <div class="project-boxes jsGridView">
        <div class="project-box-wrapper">
          <div class="project-box" style="background-color: #fee4cb;">
            <div class="project-box-header">
              <span>{currentDate.toLocaleDateString()}</span>
              <div class="more-wrapper">

                <!-- ? options points -->
                <button 
                  class="project-btn-more text-center p-5 flex-auto justify-center"
                  on:click={() => showModal = true}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 flex items-center text-red-500 mx-auto"  viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">Web Designing</p>
          <p class="box-content-subheader">Prototyping</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Progreso</p>
          <div class="box-progress-bar">
            <span class="box-progress" style="width: 60%; background-color: #ff942e"></span>
          </div>
          <p class="box-progress-percentage">60%</p>
        </div>
        <div class="project-box-footer">
          <div class="days-left" style="color: #ff942e;">
            Hace 2 dias
          </div>
        </div>
      </div>
    </div>
    <div class="project-box-wrapper">
      <div class="project-box" style="background-color: #e9e7fd;">
        <div class="project-box-header">
          <span>December 10, 2020</span>
          <div class="more-wrapper">
             <!-- ? options points -->
             <button 
             class="project-btn-more text-center p-5 flex-auto justify-center"
             on:click={() => showModal = true}>
             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 flex items-center text-red-500 mx-auto"  viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
           </svg>
           </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">Testing</p>
          <p class="box-content-subheader">Prototyping</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Progreso</p>
          <div class="box-progress-bar">
            <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
          </div>
          <p class="box-progress-percentage">50%</p>
        </div>
        <div class="project-box-footer">
          <div class="days-left" style="color: #4f3ff0;">
            Hace 3 dias
          </div>
        </div>
      </div>
    </div>
    <div class="project-box-wrapper">
      <div class="project-box">
        <div class="project-box-header">
          <span>December 10, 2020</span>
          <div class="more-wrapper">
               <!-- ? options points -->
               <button 
               class="project-btn-more text-center p-5 flex-auto justify-center"
               on:click={() => showModal = true}>
               <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 flex items-center text-red-500 mx-auto"  viewBox="0 0 20 20" fill="currentColor">
                   <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
             </svg>
             </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">Svg Animations</p>
          <p class="box-content-subheader">Prototyping</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Progreso</p>
          <div class="box-progress-bar">
            <span class="box-progress" style="width: 80%; background-color: #096c86"></span>
          </div>
          <p class="box-progress-percentage">80%</p>
        </div>
        <div class="project-box-footer">
          <div class="days-left" style="color: #096c86;">
            Hace 3 dias
          </div>
        </div>
      </div>
    </div>
    <div class="project-box-wrapper">
      <div class="project-box" style="background-color: #ffd3e2;">
        <div class="project-box-header">
          <span>December 10, 2020</span>
          <div class="more-wrapper">
              <!-- ? options points -->
              <button 
              class="project-btn-more text-center p-5 flex-auto justify-center"
              on:click={() => showModal = true}>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 flex items-center text-red-500 mx-auto"  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">UI Development</p>
          <p class="box-content-subheader">Prototyping</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Progreso</p>
          <div class="box-progress-bar">
            <span class="box-progress" style="width: 20%; background-color: #df3670"></span>
          </div>
          <p class="box-progress-percentage">20%</p>
        </div>
        <div class="project-box-footer">
          <div class="days-left" style="color: #df3670;">
            Hace 3 dias
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="messages-section">
  <button class="messages-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" /></svg>
  </button>
  <div class="projects-section-header">
    <p>Pendientes</p>
  </div>
</div> -->
</div>
</div>

{#if showModal}
<div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
  <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
  <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div class="">
              <div class="text-center p-5 flex-auto justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                          />
                    </svg>
                    <h3 class="text-xl font-bold py-4">¿Está seguro de eliminar?</h3>
                    <p class="text-sm text-gray-500 px-8">Si lo elimina no podrá recuperarlo</p>
              </div>
              <!--footer-->
              <div class="p-3 mt-2 text-center space-x-4 md:block">
                    <button 
                      class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                      on:click={() => showModal = false}
                      >
                        Cancelar
                    </button>
                    <button 
                      type="submit"
                      class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                      >
                        Eliminar
                    </button>
              </div>
        </div>
  </div>
</div>

{/if}