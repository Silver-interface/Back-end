
export interface Ropa {
  image: string;
  seccion: "Hombre" | "Mujer";
  name: string;
  description: string;
  brand: string;
  color: [string];
  size: object;
  stock: number;
  price: Number;
}
