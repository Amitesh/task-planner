// jasmine spy example
import { async } from '@angular/core/testing';

import { InputDialogComponent } from "./input-dialog.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
describe("InputDialogComponent", () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDialogComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [NgbActiveModal]
    });

    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
it('should create the app', async(() => {
    const fixture = TestBed.createComponent(InputDialogComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("verify if input is valid", () => {
    spyOn(component, "isFilterValid").and.returnValue(true);
    expect(component.isFilterValid).toBeTruthy();
    // expect(component.isFilterValid).toBeFalsy(); // false
    // 
    // component.onCreate();
  });
 
});
