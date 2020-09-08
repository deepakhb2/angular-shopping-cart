import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, share, take } from 'rxjs/operators';
import { NbAuthService, NbAuthToken } from '@nebular/auth';

@Component({
  selector: 'app-auth-state',
  templateUrl: './auth-state.component.html',
  styleUrls: ['./auth-state.component.scss']
})
export class AuthStateComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: NbAuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['/auth/logout']);
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

  resetPassword() {
    this.router.navigate(['/auth/reset-password']);
  }

}
