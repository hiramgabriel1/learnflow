<script>
  import "../../../app.css";
</script>

<div
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white"
>
  <div class="max-w-xl px-5 text-center">
    <h2 class="mb-2 text-[42px] font-bold text-zinc-800">Verifica tu cuenta</h2>
    <p class="mb-2 text-lg text-zinc-500">
      Ingresa a tu correo gmail y verifica que recibiste un correo de
      confirmación de tu cuenta en Learnflow AI <br>
      <span
        class="font-medium text-indigo-500">mail@yourdomain.com</span 
      >.
      <!-- en el span hay que renderizar el correo del usuario -->
      <br><br>
      <strong>¿aún no recibes el correo?</strong>
    </p>
    <a
      href="/login"
      class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
      >Reenvíar correo de confirmación →</a
    >
  </div>
</div>