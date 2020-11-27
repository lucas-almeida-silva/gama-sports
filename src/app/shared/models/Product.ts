export default class Product {
  product_id: number;
  description: string;
  price: number;
  installments: number;
  images: [{
    url: string;
  }]
  sizes: string;
  availableSizes: string;
  gender: string;
  material: string;
  color: string;
  brand: string;
}

