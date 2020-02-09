import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';

// register all routes (paths)
const routes: Routes = [
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'converter', component: TempCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
