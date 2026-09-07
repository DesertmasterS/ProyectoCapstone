import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanicButtonPage } from './panic-button.page';

describe('PanicButtonPage', () => {
  let component: PanicButtonPage;
  let fixture: ComponentFixture<PanicButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
