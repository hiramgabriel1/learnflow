import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { envDataConf } from "../../server/server";

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("jwt");

  try {
    const validateSesion = await fetch(
      `${envDataConf.URLBACK}/auth/user`,
      {
        headers: {
          Cookie: `jwt=${token};`,
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    if (!validateSesion.ok) {
      throw new Error("Error al acceder a la página");
    }

    // Si la respuesta es correcta, no es necesario hacer nada más
  } catch (err) {
    // Si hay un error, redirige al usuario a la página de inicio de sesión
    return redirect(303, "/auth/login");
  }
};
