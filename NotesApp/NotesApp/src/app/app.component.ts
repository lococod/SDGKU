import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Chores',
      url: '/folder/Chores',
      icon: 'mail'
    },
    {
      title: 'Homework',
      url: '/folder/Homework',
      icon: 'paper-plane'
    },
    {
      title: 'Sams Club',
      url: '/folder/Sams Club',
      icon: 'heart'
    },
    {
      title: 'Costco',
      url: '/folder/Costco',
      icon: 'archive'
    },
    {
      title: 'Target',
      url: '/folder/Target',
      icon: 'trash'
    },
    {
      title: 'Archive',
      url: '/folder/Archive',
      icon: 'warning'
    }
  ];
  public labels = ['Donald', 'Marisa', 'Donovan', 'Dana', 'Dad', 'Mom'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
