<script>
  import "../../app.css";
</script>

<!-- component -->
<header class="max-w-6xl mx-auto py-8 px-5 flex justify-between lg:px-8">
  <a href="#/" class="text-2xl text-gray-900 font-semibold"
    >Learnflow <span class="text-indigo-600">AI</span></a
  >
  <nav class="">
    <ul class="flex pt-1.5 text-md lg:pt-0 lg:text-lg">
      <li class="lg:px-4">
        <a href="#/" class="p-3 text-gray-500 font-semibold">Ingresar</a>
      </li>
      <li class="lg:px-4">
        <a href="#/" class="p-3 text-gray-500 font-semibold">Blog</a>
      </li>
      <li class="lg:pl-4">
        <a href="#/" class="p-3 text-gray-500 font-semibold">Contacto</a>
      </li>
    </ul>
  </nav>
</header>
<main class="max-w-6xl mx-auto pt-10 pb-36 px-8">
  <div class="max-w-md mx-auto mb-14 text-center">
    <h1 class="text-4xl font-semibold mb-6 lg:text-5xl">
      Planes <span class="text-indigo-600">Flexibles</span>
    </h1>
    <p class="text-xl text-gray-500 font-medium">
      Selecciona el plan que mejor se adecue a tus necesidades
    </p>
  </div>

  <div
    class="flex flex-col justify-between items-center lg:flex-row lg:items-start"
  >
    <div
      class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none"
    >
      <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
        <img
          src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
          alt=""
          class="rounded-3xl w-20 h-20"
        />
        <div class="ml-5">
          <span class="block text-2xl font-semibold">Mensual</span>
          <span
            ><span class="font-medium text-gray-500 text-xl align-top"
              >$&thinsp;</span
            ><span class="text-3xl font-bold">10 </span></span
          >
        </div>
      </div>
      <ul class="mb-7 font-medium text-gray-500">
        <li class="flex text-lg mb-2">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
          />
          <span class="ml-3"
            >Acceso a <span class="text-black">MarcyAI</span></span
          >
        </li>
        <li class="flex text-lg">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
          />
          <span class="ml-3"
            ><span class="text-black">Generación de imagenes</span> con Inteligencia Artificial</span
          >
        </li>
      </ul>
      <a
        href="https://buy.stripe.com/9AQcQ76k1gIJe6QdQQ"
        class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
      >
        Seleccionar
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
          src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
          class="ml-2"
        />
      </a>
    </div>

    <div
      class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0"
    >
      <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
        <img
          src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
          alt=""
          class="rounded-3xl w-20 h-20"
        />
        <div class="ml-5">
          <span class="block text-3xl font-semibold text-white">Trimestral</span
          >
          <span
            ><span class="font-medium text-xl align-top">$&thinsp;</span><span
              class="text-3xl font-bold text-white"
              >25
            </span></span
          >
        </div>
      </div>
      <ul class="mb-10 font-medium text-xl">
        <li class="flex mb-6">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://res.cloudinary.com/williamsondesign/check-white.svg"
          />
          <span class="ml-3"
            >Novedades antes de <span class="text-white">salida</span></span
          >
        </li>
        <li class="flex mb-6">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://res.cloudinary.com/williamsondesign/check-white.svg"
          />
          <span class="ml-3"
            >Acceso a <span class="text-white">MarcyAI</span></span
          >
        </li>
        <li class="flex">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img
            src="https://res.cloudinary.com/williamsondesign/check-white.svg"
          />
          <span class="ml-3"
            ><span class="text-white">Generación de imagenes con </span>Inteligencia Articial</span
          >
        </li>
      </ul>
      <a
        href="https://buy.stripe.com/14k6rJbEldwxaUEdQR"
        class="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
      >
        Seleccionar
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
          src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
          class="ml-2"
        />
      </a>
    </div>
  </div>
</main>
