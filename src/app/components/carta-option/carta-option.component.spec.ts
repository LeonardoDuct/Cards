import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaOptionComponent } from './carta-option.component';

describe('CartaOptionComponent', () => {
  let component: CartaOptionComponent;
  let fixture: ComponentFixture<CartaOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
