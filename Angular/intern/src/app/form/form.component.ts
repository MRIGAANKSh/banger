import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
//object to store data
export class FormComponent {
  user = { name: '', phone: '', idNumber: '', picture: '' };
  users: any[] = [];
  selectedFile: File | null = null;
  errorMessage: string = '';
  successMessage: string = '';
//file /image convertor for preview
  onFileSelected(event: any) {
    this.errorMessage = '';
    const file = event.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.picture = e.target.result; // Convert image to Base64
      };
      reader.readAsDataURL(file);
    } else {
      this.errorMessage = 'Please select a valid image file (JPEG, PNG, JPG)';
    }
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    // Check if all fields are filled
    if (!this.user.name.trim() || !this.user.phone.trim() || !this.user.idNumber.trim()) {
      this.errorMessage = 'Please fill in all fields!';
      return;
    }

    // checking phone number (only digits, 10-15 length)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(this.user.phone)) {
      this.errorMessage = 'Please enter a valid phone number (10-15 digits)';
      return;
    }

    // id checker
    const idExists = this.users.some(record => record.idNumber.trim() === this.user.idNumber.trim());
    if (idExists) {
      this.errorMessage = 'User with this ID number already exists!';
      return;
    }

    // Add user to the list
    this.users.push({ ...this.user });

    // Show success message
    this.successMessage = 'User added successfully!';

    // Reset form
    this.user = { name: '', phone: '', idNumber: '', picture: '' };
  }

  editField(index: number, field: string, event: any) {
    this.users[index][field] = event.target.value;
  }

  deleteRecord(index: number) {
    this.users.splice(index, 1);
    this.successMessage = 'User deleted successfully!';
  }
}
