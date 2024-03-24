import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekatDialogComponent } from './projekat-dialog.component';

describe('ProjekatDialogComponent', () => {
  let component: ProjekatDialogComponent;
  let fixture: ComponentFixture<ProjekatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjekatDialogComponent]
    });
    fixture = TestBed.createComponent(ProjekatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
