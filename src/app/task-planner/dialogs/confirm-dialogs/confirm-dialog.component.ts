import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

/**
 * Component to get the user confirmation before deteling a tasklist or task.
 */
@Component({
  selector: "confirm-dialog",
  templateUrl: "confirm-dialog.component.html",
  styleUrls: ["confirm-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  @Input() public title: string;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  /**
   * Method to handle the click for `Yes` action
   */
  onDeleteClick() {
    this.onDelete.emit(true);
    this.activeModal.close();
  }
}
