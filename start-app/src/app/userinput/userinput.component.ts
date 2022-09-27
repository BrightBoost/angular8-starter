import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {
  firstName: string = "";
  residesIn: string = "";
  constructor() { }

  ngOnInit() {
  }

  onFormSubmitted(e) : void{
    console.log("submit received");
    console.dir(e);
  }

}
