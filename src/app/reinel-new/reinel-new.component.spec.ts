import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinelNewComponent } from './reinel-new.component';

describe('ReinelNewComponent', () => {
  let component: ReinelNewComponent;
  let fixture: ComponentFixture<ReinelNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinelNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
