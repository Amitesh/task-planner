import {
  ChangeDetectionStrategy,
  Component,
Input,
Output,
EventEmitter
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-dialog',
  templateUrl: "confirm-dialog.component.html",
  styleUrls: ["confirm-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  @Input() public title: string;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {
  }

  onDeleteClick(){
    this.onDelete.emit(true);
    this.activeModal.close();
  }
}
