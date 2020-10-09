import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';
import Product from 'src/app/shared/models/Product';
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

  imageObject: Array<object> = [];

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
      (product: Product) => {
        this.product = product;
        this.mapImageObject();
        this.image=product.image;
      },
      () => this.toastrService.error("Ocorreu um erro ao obter as informações do produto")
    )
  }

  mapImageObject() {
    this.product.images?.forEach(image => {
      this.imageObject.push({image, thumbImage: image})
    });

    console.log(this.imageObject)
  }

  showImagesPopup() {
    this.slider.showLightbox();
  }

  changeImage(imageIndex) {
    this.image = this.imageObject[imageIndex]["image"];
  }

  getInstallmentsValue(product: Product): number {
    return product.price / product.installments;
  }

}
