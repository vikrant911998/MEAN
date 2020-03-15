import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html"
})
export class FirstComponent {
  @Input() demo1;
  @Input("title") demo_string;
  @Output() student_name: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("username") userName: ElementRef;

  constructor() {
    console.log(this.demo_string);
  }

  send(): void {
    this.student_name.emit("Rohit Arora");
  }

  sendusername(data) {
    console.log(data);
  }
  clearTextbox() {
    console.log(this.userName.nativeElement.value);
    this.userName.nativeElement.value = "";
  }
}
