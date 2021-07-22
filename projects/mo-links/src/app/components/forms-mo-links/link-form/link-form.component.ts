import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkInterface } from '../../../interfaces/link-interface';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent implements OnInit {

  // @ts-ignore
  linkForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const user: LinkInterface = {
      url: '',
      name: ''
    };
    this.createForm(user);
  }

  createForm(user: LinkInterface): void {
    {
      this.linkForm = this.formBuilder.group({
        'url': new FormControl(user.url, [
          Validators.required,
          Validators.maxLength(132),
          Validators.email
        ]),
        'name': new FormControl(user.name, [
          Validators.required,
          Validators.maxLength(132)
        ]),
      });
    }

  }
}
