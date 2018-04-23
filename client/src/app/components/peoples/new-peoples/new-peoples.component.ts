import { Component, OnInit } from '@angular/core';
import { Peoples } from '../models/peoples';
import { PeoplesService } from '../../../services/peoples.service';

@Component({
  selector: 'app-new-peoples',
  templateUrl: './new-peoples.component.html',
  styleUrls: ['./new-peoples.component.css']
})
export class NewPeoplesComponent implements OnInit {

  modelPeoples = new Peoples();
  listPeoples:Peoples[]=[];
  newPeople:Peoples[]= [];

  constructor(private peopleService: PeoplesService) { }

  ngOnInit() {
  }
  onSubmit(){
    const newPeople:Peoples = {
      name : this.modelPeoples.name,
      lastName : this.modelPeoples.lastName,
      age : this.modelPeoples.age,
      weight : this.modelPeoples.weight
    };
    this.peopleService.addPeople(newPeople).subscribe(data => function () {
        this.listPeoples = data;
        console.log(this.listPeoples);
    });

    this.modelPeoples.name = '';
    this.modelPeoples.lastName = '';
    this.modelPeoples.age = null;
    this.modelPeoples.weight = null;
  }

}
