import { envDataConf } from "../../server/server";
import type {
  MessageImageResponse,
  SendFormDataImageAiInterface,
} from "../types/imageTypes";

export const generateImageAi = (formData: SendFormDataImageAiInterface) => {
  return new Promise<MessageImageResponse>(async (resolve, reject) => {
    try {
      const sendRequest = await fetch(
        `${envDataConf.URLBACK}/generate-image/${formData.type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );
      // validate
      if (!sendRequest.ok) {
        throw new Error(`Error en la solicitud: ${sendRequest.statusText}`);
      }

      let responseMarcyAI = await sendRequest.json();
      resolve(responseMarcyAI as MessageImageResponse);
    } catch (err) {
      reject(err);
    }
  });
};
