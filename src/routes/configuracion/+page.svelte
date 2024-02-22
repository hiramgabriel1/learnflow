<script>
  import "../../app.css";
  import "../../main.styles.css";
  import toast, { Toaster } from "svelte-french-toast";

  let currentDate = new Date();
  /**
   * @type {boolean}
   */
  let disabled;

  let formData = {
    question: "",
  };

  // @ts-ignore
  const handleInputChange = async (e) => {
    const value = e.target.value;

    if (value <= 0) {
      toast.error("Ingresa un valor mayor ó igual a 1");
      disabled = true;
    } else {
      disabled = false;
    }
  };

  const sendQuestionToMarcyAI = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
</script>

<Toaster />
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
        <span>Hiram Gabriel</span>
      </button>
    </div>
  </div>
  <div class="app-content">
    <div class="app-sidebar">
      <a href="/dashboard" class="app-sidebar-link active" title="home">
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
      <a href="/asistente" class="app-sidebar-link">
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
        <!-- <p>Fecha</p> -->
        <p class="time">{currentDate.toLocaleDateString()}</p>
      </div>

      <br /><br />
      <!-- inicio -->
      <div class="max-w-4xl mx-auto p-8 overflow-auto">
        <h1 class="text-3xl font-semibold mb-6">Settings</h1>
        <p class="text-sm mb-10">Manage your account, preferences, and more</p>
        <div dir="ltr" data-orientation="horizontal">
          <div
            role="tablist"
            aria-orientation="horizontal"
            class="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
            tabindex="0"
            data-orientation="horizontal"
            style="outline: none;"
          >
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-profile"
              data-state="inactive"
              id="radix-:r3o:-trigger-profile"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">Profile</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-notifications"
              data-state="inactive"
              id="radix-:r3o:-trigger-notifications"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">Notifications</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-ai_integration"
              data-state="inactive"
              id="radix-:r3o:-trigger-ai_integration"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">AI Integration</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-visual_preferences"
              data-state="inactive"
              id="radix-:r3o:-trigger-visual_preferences"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">Visual Preferences</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-security"
              data-state="inactive"
              id="radix-:r3o:-trigger-security"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">Security</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-connected_devices"
              data-state="inactive"
              id="radix-:r3o:-trigger-connected_devices"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">Connected Devices</button
            ><button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3o:-content-help_feedback"
              data-state="inactive"
              id="radix-:r3o:-trigger-help_feedback"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow font-medium"
              tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item="">Help &amp; Feedback</button
            >
          </div>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-medium mb-4">Account</h2>
          <div class="flex justify-between items-center mb-4">
            <div>
              <p class="font-medium">Email</p>
              <p class="text-sm">lucy@gmail.com</p>
            </div>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Change</button
            >
          </div>
          <div class="flex justify-between items-center mb-8">
            <p class="font-medium">Password</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Change</button
            >
          </div>
          <h2 class="text-xl font-medium mb-4">Preferences</h2>
          <div class="mb-4">
            <button
              type="button"
              role="switch"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
              id="marketing-emails"
              ><span
                data-state="unchecked"
                class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              ></span></button
            ><input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px;"
            /><label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              for="marketing-emails">Marketing emails</label
            >
            <p class="text-sm">
              We'll send you occasional email with courses and learning tips
            </p>
          </div>
          <div class="mb-4">
            <button
              type="button"
              role="switch"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
              id="weekly-digest"
              ><span
                data-state="unchecked"
                class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              ></span></button
            ><input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px;"
            /><label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              for="weekly-digest">Weekly digest</label
            >
            <p class="text-sm">
              We'll send you occasional email with courses and learning tips
            </p>
          </div>
          <div class="mb-4">
            <button
              type="button"
              role="switch"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
              id="newsletter"
              ><span
                data-state="unchecked"
                class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              ></span></button
            ><input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px;"
            /><label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              for="newsletter">Newsletter</label
            >
            <p class="text-sm">
              We'll send you occasional email with courses and learning tips
            </p>
          </div>
          <div class="mb-8">
            <button
              type="button"
              role="switch"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
              id="product-updates"
              ><span
                data-state="unchecked"
                class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              ></span></button
            ><input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px;"
            /><label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              for="product-updates">Product updates</label
            >
            <p class="text-sm">
              We'll send you occasional email with courses and learning tips
            </p>
          </div>
          <div class="mb-4">
            <button
              type="button"
              role="switch"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
              id="ai-data-usage"
              ><span
                data-state="unchecked"
                class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
              ></span></button
            ><input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px;"
            /><label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              for="ai-data-usage">AI Data Usage</label
            >
          </div>
          <h2 class="text-xl font-medium mb-4">Appearance</h2>
          <div class="flex justify-between items-center mb-4">
            <p class="font-medium">Theme</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Light</button
            >
          </div>
          <div class="flex justify-between items-center mb-8">
            <p class="font-medium">Font Size</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Medium</button
            >
          </div>
          <h2 class="text-xl font-medium mb-4">Security</h2>
          <div class="flex justify-between items-center mb-4">
            <p class="font-medium">2FA</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Disabled</button
            >
          </div>
          <div class="flex justify-between items-center mb-4">
            <p class="font-medium">Security Key</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Add</button
            >
          </div>
          <div class="flex justify-between items-center mb-4">
            <p class="font-medium">Authorized Applications</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >View</button
            >
          </div>
          <div class="flex justify-between items-center mb-4">
            <p class="font-medium">Your Public Profile</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Edit</button
            >
          </div>
          <div class="flex justify-between items-center mb-4">
            <p class="font-medium">Your Public Profile</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Edit</button
            >
          </div>
          <div class="flex justify-between items-center">
            <p class="font-medium">Your Public Profile</p>
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >Edit</button
            >
          </div>
        </div>
      </div>
      <!-- final -->
    </div>
  </div>
</div>
