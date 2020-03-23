import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "./../user.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  faCoffee = faCoffee;

  constructor(private user_service: UserService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwordData: new FormGroup({
        password: new FormControl(null, [Validators.required]),
        cpassword: new FormControl(null, Validators.required)
      })
    });
  }

  ngOnDestroy() {}

  register_user() {
    console.log(this.registerForm);
  }

  resetForm() {
    this.registerForm.reset();
    console.log(this.registerForm);
  }
}
