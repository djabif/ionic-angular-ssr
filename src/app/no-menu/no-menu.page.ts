import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-no-menu',
  templateUrl: './no-menu.page.html',
  styleUrls: ['./no-menu.page.scss'],
})
export class NoMenuPage implements OnInit {

  constructor(public menu: MenuController) { }

  // Disable side menu for this page
  ionViewDidEnter(): void {
    this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    this.menu.enable(true);
  }

  ngOnInit() {}

}
