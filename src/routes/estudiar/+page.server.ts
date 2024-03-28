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
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!validateSesion.ok){
      throw new Error("Error al acceder a la página");
    }
  } catch (err) {
    return redirect(303, "/auth/login");
  }
};
