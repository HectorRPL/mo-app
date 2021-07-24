import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkInterface } from '../../../interfaces/link-interface';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { GeneralEnum } from '../../../const/general-enum';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css'],
})
export class LinkFormComponent implements OnInit {

  // @ts-ignore
  linkForm: FormGroup;
  @Output() emitLink: EventEmitter<LinkInterface> = new EventEmitter();
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  destroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.listenForm();
  }

  createForm(): void {

    const link: LinkInterface = {
      url: '',
      name: '',
    };

    this.linkForm = this.formBuilder.group({
      'url': new FormControl(link.url, [
        Validators.required,
        Validators.maxLength(132),
      ]),
      'name': new FormControl(link.name, [
        Validators.required,
        Validators.maxLength(132),
      ]),
    });
  }

  listenForm(): void {
    this.linkForm.statusChanges
      .pipe(
        tap(x => this.isValidForm.emit(x === GeneralEnum.VALID)),
        filter((status: string) => status === GeneralEnum.VALID),
        takeUntil(this.destroy$),
      )
      .subscribe(
        value => this.emitLink.emit(this.linkForm.value),
        value => console.log(),
      );
  }

}
