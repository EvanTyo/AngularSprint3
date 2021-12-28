import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchBillComponent } from './patch-bill.component';

describe('PatchBillComponent', () => {
  let component: PatchBillComponent;
  let fixture: ComponentFixture<PatchBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
