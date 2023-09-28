import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogeryComponent } from './catogery.component';

describe('CatogeryComponent', () => {
  let component: CatogeryComponent;
  let fixture: ComponentFixture<CatogeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatogeryComponent]
    });
    fixture = TestBed.createComponent(CatogeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
