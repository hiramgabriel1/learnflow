import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, RequestEvent } from "./$types";
import { envDataConf } from "../../server/server";
import jwt from "jsonwebtoken";
import type { MessageJwtInterface } from "../../interfaces/MessageJwt.interface";

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("jwt");
  const decodeToken = jwt.decode(token || "");
  try {
    if (cookies === undefined) throw new Error("No existe el token");
    const validateSesion = await fetch(`${envDataConf.URLBACK}/auth/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Cookie: `jwt=${token};`,
      },
      credentials: "include",
    });
    // console.log("Validate validate");
    console.log(validateSesion);
    if (!validateSesion.ok) {
      throw new Error("Error al acceder a la página");
    }
    return {
      user: decodeToken as MessageJwtInterface,
    };
  } catch (err) {
    return redirect(303, "/auth/login");
  }
};
