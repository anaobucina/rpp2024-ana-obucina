import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekatComponent } from './projekat.component';

describe('ProjekatComponent', () => {
  let component: ProjekatComponent;
  let fixture: ComponentFixture<ProjekatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjekatComponent]
    });
    fixture = TestBed.createComponent(ProjekatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
