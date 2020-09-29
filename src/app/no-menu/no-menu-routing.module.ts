import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoMenuPage } from './no-menu.page';

const routes: Routes = [
  {
    path: '',
    component: NoMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoMenuPageRoutingModule {}
