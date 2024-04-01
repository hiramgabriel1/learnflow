<script>
  export let data;

  const { user } = data;


  // import firebase from "firebase/compat/app";
  import "../../app.css";
  import LayoutInitial from "../../components/LayoutInitial.svelte";
  import "../../main.styles.css";

  /**
   * @type {boolean}
   */
  let showModal;

  // current date
  let currentDate = new Date();

  // todo: Consume data api here

  if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        fetch("http://localhost:4000/api/v1/auth/logout", {
          method: "POST",
          credentials: "include",
        })
          .then((response) => {
            if (response.ok) {
              console.log("Usuario ha cerrado sesión exitosamente");
            } else {
              console.error(
                "No se pudo cerrar sesión. Código de estado:",
                response.status
              );
            }
          })
          .catch((error) => {
            console.error("Error al intentar cerrar sesión:", error);
          });
      });
    } else {
      console.error("No se encontró el botón de cerrar sesión.");
    }
  });
}

</script>

<LayoutInitial user={user}>
  <!-- todo: menu index -->
  <div class="projects-section">
    <div class="projects-section-header">
      <p>Continua estudiando</p>
      <p class="time">{currentDate.toDateString()}</p>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-grid"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /></svg
          >
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
                on:click={() => (showModal = true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 flex items-center text-red-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
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
              <span
                class="box-progress"
                style="width: 60%; background-color: #ff942e"
              ></span>
            </div>
            <p class="box-progress-percentage">60%</p>
          </div>
          <div class="project-box-footer">
            <div class="days-left" style="color: #ff942e;">Hace 2 dias</div>
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
                on:click={() => (showModal = true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 flex items-center text-red-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
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
              <span
                class="box-progress"
                style="width: 50%; background-color: #4f3ff0"
              ></span>
            </div>
            <p class="box-progress-percentage">50%</p>
          </div>
          <div class="project-box-footer">
            <div class="days-left" style="color: #4f3ff0;">Hace 3 dias</div>
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
                on:click={() => (showModal = true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 flex items-center text-red-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
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
              <span
                class="box-progress"
                style="width: 80%; background-color: #096c86"
              ></span>
            </div>
            <p class="box-progress-percentage">80%</p>
          </div>
          <div class="project-box-footer">
            <div class="days-left" style="color: #096c86;">Hace 3 dias</div>
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
                on:click={() => (showModal = true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 flex items-center text-red-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
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
              <span
                class="box-progress"
                style="width: 20%; background-color: #df3670"
              ></span>
            </div>
            <p class="box-progress-percentage">20%</p>
          </div>
          <div class="project-box-footer">
            <div class="days-left" style="color: #df3670;">Hace 3 dias</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</LayoutInitial>

{#if showModal}
  <div
    class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
    id="modal-id"
  >
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div
      class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 flex items-center text-red-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-xl font-bold py-4">¿Está seguro de eliminar?</h3>
          <p class="text-sm text-gray-500 px-8">
            Si lo elimina no podrá recuperarlo
          </p>
        </div>
        <!--footer-->
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            on:click={() => (showModal = false)}
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
