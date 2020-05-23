import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'detail',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  { 
    path: "notes/:id",canActivate: [AuthGuardService], loadChildren: "./detail/detail.module#DetailPageModule" 
  },
  {
    path: 'label/:id',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./label/label.module').then( m => m.LabelPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
