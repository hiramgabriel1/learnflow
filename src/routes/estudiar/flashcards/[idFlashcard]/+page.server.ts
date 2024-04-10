// import { redirect } from "@sveltejs/kit";
// import type { PageServerLoad } from "../../$types";
// import { envDataConf } from "../../../../server/server";
// import jwt from "jsonwebtoken";
// import type { MessageJwtInterface } from "../../../../interfaces/MessageJwt.interface";

// export const load: PageServerLoad = async ({ cookies, params }) => {
//   const token = cookies.get("jwt");
//   const decodeToken = jwt.decode(token || "");
  
//   try {
//     const validateSesion = await fetch(
//       `${envDataConf.URLBACK}/auth/user`,

//       {
//         headers: {
//           Cookie: `jwt=${token};`,
//           Authorization: `Bearer ${token}`,
//         },
//         credentials: "include",
//       }
//     );

//     if (!validateSesion.ok) {
//       throw new Error("Error al acceder a la página");
//     }
//     console.log(params)

//     return {
//       user: decodeToken as MessageJwtInterface,
//       //@ts-ignore
//       idFlashcard: parseInt(params?.idFlashcard || '0')
//     };
//     // Si la respuesta es correcta, no es necesario hacer nada más
//   } catch (err) {
//     // Si hay un error, redirige al usuario a la página de inicio de sesión
//     return redirect(303, "/auth/login");
//   }
// };
