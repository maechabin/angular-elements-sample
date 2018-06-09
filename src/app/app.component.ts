import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  value: string;

  @Input() name: string;
  @Output() clickButton: EventEmitter<string> = new EventEmitter();
  @HostBinding('style.background-color') color = 'white';
  @HostListener('mouseover') onclick() {
    this.color = '#eee';
  }
  @HostListener('mouseout') onmouseout() {
    this.color = 'white';
  }

  handleClick() {
    this.clickButton.emit(this.value);
    this.value = '';
  }
}
