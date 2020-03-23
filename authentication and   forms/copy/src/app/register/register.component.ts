import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  txtusername: string;
  txtemail: string;
  txtpassword: string;
  txtcpassword: string;
  isPasswordMatch: boolean = false;

  constructor(private user_service: UserService) {}

  ngOnInit(): void {}

  register_user() {
    if (this.txtpassword === this.txtcpassword) {
      this.user_service.register(
        this.txtusername,
        this.txtemail,
        this.txtpassword
      );
    } else {
      this.isPasswordMatch = true;
      this.txtpassword = "";
      this.txtcpassword = "";
    }
  }
}
