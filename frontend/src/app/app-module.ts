import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './landing/home.component/home.component';
import { AboutComponent } from './landing/about.component/about.component';
import { OverviewComponent } from './landing/overview.component/overview.component';
import { FaqnggComponent } from './landing/faqngg.component/faqngg.component';
import { TermsConditionsComponent } from './landing/terms-conditions.component/terms-conditions.component';
import { ServicesComponent } from './landing/services.component/services.component';
import { SupportnggComponent } from './landing/supportngg.component/supportngg.component';
import { OriginnggComponent } from './landing/originngg.component/originngg.component';
import { ObjectiveComponent } from './landing/objective.component/objective.component';
import { LatestannouncementUpdates } from './landing/latestannouncement-updates/latestannouncement-updates';
import { FranchiseComponent } from './landing/franchise.component/franchise.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    AboutComponent,
    OverviewComponent,
    FaqnggComponent,
    TermsConditionsComponent,
    ServicesComponent,
    SupportnggComponent,
    OriginnggComponent,
    ObjectiveComponent,
    FranchiseComponent,
    LatestannouncementUpdates,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
