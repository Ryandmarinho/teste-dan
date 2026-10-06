export type Coat = "Pelo curto" | "Pelo longo" | "Pelo duro";
export type Size = "Standard" | "Miniatura";

export interface Dog {
  id: number;
  name: string;
  emoji: string;
  color: string;
  coat: Coat;
  size: Size;
  ageMonths: number;
  price: number;
  city: string;
  description: string;
}
