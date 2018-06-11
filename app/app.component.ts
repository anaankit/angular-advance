import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public Service:AppServiceService){}
  public allCurrencies:any[] = [];

  ngOnInit() {

    this.getAllCurrencies();
    // alert(this.allCurrencies.toString());
    
  }

  
  public getAllCurrencies:any=()=>{
    this.Service.getAllCountries().subscribe(
      data=>{
        for(let country of data){

          for(let each of country.currencies){
                this.allCurrencies.push(each.code);
          } 
        }
      }
    )
  }

}

//   class NewClass{

//   constructor(public Service:AppServiceService){}
//   public allCurrencies:any[] = [];




  

//   public getAllCurrencies:any=()=>{
//     this.Service.getAllCountries().subscribe(
//       data=>{
//         for(let country of data){

//           for(let each of country.currencies){
//                 this.allCurrencies.push(each.code);
//           } 
//         }
//       }
//     )
//   }
// }
