import { Component, Inject } from '@angular/core';
import { AF } from '../../providers/af';
import { Router } from '@angular/router';
import { FirebaseApp } from 'angularfire2';


/**
   * Sing Up the user
   * 
   */

@Component({
  templateUrl: './signup.component.html'
})

export class SignupComponent {
  public error: any;

  constructor( private afService:AF, private router: Router) {  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.afService.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/login']);
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

/**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  public error: any;

  constructor(public afService: AF, private router: Router) { }

  // onSubmit(formData) {
  //   if(formData.valid) {
  //     console.log(formData.value);
  //     this.af.auth.login({
  //       email: formData.value.email,
  //       password: formData.value.password
  //     }).then(
  //       (success) => {
  //       console.log(success);
  //       this.router.navigate(['/home']);
  //     }).catch(
  //       (err) => {
  //       console.log(err);
  //       this.router.navigate(['/home']);
  //     })
  //   } else {
  //     this.error = 'Your form is invalid';
  //   }
  // }

  onSubmit(formData) {
      this.afService.loginWithEmail(formData).then((data) => {
      this.router.navigate(['/home']);
    })
  }
}


// Reset Component
@Component({
  templateUrl: 'app/auth/resetpassword.component.html'
})

export class ResetpassComponent {
  public auth: any;
  public message: any;
  
  
  constructor(private afService: AF, @Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth()
    console.log(this.auth);
  }

  onSubmit(formData) {
     if(formData.valid) {
       console.log('Submission worked');
       this.auth.sendPasswordResetEmail(formData.value.email)
         .then( (response) => {
           console.log('Sent successfully');
           this.message = 'Check your email for reset link';
         })
         .catch( (error) => {
           this.message = error;
           console.log(error);
         })
     }
  }
}