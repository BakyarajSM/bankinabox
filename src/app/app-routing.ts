
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerKycComponent } from './kyc/customer-kyc/customer-kyc.component';
import { KycsubmitComponent } from './kyc/kycsubmit/kycsubmit.component';
import { ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kyc', component: CustomerKycComponent },
  { path: 'kycsubmit', component: KycsubmitComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];



export const appRoutingModule = RouterModule.forRoot(routes);