import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoMenuPage } from './no-menu.page';

describe('NoMenuPage', () => {
  let component: NoMenuPage;
  let fixture: ComponentFixture<NoMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
