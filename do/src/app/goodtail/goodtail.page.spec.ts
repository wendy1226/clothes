import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodtailPage } from './goodtail.page';

describe('GoodtailPage', () => {
  let component: GoodtailPage;
  let fixture: ComponentFixture<GoodtailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodtailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodtailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
