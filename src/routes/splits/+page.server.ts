import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const jwt = "jwt=dear";

  const token = jwt.split("=")[1];
  try {
    const validateSesion = await fetch(
      "https://learnflow-services.up.railway.app/api/v1/auth/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!validateSesion.ok) {
      throw new Error("Error al acceder a la página");
    }
  } catch (err) {
    return redirect(303, "/auth/login");
  }
};
