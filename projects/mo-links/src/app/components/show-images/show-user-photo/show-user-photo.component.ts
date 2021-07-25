import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-user-photo',
  templateUrl: './show-user-photo.component.html',
  styleUrls: ['./show-user-photo.component.css'],
})
export class ShowUserPhotoComponent implements OnInit {

  @Input() urlImage: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
