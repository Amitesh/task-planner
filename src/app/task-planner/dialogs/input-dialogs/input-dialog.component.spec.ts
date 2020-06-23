// jasmine spy example
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InputDialogComponent } from './input-dialog.component';

describe('InputDialogComponent', () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputDialogComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;
    component.title = 'test title';
    fixture.detectChanges();
  });

  it('should create the Input dialog component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should show dialog title', () => {
    const title = 'test title';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h4').innerText).toEqual(title);
  });

  it('form invalid when empty', () => {
    expect(component.input.valid).toBeFalsy();
  });

  it('name field required validation check', () => {
    const name = component.input;

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();
  });

  it('name field pattern match validition fail check', () => {
    const name = component.input;

    name.setValue('   ');
    expect(name.hasError('pattern')).toBeTruthy();
  });

  it('name field pattern match validition success check', () => {
    const name = component.input;

    name.setValue('My task');
    expect(name.hasError('pattern')).toBeFalsy();
  });

  it('should listen for form changes', () => {
    spyOn(component.submit, 'emit');
    fixture.detectChanges();

    component.input.setValue('My task');
    component.create();
    expect(component.input.valid).toBeTruthy();
    expect(component.submit.emit).toHaveBeenCalled();
  });
});
