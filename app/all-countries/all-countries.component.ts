import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { AppServiceService } from '../app-service.service';

import {Location}  from '@angular/common';

import {Fields} from './country'


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers:[Location]
})
export class AllCountriesComponent implements OnInit {
  public region : any;
  public currency:any;
  public language:any;
  public allCountries:Fields;   // Type interface
  
  constructor(private Arouter: ActivatedRoute , private _router:Router, private Appservice:AppServiceService,private location:Location) { }
 
  ngOnInit() {

     this.region = this.Arouter.snapshot.paramMap.get('region');

     this.currency = this.Arouter.snapshot.paramMap.get('currency');

     this.language = this.Arouter.snapshot.paramMap.get('language');

  

     if(this.region){
     this.getAllCountries();
    }else if(this.currency){
      this.getAllCountriesByCurrency();
      document.getElementById("title").innerHTML = "All Countries With Currency "+"("+this.currency.toUpperCase()+")" ;
     }else{
       this.getAllCountriesByLanguage()
       document.getElementById("title").innerHTML = "All Countries Which Speak Language"+"("+this.language.toUpperCase()+")";
       alert(this.allCountries[0].languages[0].name);
     }
  }


  
  public getAllCountries : any =() =>{
    this.Appservice.getByRegion(this.region).subscribe(
      data=>{      
        this.allCountries = data;
        console.log(this.allCountries);
      },(err)=>{
        console.log(err.errorMessage);
      }
    )
  }// end of getAllCountries
  
  public getAllCountriesByCurrency:any =()=>{
    this.Appservice.getAllByCurrency(this.currency).subscribe(
      data=>{
        this.allCountries=data;
      },(err)=>{
        console.log(err.errorMessage);
      }
    )
  } // end of get by currency

  public getAllCountriesByLanguage:any = () =>{
    this.Appservice.getAllByLanguage(this.language).subscribe(
      data=>{
        this.allCountries=data;
        console.log(this.allCountries[0])
      },(err)=>{console.log(err.errorMessage);}
    )
  }
  
  public goBack():any{
    this.location.back();
  }


}
