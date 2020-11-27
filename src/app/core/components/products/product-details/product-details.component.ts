import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';
import Product from 'src/app/shared/models/Product';
import { NgImageSliderComponent } from 'ng-image-slider';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  image: string;
  productSize: string;
  @ViewChild('imagesCarrousel') slider: NgImageSliderComponent;

  imageObject: Array<object> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private productService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.productService.getProductById(id).subscribe(
      (product: Product) => {
        this.product = product;
        this.mapImageObject();
        this.image = product.images[0].url;
      },
      () => this.toastrService.error('Ocorreu um erro ao obter as informações do produto')
    )
  }

  mapImageObject() {
    this.product.images.forEach(image => {
      this.imageObject.push({ image: image.url, thumbImage: image.url })
    });
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

  addToCart() {
    if(!this.verifyProductSize())
      return;

    this.cartService.addToCart(this.product, this.productSize);
    this.toastrService.success('Produto adicionado ao carrinho!');
  }

  buyProduct() {
    if(!this.verifyProductSize())
      return;

    this.cartService.addToCart(this.product, this.productSize);
    this.router.navigateByUrl('/cart');
  }

  verifyProductSize() {
    if(!this.productSize) {
      this.toastrService.warning("Selecione o tamanho antes de continuar!");
      return false;
    }
    return true;
  }

  availableProductSizes() {
    const availableSizes = this.product.availableSizes?.split(", ");

    return availableSizes;
  }

}
