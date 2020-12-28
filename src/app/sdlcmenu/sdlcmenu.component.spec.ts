import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdlcmenuComponent } from './sdlcmenu.component';

describe('SdlcmenuComponent', () => {
  let component: SdlcmenuComponent;
  let fixture: ComponentFixture<SdlcmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdlcmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdlcmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
