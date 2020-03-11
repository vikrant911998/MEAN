import { Component } from "@angular/core";

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

  getValue(data: any): void {
    console.log("Hello", data.target.value);
    // alert("Helo");
  }

  toggle(): void {
    this.hiddenAttribute = !this.hiddenAttribute;
  }
}
