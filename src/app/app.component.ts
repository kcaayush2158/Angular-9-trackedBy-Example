import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tracketByInAngular';
  students: any[];
  constructor(){
    this.students=[
      {
        studentid:1,
        name:"aayush",
        age:19,
        gender:'Male',
        course:"MCA"
      },
      {
        studentid:2,
        name:"Rajes",
        age:24,
        gender:'Male',
        course:"BCA"
      },
      {
        studentid:3,
        name:"Rakesh",
        age:16,
        gender:'Male',
        course:"BCA"
      }
    ];
  }

  getmorestudents():void{
    this.students=[
      {
        studentid:1,
        name:"aayush",
        age:19,
        gender:'Male',
        course:"MCA"
      },
      {
        studentid:2,
        name:"Rajes",
        age:24,
        gender:'Male',
        course:"BCA"
      },
      {
        studentid:3,
        name:"Rakesh",
        age:16,
        gender:'Male',
        course:"BCA"
      },
      {
        studentid:4,
        name:"Rahul",
        age:32,
        gender:'Male',
        course:"BHM"
      },
    ];
  }


  trackBystudentId(index: number, student: any): string {
    return student.studentid;
  }
}
