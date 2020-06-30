import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  @Input() data: any;
  @Output() focusOut: EventEmitter<any> = new EventEmitter<any>();
  editMode = false;

  input = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit() {
    this.input.setValue(this.data);
  }

  onFocusOut() {
    if (!this.input.invalid) {
      this.focusOut.emit(this.input.value);
    } else {
      this.input.setValue(this.data);
    }
  }
}
