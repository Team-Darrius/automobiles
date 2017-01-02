import {Injectable} from "@angular/core";
import { AngularFireModule, FIREBASE_PROVIDERS, AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';
import { CarModel } from './../app/models/car';

export const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}

@Injectable()
export class AF {

    public cars: FirebaseListObservable<any>;
    public newCar: CarModel;
    public users: FirebaseListObservable<any>;
    public displayName: string;
    public email: string;

    constructor(public af: AngularFire) {
        this.cars = this.af.database.list('cars');
    }

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */

loginWithEmail(formData) {
   return this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
    })
}

loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
}

  /**
   * Logs out the current user
   */
logout() {
    return this.af.auth.logout();
    }

addUserInfo(){
    //We saved their auth info now save the rest to the db.
    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }

/**
   * Saves a car to the Firebase Realtime Database
   * @param text
   */
  sendCarToFB(newCar, user) {
      console.log(newCar);
    let car = {
        brand: newCar.brand,
        model: newCar.model,
        year: newCar.year,
        location: newCar.location,
        transmission: newCar.transmission,
        color: newCar.color,
        power: newCar.power,
        engineType: newCar.engineType,
        picture: newCar.picture,
        price: newCar.price,
        displayName: user.auth.displayName,
        email: user.auth.email,
        timestamp: Date.now()
    };
    console.log("Sending Car");
    this.cars.push(car);
  }
}