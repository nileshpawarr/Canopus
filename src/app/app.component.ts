import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactUs } from '../pages/contactUs/contactUs';
import { AboutUs } from '../pages/about-us/about-us';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
  goToContact(){
    this.navCtrl.push(ContactUs);
  }
  goToAbout(){
    this.navCtrl.push(AboutUs);
  }
}
