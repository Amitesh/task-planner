import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component to get the user confirmation before deteling a tasklist or task.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'confirm-dialog',
  styleUrls: ['confirm-dialog.component.scss'],
  templateUrl: 'confirm-dialog.component.html',

})
export class ConfirmDialogComponent {
  @Input() public title: string;
  @Output() public isDelete: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  /**
   * Method to handle the click for `Yes` action
   */
  public deleteClick() {
    this.isDelete.emit(true);
    this.activeModal.close();
  }
}
