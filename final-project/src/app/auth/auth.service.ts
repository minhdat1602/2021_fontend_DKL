import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private fApp: FirebaseApp,
    public afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData))
        // JSON.parse(localStorage.getItem('user')!)
      } else {
        localStorage.setItem('user', '');
        // JSON.parse(localStorage.getItem('user')!)  
      }
    })
  }

  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['..']);
        window.alert('You are logged in!')
      })
      .catch((err) => {
        window.alert(err.message)
      })
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return (JSON.stringify(user) !== '{}') ? true : false;
  }

  async logout() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['..']);
        window.alert('You are logged out!')
      })
  }

  async register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate([''])
        window.alert('You are logged in!')
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
