import { FirstComponent } from "./first/first.component";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "first-app";
  hiddenAttribute: boolean = false;
  arr: string[] = ["Australia", "Pakistan", "India"];
  num: number = 10;
  today: Date = new Date();
  student_name: string;

  @ViewChild(FirstComponent) childComponent: FirstComponent;

  getValue(data: any): void {
    console.log("Hello", data.target.value);
    // alert("Helo");
  }

  toggle(): void {
    this.hiddenAttribute = !this.hiddenAttribute;
  }

  receiveStudentName(data: string) {
    console.log(data);
    this.student_name = data;
  }

  getusername() {
    console.log(this.childComponent.userName.nativeElement.value);
  }
}
