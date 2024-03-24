import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupaComponent } from './grupa.component';

describe('GrupaComponent', () => {
  let component: GrupaComponent;
  let fixture: ComponentFixture<GrupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupaComponent]
    });
    fixture = TestBed.createComponent(GrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
