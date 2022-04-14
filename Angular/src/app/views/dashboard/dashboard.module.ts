import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Carousel Component
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt-PT';
import { TableModule } from 'primeng/table';
import { NgxSpinnerModule } from 'ngx-spinner';

registerLocaleData(localePT);

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabsModule,
    TableModule,
    CollapseModule,
    CommonModule,
    NgbModalModule,
    NgbModule,
    NgxSpinnerModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
