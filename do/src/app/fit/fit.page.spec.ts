import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitPage } from './fit.page';

describe('FitPage', () => {
  let component: FitPage;
  let fixture: ComponentFixture<FitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
