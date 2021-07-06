import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelsComponent } from './levels/levels.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "level/:id", component: LevelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
