// jasmine spy example
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { InputDialogComponent } from "./input-dialog.component";
// import { TestBed, ComponentFixture } from "@angular/core/testing";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { By } from "@angular/platform-browser";
// import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

fdescribe("ConfirmDialogComponent", () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      // imports: [ReactiveFormsModule, FormsModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    component.title = "Delete task/tasklist";
    fixture.detectChanges();
  });

  it("should create the confirm dialog component", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should show dialog title", () => {
    const title = "Delete task/tasklist";
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("h4").innerText).toEqual(title);
  });

  it("should listen for delete callback", () => {
    spyOn(component.onDelete, "emit");
    fixture.detectChanges();

    component.onDeleteClick();
    expect(component.onDelete.emit).toHaveBeenCalled();
  });
});
