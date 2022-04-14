import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { CrudService } from '../../services/crud.service';
import { Order } from '../../model/order';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  movSub: Subscription;
  orders$: Observable<Order[]>;

  constructor(
      private spinner: NgxSpinnerService,
      private modalService: ModalService,
      private crudService: CrudService,
      private toastr: ToastrService
  ) {
    this.orders$ = this.crudService.orders$;
  }

  ngOnInit() {
    this.getOrders();
  }

  async getOrders() {
    this.crudService.getAllGeneric('order', this.spinner);
  }

  newOrder() {
    this.modalService.modalOrders.emit(null);
  }

  editOrder(order: Order) {
    this.modalService.modalOrders.emit(order);
  }

  deleteOrder(order: Order){
    this.crudService.deleteGeneric("order", order.id);
  }

  processOrder(order: Order, status: number){

    if(order.status === 'PENDING'){
      order.dateUpdated = new Date();
      order.status = status;
      
      this.crudService.updateGeneric('order', order, order.id);
    }else{
      this.toastr.warning('Order has already been approved or disapproved !', 'Order!');
    }
   
  }
}
