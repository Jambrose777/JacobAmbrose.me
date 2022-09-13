import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, Validators.required)
  });
  disableButton = false;
  showSuccess = false;
  showError = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.disableButton = true;
    const body = {
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      text: this.contactForm.get('message').value,
    };

    this.apiService.contactSubmission(body).subscribe({
      next: res => {
        this.contactForm.get('name').setValue('');
        this.contactForm.get('email').setValue('');
        this.contactForm.get('message').setValue('');
        this.contactForm.markAsUntouched();
        this.showSuccess = true;
        this.disableButton = false;
      },
      error: error => {
        this.showError = true;
        this.disableButton = false;
      }
    });
  }

}
