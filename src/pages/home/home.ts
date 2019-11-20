import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserDetailsProvider } from '../../providers/user-details/user-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileUrl: string;

  constructor(public navCtrl: NavController, public userDetailsProvider: UserDetailsProvider) {
  }

  public loadPic() {
    let user = this.userDetailsProvider.GetUser();

    this.profileUrl = user.photoURL;
}

  public logout() {
    firebase.auth().signOut();
  }

}
