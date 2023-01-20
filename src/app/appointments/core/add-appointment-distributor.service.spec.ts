import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AddAppointmentDistributorService } from './add-appointment-distributor.service';

describe('AddAppointmentDistributorService', () => {
  let service: AddAppointmentDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AddAppointmentDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
