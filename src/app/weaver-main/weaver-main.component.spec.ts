import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaverMainComponent } from './weaver-main.component';

describe('WeaverMainComponent', () => {
  let component: WeaverMainComponent;
  let fixture: ComponentFixture<WeaverMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaverMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaverMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
