import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateStory } from './intermediate-story';

describe('IntermediateStory', () => {
  let component: IntermediateStory;
  let fixture: ComponentFixture<IntermediateStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateStory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateStory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
