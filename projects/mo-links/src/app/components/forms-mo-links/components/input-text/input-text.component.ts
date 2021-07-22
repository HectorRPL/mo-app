import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  // @ts-ignore
  @Input() parentForm: FormGroup;
  @Input() formCtrlName: string;
  @Input() placeholder: string;

  constructor() {
    this.formCtrlName = '';
    this.placeholder = '';
  }

  ngOnInit(): void {
  }

}
