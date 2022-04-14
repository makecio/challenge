import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { CrudService } from '../../services/crud.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  movSub: Subscription;
  products$: Observable<Product[]>;

  constructor(
      private spinner: NgxSpinnerService,
      private modalService: ModalService,
      private crudService: CrudService,
  ) {
    this.products$ = this.crudService.products$;
  }

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    this.crudService.getAllGeneric('product', this.spinner);
  }

  newProduct() {
    this.modalService.modalProducts.emit(null);
  }

  editProduct(product: Product) {
    this.modalService.modalProducts.emit(product);
  }

  deleteProduct(product: Product){
    this.crudService.deleteGeneric("product",product.id);
  }
}
