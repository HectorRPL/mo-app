import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../interfaces/user-interface';

@Component({
  selector: 'app-show-text-info',
  templateUrl: './show-text-info.component.html',
  styleUrls: ['./show-text-info.component.css'],
})
export class ShowTextInfoComponent implements OnInit {

  // @ts-ignore
  @Input() user: UserInterface;


  constructor() {
  }

  ngOnInit(): void {
  }

}
