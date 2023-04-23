import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceholderPage } from './placeholder.page';

describe('PlaceholderPage', () => {
  let component: PlaceholderPage;
  let fixture: ComponentFixture<PlaceholderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaceholderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
