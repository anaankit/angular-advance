import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';


import {RouterModule,Routes} from '@angular/router';
import { AppServiceService } from './app-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ReadMeComponent } from './read-me/read-me.component';


@NgModule({
  declarations: [
    AppComponent,
    AllRegionsComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    ReadMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:AllRegionsComponent},
      {path:'all',component:AllCountriesComponent},
      {path:'single/:country',component:SingleCountryComponent},
      {path:'',component:AllRegionsComponent},
      {path:'all/:region',component:AllCountriesComponent},
      {path:'currency/:currency',component:AllCountriesComponent},
      {path:'language/:language',component:AllCountriesComponent},
      {path:'readMe',component:ReadMeComponent}
    ])
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
