import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let fixture: ComponentFixture<HelloComponent>;
  let component: HelloComponent;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        HelloComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    component.name = 'Angular';
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    console.log(de);
    expect(de.nativeElement.textContent).toContain('Hello Angular!');
  });

  it('should make handleClick fire', () => {
    const spy: jasmine.Spy = spyOn(component, 'handleClick');
    const debugElement = fixture.debugElement.query(By.css('button'));
    debugElement.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should make hadleclick work correctly', () => {
    const expected = 'Angular';
    component.value = expected;
    const spy: jasmine.Spy = spyOn(component.clickButton, 'emit');
    component.handleClick();
    expect(spy).toHaveBeenCalledWith(expected);
    expect(component.value).toBe('');
  });
});
