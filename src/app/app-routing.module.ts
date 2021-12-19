import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {WorkComponent} from "./components/work/work.component";
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', component:MainComponent},
  { path:'about', component:AboutComponent},
  { path:'work', component:WorkComponent},
  { path:'menu', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
