import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  loginError: boolean = false;

  @Output() userNameEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onLogin(): void{
    if(this.userName == "maaike" && this.password == "blabla") {
      this.userNameEvent.emit(this.userName);
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }


}
