import {Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ModalService } from '../../../services/modal.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../../../services/crud.service';
import { Order } from '../../../model/order';
import { Product } from '../../../model/product';
import { Observable } from 'rxjs';
import { Customer } from '../../../model/customer';
import { OrderItem } from '../../../model/order-item';

@Component({
  selector: 'app-orders-edit',
  templateUrl: 'orders-edit.component.html'
})
export class OrdersEditComponent implements OnInit {

  @ViewChild('modalOrder', {static: false}) public modalOrders: ModalDirective;

  sub: boolean = false;
  _order: Order = new Order();
  titulo: string = 'New Order';

  products$: Observable<Product[]>;
  customers$: Observable<Customer[]>;
  
  product: Product;

  constructor(
    private modalService: ModalService,
    private crudService: CrudService,
    private toastr: ToastrService) {
      this.customers$ = this.crudService.customers$;
      this.products$ = this.crudService.products$;
  }

  async getCustomers() {
    this.crudService.getAllGeneric('customer', null);
  }

  async getProducts() {
    this.crudService.getAllGeneric('product', null);
  }

  ngOnInit() {

    this.getProducts();
    this.getCustomers();

    if (this.sub == false) {

      this.sub = true;

      this.modalService.modalOrders.subscribe(
        (p: any) => {

          if (p == null) {
            this.titulo = 'New Order';
            this._order = new Order();
          } else {
            this.titulo = 'Edit Order';
            this._order = p;
          }

          this.limpaModal();

          this.modalOrders.show();

        }, error => {
          console.log(error.message);
        }
      );
    }

  }

  hideModal() {
    this.modalOrders.hide();
  }

  limpaModal() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    if (this.titulo == 'Edit Order') {
      this.updateOrder();
    } else {
      this.saveOrder();
    }

    form.reset();
  }

  saveOrder() {

    this.calculateTotal();
    
    this._order.dateCreated = new Date();
    this._order.status = 0;
    
    this.crudService.saveGeneric('order', this._order);
    this.hideModal();
    
  }

  updateOrder() {

    this._order.dateUpdated = new Date();
    this.crudService.updateGeneric('order', this._order, this._order.id);
    this.hideModal();
  }
  
  addItem(){

    if(!this.product){
      this.toastr.error('Select at least one product!', 'Product!');
      return 
    }

    if(!this._order.customer){
      this.toastr.error('Select at least one customer!', 'Customer!');
      return
    }
    
    let ordemItem: OrderItem = new OrderItem();
    ordemItem.product = this.product;
    ordemItem.priceItem = this.product.price;

    this._order.itens.push(ordemItem);
    this.calculateTotal();
  }
  
  deleteItem(orderItem: OrderItem){
    this._order.itens = this._order.itens.filter(item => item != orderItem);
    this.calculateTotal();
  }
  
  calculateTotal(){

    this._order.total = 0;
    this._order.itens.forEach(element => {
      this._order.total += element.priceItem;
    });
  }

}
