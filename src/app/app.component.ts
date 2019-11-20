import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserDetailsProvider } from '../providers/user-details/user-details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('rootNav') rootNav;
  rootPage:any;
  firstRun: boolean = true;

  constructor(private platform: Platform, private statusBar: StatusBar,
              private splashScreen: SplashScreen, public userDetailsProvider: UserDetailsProvider) {

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCEOva55n5zwOyu5Gk7Z00VL3wUn3CO9Zk",
      authDomain: "fir-ionic-auth-1d357.firebaseapp.com",
      databaseURL: "https://fir-ionic-auth-1d357.firebaseio.com",
      projectId: "fir-ionic-auth-1d357",
      storageBucket: "fir-ionic-auth-1d357.appspot.com",
      messagingSenderId: "201403058444",
      appId: "1:201403058444:web:8ce9caab5f437b85a96129"
        };
    firebase.initializeApp(config);
  }

  ngAfterViewInit() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated.
        this.setRootPage(HomePage);
        this.userDetailsProvider.SetUser(user);
      } else {
        // User is not authenticated.
        this.setRootPage(LoginPage);
        this.userDetailsProvider.SetUser(null);
      }
    });
  }

  setRootPage(page) {

    if (this.firstRun) {

      // if its the first run we also have to hide the splash screen
      this.rootNav.setRoot(page)
        .then(() => this.platform.ready())
        .then(() => {

          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          this.statusBar.styleDefault();
          this.splashScreen.hide();
          this.firstRun = false;
        });
    } else {
      this.rootNav.setRoot(page);
    }
  }
}

