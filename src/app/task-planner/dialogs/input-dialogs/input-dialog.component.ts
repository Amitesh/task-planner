import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Component to get the user input for adding new tasklist or task
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'input-dialog',

  styleUrls: ['input-dialog.component.scss'],
  templateUrl: './input-dialog.component.html',

})
export class InputDialogComponent {
  @Input() public title: string;
  @Output() public save: EventEmitter<any> = new EventEmitter();

  public input = new FormControl('', [
    Validators.required,
    Validators.pattern(/([\S]+[\s]*)*[\S]+/), // Accept non-whitespace text on both ends
  ]);

  constructor(public activeModal: NgbActiveModal) { }

  set initialValue(value: string) {
    this.input.setValue(value);
  }

  /**
   * Method to create the taskList or task
   */
  public create() {
    this.save.emit(this.input.value);
    this.activeModal.close();
  }
}
