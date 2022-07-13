import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Square } from 'src/app/models/square';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    component.square = new Square('a', 1, 'dark');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
