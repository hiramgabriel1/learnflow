<script>
  export let data;
  const { user } = data;

  import "../../app.css";
  import LayoutInitial from "../../components/LayoutInitial.svelte";
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
<LayoutInitial user={user}>
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
</LayoutInitial>
