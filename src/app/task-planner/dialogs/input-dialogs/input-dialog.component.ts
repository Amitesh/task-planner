import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

/**
 * Component to get the user input for adding new tasklist or task
 */
@Component({
  selector: "input-dialog",
  templateUrl: "./input-dialog.component.html",
  styleUrls: ["input-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDialogComponent {
  @Input() public title: string;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  input = new FormControl("", [
    Validators.required,
    Validators.pattern(/([\S]+[\s]*)*[\S]+/), // Accept non-whitespace text on both ends
  ]);

  constructor(public activeModal: NgbActiveModal) {}

  set initialValue(value: string) {
    this.input.setValue(value);
  }

  /**
   * Method to create the taskList or task
   */
  onCreate() {
    this.onSubmit.emit(this.input.value);
    this.activeModal.close();
  }

  // // test case

  // isFilterValid() {
  //   return true;
  // }
}
