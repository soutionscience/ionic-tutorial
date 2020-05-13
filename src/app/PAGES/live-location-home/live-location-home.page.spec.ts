import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveLocationHomePage } from './live-location-home.page';

describe('LiveLocationHomePage', () => {
  let component: LiveLocationHomePage;
  let fixture: ComponentFixture<LiveLocationHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveLocationHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveLocationHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
