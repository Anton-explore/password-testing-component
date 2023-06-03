import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';

import { PassValidationService } from './pass-validation.service';

describe('PassValidationService', () => {
  let service: PassValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(service.isWeak).toBeFalse();
    expect(service.isEasy).toBeFalse();
    expect(service.isMedium).toBeFalse();
    expect(service.isStrong).toBeFalse();
  });

  it('should subscribe', () => {
    spyOn(service, 'checkPasswordStrength');
    const testValue = 'qwertyqwerty';
    service.passwordControl.setValue(testValue);

    expect(service.checkPasswordStrength).toHaveBeenCalledWith(testValue);
  });

  describe('should update password strength properties correctly', () => {

    it('test a weak password', () => {
      service.checkPasswordStrength('12345');
      expect(service.isWeak).toBeTrue();
      expect(service.isEasy).toBeFalse();
      expect(service.isMedium).toBeFalse();
      expect(service.isStrong).toBeFalse();
    });

    it('test an easy password', () => {
      service.checkPasswordStrength('qwertyqwerty');
      expect(service.isWeak).toBeFalse();
      expect(service.isEasy).toBeTrue();
      expect(service.isMedium).toBeFalse();
      expect(service.isStrong).toBeFalse();

      service.checkPasswordStrength('111111111');
      expect(service.isEasy).toBeTrue();

      service.checkPasswordStrength('!!!!!!!!!!');
      expect(service.isEasy).toBeTrue();
    });

    it('test an medium password', () => {
      service.checkPasswordStrength('qwerty22222');
      expect(service.isMedium).toBeTrue();
      expect(service.isStrong).toBeFalse();

      service.checkPasswordStrength('qwerty!!!!!');
      expect(service.isMedium).toBeTrue();
      expect(service.isStrong).toBeFalse();
    });

    it('test an strong password', () => {
      service.checkPasswordStrength('qw@rty!123');
      expect(service.isStrong).toBeTrue();
    });
  });

});
