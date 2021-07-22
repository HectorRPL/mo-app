import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

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
