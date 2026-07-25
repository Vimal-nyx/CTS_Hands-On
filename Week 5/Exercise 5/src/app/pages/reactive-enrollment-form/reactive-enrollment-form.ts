import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

// Hands-On 5 Task 2: Custom Synchronous Validator function
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '');
  if (value.startsWith('XX') || value.startsWith('xx')) {
    return { noCourseCode: true };
  }
  return null;
}

// Hands-On 5 Task 2: Custom Async Validator function returning a Promise
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {
  // Hands-On 5 Task 1: FormGroup model
  enrollForm!: FormGroup;
  submitted = false;

  // Hands-On 5 Task 1: Inject FormBuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Hands-On 5 Task 1: Define Reactive Form structure using FormBuilder
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Hands-On 5 Task 2: Async validator passed as 3rd argument array
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Hands-On 5 Task 2: Custom synchronous validator
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      // Hands-On 5 Task 2: FormArray for dynamic controls
      additionalCourses: this.fb.array([])
    });
  }

  // Hands-On 5 Task 2: Typed getter for FormArray
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Hands-On 5 Task 2: Add dynamic FormControl to FormArray
  addCourse() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Hands-On 5 Task 2: Remove FormControl from FormArray
  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  // Hands-On 5 Task 1: Submit Handler
  onSubmit() {
    // Note: enrollForm.value excludes disabled controls while enrollForm.getRawValue() includes all controls.
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
