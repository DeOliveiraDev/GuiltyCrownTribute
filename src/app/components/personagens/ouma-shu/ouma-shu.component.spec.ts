import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OumaShuComponent } from './ouma-shu.component';

describe('OumaShuComponent', () => {
  let component: OumaShuComponent;
  let fixture: ComponentFixture<OumaShuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OumaShuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OumaShuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
