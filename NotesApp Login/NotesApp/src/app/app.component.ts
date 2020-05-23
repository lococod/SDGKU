import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

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
      url: '/folder/chores',
      icon: 'create'
    },
    {
      title: 'Homework',
      url: '/folder/homework',
      icon: 'newspaper'
    },
    {
      title: 'Sams Club',
      url: '/folder/sams club',
      icon: 'basket'
    },
    {
      title: 'Costco',
      url: '/folder/costco',
      icon: 'basket'
    },
    {
      title: 'Target',
      url: '/folder/target',
      icon: 'basket'
    },
    {
      title: 'Archive',
      url: '/folder/archive',
      icon: 'checkmark-done'
    }
  ];
  // public labels = ['Donald', 'Marisa', 'Donovan', 'Dana', 'Dad', 'Mom'];
  public labels = [
  {
    title: 'Donald',
    url: '/label/donald',
    icon: 'bookmark'
  },
  {
    title: 'Marisa',
    url: '/label/marisa',
    icon: 'bookmark'
  },
  {
    title: 'Donovan',
    url: '/label/donovan',
    icon: 'bookmark'
  },
  {
    title: 'Dana',
    url: '/label/dana',
    icon: 'bookmark'
  },
  {
    title: 'Dad',
    url: '/label/dad',
    icon: 'bookmark'
  },
  {
    title: 'Mom',
    url: '/label/mom',
    icon: 'bookmark'
  },
  {
    title: 'All',
    url: '/label/all',
    icon: 'bookmark'
  }]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state=> {
        console.log('Auth changed: ', state);
        if (state) {
          this.router.navigate(['label','all']);
        }
        else {
          this.router.navigate(['login']);
        }
      });
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  login(){
    this.authService.login();

  }

  logout(){
    this.authService.logout();
  }
}
