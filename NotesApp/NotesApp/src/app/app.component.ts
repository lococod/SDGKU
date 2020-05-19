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
  public selectedLabel = 0;
  public appPages = [
    {
      title: 'Chores',
      url: '/folder/Chores',
      icon: 'create'
    },
    {
      title: 'Homework',
      url: '/folder/Homework',
      icon: 'newspaper'
    },
    {
      title: 'Sams Club',
      url: '/folder/Sams Club',
      icon: 'basket'
    },
    {
      title: 'Costco',
      url: '/folder/Costco',
      icon: 'basket'
    },
    {
      title: 'Target',
      url: '/folder/Target',
      icon: 'basket'
    },
    {
      title: 'Archive',
      url: '/folder/Archive',
      icon: 'checkmark-done'
    }
  ];
  // public labels = ['Donald', 'Marisa', 'Donovan', 'Dana', 'Dad', 'Mom'];
  public labels = [
  {
    title: 'Donald',
    url: '/label/Donald',
    icon: 'bookmark'
  },
  {
    title: 'Marisa',
    url: '/label/Marisa',
    icon: 'bookmark'
  },
  {
    title: 'Donovan',
    url: '/label/Donovan',
    icon: 'bookmark'
  },
  {
    title: 'Dana',
    url: '/label/Dana',
    icon: 'bookmark'
  },
  {
    title: 'Dad',
    url: '/label/Dad',
    icon: 'bookmark'
  },
  {
    title: 'Mom',
    url: '/label/Mom',
    icon: 'bookmark'
  }]

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
