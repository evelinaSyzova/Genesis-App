import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set loading to true', () => {
    service.setLoading(true);
    expect(service.getLoading()).toEqual(true);
  });

  it('should set loading to false', () => {
    service.setLoading(false);
    expect(service.getLoading()).toEqual(false);
  });
});
