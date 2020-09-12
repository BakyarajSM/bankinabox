import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NumericTextBoxModule } from '@syncfusion/ej2-ng-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-ng-buttons';
import { AccumulationChartModule, ChartModule } from '@syncfusion/ej2-ng-charts';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './home/input/input.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { appRoutingModule } from './app-routing';
import { DataService } from './data-service';
import { CustomerKycComponent } from './kyc/customer-kyc/customer-kyc.component';
import { KycsubmitComponent } from './kyc/kycsubmit/kycsubmit.component';
//import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    DashboardComponent,
    CustomerKycComponent,
    KycsubmitComponent
  ],
  imports: [
    BrowserModule,
    NumericTextBoxModule,
    RadioButtonModule,
    AccumulationChartModule,
    ChartModule,
    appRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
