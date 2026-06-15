export interface Source {
  text: string;
}

export interface RagResponse {
  answer: string;
  sources: Source[];
}