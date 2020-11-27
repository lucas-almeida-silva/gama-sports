interface ProductItem {
  id: number;
  quantity: number;
  size: string;
}

export default interface Cart {
  clientId: string;
  total: number;
  products: ProductItem[];
}