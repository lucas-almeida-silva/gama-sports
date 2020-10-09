import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';
import Product from 'src/app/shared/models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  image: string;
  @ViewChild('nav') slider: NgImageSliderComponent;

  imageObject: Array<object> = [{
    image: 'https://images.tcdn.com.br/img/img_prod/498725/camisa_barcelona_2020_jogador_uniforme_titular_3823_1_20190703185610.jpg',
    thumbImage: 'https://images.tcdn.com.br/img/img_prod/498725/camisa_barcelona_2020_jogador_uniforme_titular_3823_1_20190703185610.jpg',
}, {
    image: 'https://miro.medium.com/fit/c/128/128/0*PmKQprtv4A8k2w3c', // Support base64 image
    thumbImage: 'https://miro.medium.com/fit/c/128/128/0*PmKQprtv4A8k2w3c', // Support base64 image
}
];

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 1
  //     },
  //     740: {
  //       items: 1
  //     },
  //     940: {
  //       items: 1
  //     }
  //   },
  //   nav: true,

  // }

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.productService.getProductById(id).subscribe(
      (product: Product) => this.product = product,
      () => this.toastrService.error("Ocorreu um erro ao obter as informações do produto")
    )
  }

  showImagesPopup() {
    this.slider.showLightbox();
  }

  changeImage(imageIndex) {
    this.image = this.imageObject[imageIndex]["image"];
  }

}
