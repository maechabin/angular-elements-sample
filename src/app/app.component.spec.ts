import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let definedSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FakeTestModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    definedSpy = spyOn(window.customElements, 'define');
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call customElements.difine', () => {
    expect(definedSpy).toHaveBeenCalledWith('app-hello', jasmine.anything());
  });
});

@NgModule({
  imports: [FormsModule],
  declarations: [HelloComponent],
  entryComponents: [HelloComponent]
})
export class FakeTestModule { }
