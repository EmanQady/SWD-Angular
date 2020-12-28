import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideitemComponent } from './sideitem.component';

describe('SideitemComponent', () => {
  let component: SideitemComponent;
  let fixture: ComponentFixture<SideitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
