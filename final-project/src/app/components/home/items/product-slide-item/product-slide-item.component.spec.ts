import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlideItemComponent } from './product-slide-item.component';

describe('ProductSlideItemComponent', () => {
  let component: ProductSlideItemComponent;
  let fixture: ComponentFixture<ProductSlideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSlideItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSlideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
