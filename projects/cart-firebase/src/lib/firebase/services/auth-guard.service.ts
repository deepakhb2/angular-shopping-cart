import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private store: Store,
    private authService: NbAuthService,
    private router: Router
  ) {
    this.loadCurrentUser()
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['/auth/login']);
          }
        }),
      );
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  loadCurrentUser() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          let user = token.getPayload();
          let action = {
            type: 'Add Current User',
            payload: { email: user.email, userID: user.user_id }
          }
          this.store.dispatch(action);
        }
      });
  }
}
