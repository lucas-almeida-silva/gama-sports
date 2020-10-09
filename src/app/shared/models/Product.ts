import { getNumberOfCurrencyDigits } from '@angular/common'

export default class Product {
    id: number;
    description: string;
    price: number;
    installments: number;
    image: string;
    images?: string[];
    size: string;
    gender: string;
    material: string;
    color: string;
    brand: string;
}

