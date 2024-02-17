<script>
  import "../../../app.css";

  const sendEmailToResetPasswordUser = async () => {};
</script>

<div
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white"
>
  <form
    on:submit|preventDefault={sendEmailToResetPasswordUser}
    class="max-w-3xl px-5 text-center"
  >
    <h2 class="mb-2 text-5xl font-bold text-zinc-800">
      Reestablezcamos tu contraseña
    </h2>

    Ingresa a tu correo gmail y verifica que recibiste un correo de confirmación
    de tu cuenta en LearnflowAI<br />
    <br />
    <br />
    <label
      for="UserEmail"
      class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
    >
      <input
        type="email"
        id="UserEmail"
        placeholder="Email"
        class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />
      <span
        class="text-20 absolute start-0 top-2 -translate-y-1/2 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
      >
        Email
      </span>
    </label><br />
    <button
      type="submit"
      class="button-send mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
    >
      Enviar →
    </button>
    <br /><br />
    <strong>¿Aún no recibes el correo?</strong>
    <a href="/login" class="font-medium text-indigo-500"
      >Reenvíar correo de confirmación →</a
    >
  </form>
</div>
