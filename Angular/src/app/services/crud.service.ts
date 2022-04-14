import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { ConfirmationDialogService } from '../components/confirmation-dialog/confirmation-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { TypedSerializer } from 'ts-typed';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private URL_API = environment.APIEndpoint.valueOf(); 

  private _customers = new BehaviorSubject<Customer[]>([]);
  readonly customers$ = this._customers.asObservable();

  private _products = new BehaviorSubject<Product[]>([]);
  readonly products$ = this._products.asObservable();
  
  private _orders = new BehaviorSubject<Order[]>([]);
  readonly orders$ = this._orders.asObservable();
  

  constructor(   
    private _http: HttpClient,
    private confirmationDialogService: ConfirmationDialogService,
    private toastr: ToastrService
  ) {

  }

  getAll(entity: string): Observable<any> {

    return this._http.get(this.URL_API+entity);
 
  }

  saveGeneric(entity: string, object: any){

    this.save(entity, object).subscribe(data => {

      this.toastr.success('Record registered successfully !', 'Success!');
      this.getAllGeneric(entity, null);

    }, error => {
      this.toastr.error('Erro registering record!', 'Error!');
      console.log(error.message);
    });

  }

  save(entity: string, object: any){

    return this._http.post(this.URL_API+entity, this.toJSON(object), {
      headers: new HttpHeaders().append("Content-Type","application/json")
    })

  }

  updateGeneric(entity: string, object: any, id: any){

    this.update(entity, object, id).subscribe(data => {

      this.toastr.success('Record updated successfully !', 'Success!');
      this.getAllGeneric(entity, null);
      
    }, error => {
      this.toastr.error('Erro updating record!', 'Error!');
      console.log(error.message);
    });

  }
  
  update(entity: string, object: any, id: any){

    return this._http.put(this.URL_API+entity+"/"+id, this.toJSON(object), {
      headers: new HttpHeaders().append("Content-Type","application/json")
    })

  }

  deleteGeneric(entity: string, id: any){

    this.confirmationDialogService.confirm('Sure?', 'Are you sure you want delete it?')
    .then((confirmed) =>{
        
      if(confirmed){
        this.delete(entity,id).subscribe(
          (result) =>{ 
            this.toastr.success('Record deleted successfully!', 'Success!');
            this.getAllGeneric(entity, null);
          },
          error=> {
            this.toastr.error(error.message, 'Erro!');
            console.log(error);
          }
        );
      }
      
    })
    .catch(() => {
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)')
    });

  }

  delete(entity: string, id: any){

    return this._http.delete(this.URL_API+entity+"/"+id,{
      headers: new HttpHeaders().append("Content-Type","application/json")
    })
  }

  async getAllGeneric(entity, spinner){

    if(spinner) spinner.show();

    this.getAll(entity).subscribe(
      (result: any) => {

        this.setBehaviorSubject(entity, result);
        if(spinner) spinner.hide();

      }, error => {
          console.log(error);
          if(spinner) spinner.hide();
    });
    
  }

  private setBehaviorSubject(entity, result){

    switch(entity) { 
      case 'customer': { 
        this._customers.next(Object.assign([], result));
         break; 
      } 
      case 'product': { 
        this._products.next(Object.assign([], result));
         break; 
      } 
      case 'order': { 
        this._orders.next(Object.assign([], result));
         break; 
      } 
      default: { 
         break; 
      } 
   } 
  }

  toJSON(object: any): any {

    return TypedSerializer.serialize(object);

  }
}
