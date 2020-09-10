import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, share, take } from 'rxjs/operators';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { selectShoppingCurrentUser } from '../../state/selectors'

@Component({
  selector: 'app-auth-state',
  templateUrl: './auth-state.component.html',
  styleUrls: ['./auth-state.component.scss']
})
export class AuthStateComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  user$: Observable<any>;

  constructor(
    private store: Store<{ items: number }>,
    private authService: NbAuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.user$ = this.store.select(selectShoppingCurrentUser)
  }

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
