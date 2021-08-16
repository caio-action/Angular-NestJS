import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserCrudComponent } from "./views/user-crud/user-crud.component";
import { ProductUpdateComponent } from './components/product-update/product-update.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  }
,{
  path:"products",
  component: ProductCrudComponent
}
,{
  path:"products/create",
  component: ProductCreateComponent
},{
  path:"products/update/:id",
  component: ProductUpdateComponent,
},{
  path:"user",
  component: UserCrudComponent
},{
  path:"user/create",
  component: UserCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
