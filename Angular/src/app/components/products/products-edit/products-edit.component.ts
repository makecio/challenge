import {Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ModalService } from '../../../services/modal.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-products-edit',
  templateUrl: 'products-edit.component.html'
})
export class ProductsEditComponent implements OnInit {

  @ViewChild('modalProducts', {static: false}) public modalProducts: ModalDirective;

  sub: boolean = false;
  _product: Product = new Product();
  titulo: string = 'New Product';

  constructor(
    private modalService: ModalService,
    private crudService: CrudService) {
  }

  ngOnInit() {

    if (this.sub == false) {

      this.sub = true;

      this.modalService.modalProducts.subscribe(
        (p: any) => {

          if (p == null) {
            this.titulo = 'New Product';
            this._product = new Product();
          } else {
            this.titulo = 'Edit Product';
            this._product = p;
          }

          this.limpaModal();

          this.modalProducts.show();

        }, error => {
          console.log(error.message);
        }
      );
    }

  }

  hideModal() {
    this.modalProducts.hide();
  }

  limpaModal() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    if (this.titulo == 'Edit Product') {
      this.updateProduct();
    } else {
      this.saveProduct();
    }

    form.reset();
  }

  saveProduct() {

    this.crudService.saveGeneric('product', this._product);
    this.hideModal();
  }

  updateProduct() {

    this.crudService.updateGeneric('product', this._product,  this._product.id);
    this.hideModal();
  }
}
