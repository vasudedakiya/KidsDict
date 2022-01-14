import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level4Component } from './level4/level4.component';
import { LevelsComponent } from './levels/levels.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "level/:id", component: LevelsComponent },
  { path: "level/1/:id", component: Level1Component },
  { path: "level/2/:id", component: Level2Component },
  { path: "level/3/:id", component: Level3Component },
  { path: "level/4/:id", component: Level4Component },
  { path: "mobile", component: MobileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
