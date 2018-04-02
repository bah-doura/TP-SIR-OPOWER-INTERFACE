import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {CreateHomeComponent} from './create-home/create-home.component';
import {EditHomeComponent} from './edit-home/edit-home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'create-home', component: CreateHomeComponent},
  {path: 'edit-home/:id', component: EditHomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
