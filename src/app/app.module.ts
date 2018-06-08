import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {
  constructor(
    private injector: Injector,
  ) { }
  ngDoBootstrap() {
    const AppElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-hello', AppElement);
  }
}
