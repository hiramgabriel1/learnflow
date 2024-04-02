export interface FlashcardInterface {
  question: string;
  response: ResponseFlashcardInterface[];
}

export interface ResponseFlashcardInterface {
  id: string;
  pregunta: string;
  respuesta: string;
  state: "correct" | "incorrect" | "enable" = "enable";
}
