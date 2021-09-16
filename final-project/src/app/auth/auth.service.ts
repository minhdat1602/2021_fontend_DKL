import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    // private fApp: FirebaseApp,
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

  login(email: string, password: string) {
    setTimeout(() => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((res) => {
          this.router.navigate(['..']);
        })
        .catch((err) => {
          window.alert(err.message)
        })
    }, 3000)

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
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider())
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('Logged!')
        this.router.navigate(['..']);
      })
      .catch((error) => {
        console.log(error)
        window.alert('Bạn đăng nhập thất bại')
      })
  }
}
