import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputFieldComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.password).toBeUndefined();
    expect(component.isWeak).toBeFalse();
    expect(component.isEasy).toBeFalse();
    expect(component.isMedium).toBeFalse();
    expect(component.isStrong).toBeFalse();
  });

  describe('should update password strength properties correctly', () => {

    it('test a weak password', () => {
      component.password = '12345';
      component.checkPasswordStrength();
      expect(component.isWeak).toBeTrue();
      expect(component.isEasy).toBeFalse();
      expect(component.isMedium).toBeFalse();
      expect(component.isStrong).toBeFalse();
    });

    it('test an easy password', () => {
      component.password = 'qwertyqwerty';
      component.checkPasswordStrength();
      expect(component.isWeak).toBeFalse();
      expect(component.isEasy).toBeTrue();
      expect(component.isMedium).toBeFalse();
      expect(component.isStrong).toBeFalse();

      component.password = '111111111';
      component.checkPasswordStrength();
      expect(component.isEasy).toBeTrue();

      component.password = '!!!!!!!!!!';
      component.checkPasswordStrength();
      expect(component.isEasy).toBeTrue();
    });

    it('test an medium password', () => {
      component.password = 'qwerty22222';
      component.checkPasswordStrength();
      expect(component.isMedium).toBeTrue();
      expect(component.isStrong).toBeFalse();

      component.password = 'qwerty!!!!!';
      component.checkPasswordStrength();
      expect(component.isMedium).toBeTrue();
      expect(component.isStrong).toBeFalse();
    });

    it('test an strong password', () => {
      component.password = 'qw@rty!123';
      component.checkPasswordStrength();
      expect(component.isStrong).toBeTrue();
    });
  });
});
