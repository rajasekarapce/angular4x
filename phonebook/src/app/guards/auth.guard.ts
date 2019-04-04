import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      //check for session
      //if yes
       // redirect to dashbord
       //this.router.navigateByurl('dashboard')
      //else
       //redirect if no access
       // this.router.navigate('login');
       //return false
        
    return false;
  }
}
