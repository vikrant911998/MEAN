import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url: string =
    "https://crud-2019-269be.firebaseio.com/authentic_users.json";

  constructor(private httpClient: HttpClient) {}

  register(txtusername: string, txtemail: string, txtpassword: string): void {
    const userObject = {
      username: txtusername,
      email: txtemail,
      password: txtpassword
    };

    this.httpClient
      .post(this.url, userObject)
      .subscribe(data => console.log(data));
  }
}
