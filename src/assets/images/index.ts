// index.ts
import image1 from "./book.jpg";
import image2 from "./computer.jpg";
import image3 from "./banana.jpg";
import image4 from "./car.jpg";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  { id: 1, quantity: 0, name: "Book", price: 10.99, image: image1 },
  { id: 2, quantity: 0, name: "Computer", price: 1199.0, image: image2 },
  { id: 3, quantity: 0, name: "Banana", price: 1.05, image: image3 },
  { id: 4, quantity: 0, name: "Car", price: 14000.0, image: image4 },
];

export default products;
