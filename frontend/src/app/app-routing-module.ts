import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home.component/home.component';
import { OverviewComponent } from './landing/overview.component/overview.component';
import { AboutComponent } from './landing/about.component/about.component';
import { FaqnggComponent } from './landing/faqngg.component/faqngg.component';

const routes: Routes = [
  {
    path: 'fetch',
    component: HomeComponent,
    children: [
     
      { path: 'about', component: AboutComponent },
     
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
