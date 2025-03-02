import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '/menu',
    component: MenuComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
