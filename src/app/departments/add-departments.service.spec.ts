import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AddDepartmentsService } from './add-departments.service';

describe('AddDepartmentsService', () => {
  let service: AddDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AddDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
