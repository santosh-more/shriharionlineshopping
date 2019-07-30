import { TestBed } from '@angular/core/testing';

import { UserWorkFlowService } from './user-work-flow.service';

describe('UserWorkFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserWorkFlowService = TestBed.get(UserWorkFlowService);
    expect(service).toBeTruthy();
  });
});
