import { TestBed } from '@angular/core/testing';

import { DashBoardService1Service } from './dash-board-service1.service';

describe('DashBoardService1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashBoardService1Service = TestBed.get(DashBoardService1Service);
    expect(service).toBeTruthy();
  });
});
