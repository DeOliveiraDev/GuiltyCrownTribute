import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsutsugamiGaiComponent } from './tsutsugami-gai.component';

describe('TsutsugamiGaiComponent', () => {
  let component: TsutsugamiGaiComponent;
  let fixture: ComponentFixture<TsutsugamiGaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsutsugamiGaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsutsugamiGaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
