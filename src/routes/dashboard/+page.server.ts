import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const jwt = "jwt=dear";

  const token = jwt.split("=")[1];
  try {
    const validateSesion = await fetch(
      "http://localhost:4000/api/v1/auth/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(validateSesion);
    console.log("go");
    if (!validateSesion.ok){
      throw new Error("Error al acceder a la página");
    }
  } catch (err) {
    return redirect(303, "/auth/login");
  }
};
