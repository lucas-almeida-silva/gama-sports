import { getNumberOfCurrencyDigits } from '@angular/common'

export default class Product {
    id: number;
    description: string;
    price: number;
    installments: number;
    images: string[];
    sizes: string;
    availableSizes: string[];
    gender: string;
    material: string;
    color: string;
    brand: string;
}

