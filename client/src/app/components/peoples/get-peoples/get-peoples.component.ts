import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../../../services/peoples.service';
import { Peoples } from "../models/peoples";

@Component({
  selector: 'app-get-peoples',
  templateUrl: './get-peoples.component.html',
  styleUrls: ['./get-peoples.component.css']
})
export class GetPeoplesComponent implements OnInit {
  public peoplesData: Peoples[];
  listPeoples:Peoples[]=[];
  constructor(private peopleService: PeoplesService) {

  }

  ngOnInit(){
    this.peopleService.getPeoples().subscribe(data => {
      this.peoplesData = data;
    });
  }

  deletePeople(id){
    const response = confirm("Are you sure to delete?");
    if (response) {
      this.peopleService.deletePeople(id).subscribe(data => {
        var deleted = data;
        console.log(deleted);
      });
    }
  }

}
