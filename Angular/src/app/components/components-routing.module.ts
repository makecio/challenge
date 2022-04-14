import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'components'
    },
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        },
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: {
          title: 'Customers'
        },
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
