import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmerComponent } from './smer.component';

describe('SmerComponent', () => {
  let component: SmerComponent;
  let fixture: ComponentFixture<SmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmerComponent]
    });
    fixture = TestBed.createComponent(SmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
