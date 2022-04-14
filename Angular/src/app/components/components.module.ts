// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { TableModule } from 'primeng/table';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {AngularBasicModalModule} from 'angular-basic-modal';
import {ProductsComponent} from './products/products.component';
import {ProductsEditComponent} from './products/products-edit/products-edit.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersEditComponent } from './orders/orders-edit/orders-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    TableModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    AngularFireAuthModule,
    NgxDropzoneModule,
    AngularBasicModalModule
  ],
  declarations: [
    ProductsComponent,
    ProductsEditComponent,
    CustomersComponent,
    CustomersEditComponent,
    OrdersComponent,
    OrdersEditComponent
  ]
})
export class ComponentsModule { }
