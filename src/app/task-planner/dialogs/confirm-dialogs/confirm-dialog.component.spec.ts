// jasmine spy example
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    component.title = 'Delete task/tasklist';
    fixture.detectChanges();
  });

  it('should create the confirm dialog component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should show dialog title', () => {
    const title = 'Delete task/tasklist';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h4').innerText).toEqual(title);
  });

  it('should listen for delete callback', () => {
    spyOn(component.isDelete, 'emit');
    fixture.detectChanges();

    component.deleteClick();
    expect(component.isDelete.emit).toHaveBeenCalled();
  });
});
