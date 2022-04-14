import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { CrudService } from '../../services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  movSub: Subscription;
  customers$: Observable<Customer[]>;

  constructor(
      private spinner: NgxSpinnerService,
      private modalService: ModalService,
      private crudService: CrudService
  ) {
    this.customers$ = this.crudService.customers$;
  }

  ngOnInit() {
    this.getCustomers();
  }

  async getCustomers() {
    this.crudService.getAllGeneric('customer', this.spinner);
  }

  newCustomer() {
    this.modalService.modalCustomers.emit(null);
  }

  editCustomer(customer: Customer) {
    this.modalService.modalCustomers.emit(customer);
  }

  deleteCustomer(customer: Customer){
    this.crudService.deleteGeneric("customer", customer.id);
  }
}
