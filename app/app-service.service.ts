import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private _http:HttpClient) {
    console.log("app service has been called")
   }

   public url:string = `https://restcountries.eu/rest/v2`;


   
   public getAllCountries:any= () =>{

   return this._http.get(this.url+`/all`);

   } //end of get all countries


   public getByRegion:any = (region)=>{


    return this._http.get(this.url+'/region/'+region+`?fields=name;capital;currencies;population;languages;flag`); // filtered response
   }//end of get By region


   public getSingleCountry:any = (country)=>{
     return this._http.get(this.url+'/name/'+country+`?fullText=true`);
   } // end of get single country

   public getAllByCurrency:any = (currency) =>{

    return this._http.get(this.url+'/currency/'+currency+`?fields=name;capital;currencies;population;languages;flag`); // filtered response
   } // end of get by currency

   public getAllByLanguage:any = (language) =>{
   
    

    return this._http.get(this.url+'/lang/'+language+`?fields=name;capital;currencies;population;languages;flag`); // filtered response

   } // end of get all by language



}
