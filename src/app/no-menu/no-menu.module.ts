import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoMenuPageRoutingModule } from './no-menu-routing.module';

import { NoMenuPage } from './no-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoMenuPageRoutingModule
  ],
  declarations: [NoMenuPage]
})
export class NoMenuPageModule {}
