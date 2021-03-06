import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css'],
  providers:[AppServiceService]
})
export class AllRegionsComponent implements OnInit {

  constructor(private AppService:AppServiceService) { }

  ngOnInit() {

    
  }

public allRegions = ["Africa","Americas","Asia","Europe","Oceania"]
public abc={
  regionNames:["Africa","Americas","Asia","Europe","Oceania"],
  regionUrls:["data:image/jpeg;base64,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"]
}
public regionName:any;
public allCountriesInRegion:any = [];


  public getAllCountries = () =>{

    this.AppService.getAllCountries().subscribe(
      data=>{
        console.log(data);
      }, (err)=>{
        console.log(err.errorMessage);
      }
    )

  } // end of get All countries

  public getByRegion:any = () =>{
    this.AppService.getByRegion(this.regionName).subscribe(
      data=>{
        this.allCountriesInRegion.push(data);
        console.log(data);
      },(err)=>{
        console.log(err.errorMessage);
      }
    ) // end of call
  } // end of get by region


  

}
