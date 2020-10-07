import { getNumberOfCurrencyDigits } from '@angular/common'

export default interface Product {
    id: number;
    description: string;
    price: number;
    installments: number;
    image: string;
    size: string;
    gender: string;
    material: string;
    color: string;
    brand: string;
}

