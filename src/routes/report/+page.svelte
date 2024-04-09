<script lang="ts">
  import "../../app.css";
  import { envDataConf } from "../../server/server";
  import toast, { Toaster } from "svelte-french-toast";

  let queueFileSubmit: Boolean;

  let formData = {
    reason: "",
    imageURL: "",
  };

  const submitReport = async () => {
    try {
      const response = await fetch(`${envDataConf.URLBACK}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error(
          "Oops!, parece que hubo un error al enviar el reporte, intentalo mas tarde"
        );
      }

      toast.success("Reporte enviado correctamente!");
      
      console.log("reporte enviado correctamente");
    } catch (error) {
      toast.error("error");
      console.error(error);
    }
  };
</script>

<Toaster />

<div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px] bg-white">
    <form class="py-6 px-9" on:submit|preventDefault={submitReport}>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Enviar un reporte de fallo
        </label>
        <input
          type="text"
          placeholder="Problema con..."
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div class="mb-6 pt-4">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
          Subir imagen de referencia
        </label>

        <div class="mb-8">
          <input type="file" name="file" id="file" class="sr-only" />
          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Arrastra imagen aquí
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Ó
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Buscar
              </span>
            </div>
          </label>
        </div>

        {#if queueFileSubmit}
          <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
            <div class="flex items-center justify-between">
              <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                banner-design.png
              </span>
              <button class="text-[#07074D]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        {/if}
      </div>

      <div>
        <button
          class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Enviar reporte
        </button>
      </div>
    </form>
  </div>
</div>