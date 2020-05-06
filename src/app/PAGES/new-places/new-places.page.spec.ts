import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPlacesPage } from './new-places.page';

describe('NewPlacesPage', () => {
  let component: NewPlacesPage;
  let fixture: ComponentFixture<NewPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
