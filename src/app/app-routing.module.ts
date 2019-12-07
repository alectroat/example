import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { childComponent } from '../app/child/child.component';
import { parentComponent } from '../app/parent/parent.component';


const routes: Routes = [
  { path: 'child', component: childComponent },
  { path: 'parent', component: parentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
