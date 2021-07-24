import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  isInvalid: boolean = true;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  getUser(event: any) {
    console.log('getUser: ', event);
  }

  getStatusForm(isValid: boolean) {
    this.isInvalid = !isValid;
  }

  getApiResponse(id: string) {
    console.log(id);
    this.router.navigate([`/auth/login`]).then();
  }

}
