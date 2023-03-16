import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthorizationService } from './authorization.service';
import { environment } from 'src/environments/environment';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorizationService],
    });
    service = TestBed.inject(AuthorizationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a token and save it to local storage', () => {
    const mockResponse = { token: 'mockToken' };

    service.getToken();

    const req = httpMock.expectOne(`${environment.host}/${environment.version}/auth/anonymous?platform=subscriptions`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    const token = localStorage.getItem('token');
    expect(token).toEqual('mockToken');
  });
});