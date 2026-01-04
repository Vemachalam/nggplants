import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home.component/home.component';
import { OverviewComponent } from './landing/overview.component/overview.component';
import { AboutComponent } from './landing/about.component/about.component';
import { FaqnggComponent } from './landing/faqngg.component/faqngg.component';
import { TermsConditionsComponent } from './landing/terms-conditions.component/terms-conditions.component';
import { ManagementComponent } from './landing/management.component/management.component';
import { PlantCatagoryComponent } from './features/plant-catagory.component/plant-catagory.component';
import { DroplistComponent } from './landing/droplist.component/droplist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
     
      { path: 'about', component: AboutComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'Terms-Conditions', component: TermsConditionsComponent},
      { path: 'management', component: ManagementComponent},
      { path: '', component: PlantCatagoryComponent},
      { path: 'auth/register', component: DroplistComponent}


     
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
