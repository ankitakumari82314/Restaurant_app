import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuAddFormComponent } from './menu-add-form/menu-add-form.component';
import { MenuListComponent } from './menu-list/menu-list.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
  },
  {
    path:'admin/menu', 
    component: MenuComponent
  },
  {
    path:'admin/restaurant',
    component: RestaurantComponent
  },
  {
    path:'admin/menu/add',
    component: MenuAddFormComponent
  },
  {
    path:'list',
    component: MenuListComponent
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'',
    component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
