import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuzurihaInoriComponent } from './yuzuriha-inori.component';

describe('YuzurihaInoriComponent', () => {
  let component: YuzurihaInoriComponent;
  let fixture: ComponentFixture<YuzurihaInoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuzurihaInoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuzurihaInoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
