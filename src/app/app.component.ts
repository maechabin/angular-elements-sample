import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent  {
  constructor(
    private injector: Injector,
  ) {
    const AppElement = createCustomElement(HelloComponent, { injector: this.injector });
    customElements.define('app-root', AppElement);
  }
}
