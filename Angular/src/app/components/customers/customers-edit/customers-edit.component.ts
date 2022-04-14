import {Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ModalService } from '../../../services/modal.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-customers-edit',
  templateUrl: 'customers-edit.component.html'
})
export class CustomersEditComponent implements OnInit {

  @ViewChild('modalCustomer', {static: false}) public modalCustomers: ModalDirective;

  sub: boolean = false;
  _customer: Customer = new Customer();
  titulo: string = 'New Customer';

  constructor(
    private modalService: ModalService,
    private crudService: CrudService) {
  }

  ngOnInit() {

    if (this.sub == false) {

      this.sub = true;

      this.modalService.modalCustomers.subscribe(
        (p: any) => {

          if (p == null) {
            this.titulo = 'New Customer';
            this._customer = new Customer();
          } else {
            this.titulo = 'Edit Customer';
            this._customer = p;
          }

          this.limpaModal();

          this.modalCustomers.show();

        }, error => {
          console.log(error.message);
        }
      );
    }

  }

  hideModal() {
    this.modalCustomers.hide();
  }

  limpaModal() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    if (this.titulo == 'Edit Customer') {
      this.updateCustomer();
    } else {
      this.saveCustomer();
    }

    form.reset();
  }

  saveCustomer() {

    this.crudService.saveGeneric('customer', this._customer);
    this.hideModal();
  }

  updateCustomer() {

    this.crudService.updateGeneric('customer', this._customer, this._customer.id);
    this.hideModal();
  }
}
