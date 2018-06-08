import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @Input() name: string;
  @Output() clickButton: EventEmitter<String> = new EventEmitter();
  value: string;

  handleClick() {
    this.clickButton.emit(this.value);
    this.value = '';
  }
}
