import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { AppServiceService } from '../app-service.service';
import {Location}  from '@angular/common';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers:[Location]
})
export class SingleCountryComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private router:Router, private AppService:AppServiceService,private location:Location) { }
 public countryName:any;
 public allDetails:any;
 public translations:any;

  ngOnInit() {
    this.countryName = this._route.snapshot.paramMap.get('country');
   
    this.getAllDetails();
    
  }


  public getAllDetails :any = () =>{

    this.AppService.getSingleCountry(this.countryName).subscribe(
      data=>{
        this.allDetails = data;
        this.translations = JSON.stringify(this.allDetails[0].translations)
        // alert(this.translations);
      },(err)=>{
        console.log(err.errorMessage);
      }
    )  // end of subscribe


  } // end of get All details


  public goBack():any{
    this.location.back();
  }

}
