import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  {
     path: '', redirectTo: 'productlist', pathMatch: 'full' 
  },
  {
    path:'productlist',component:ProductListComponent
  },
  {
    path:'profile',component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
