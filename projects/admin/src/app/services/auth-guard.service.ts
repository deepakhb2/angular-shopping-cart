import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: NbAuthService,
    private router: Router
  ) {}

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
}