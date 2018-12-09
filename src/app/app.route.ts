import {ClientComponent} from './client/client.component';
import {CallComponent} from './call/call.component';
import {VisitComponent} from './visit/visit.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./ui/layout/layout.component";

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent
  // },
  {
    path: 'clients',
    component: ClientComponent
  },
  {
    path: 'calls',
    component: CallComponent
  },
  {
    path: 'visits',
    component: VisitComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
