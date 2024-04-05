export interface FlashcardInterface {
  id: number;
  question: string;
  created: string;
  response: ResponseFlashcardInterface[];
}

export interface ResponseFlashcardInterface {
  id: string;
  pregunta: string;
  respuesta: string;
  state: "correct" | "incorrect" | "enable" = "enable";
}
