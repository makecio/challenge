import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalProducts = new EventEmitter<any>();
  modalCustomers = new EventEmitter<any>();
  modalOrders = new EventEmitter<any>();

  constructor() {}


}
