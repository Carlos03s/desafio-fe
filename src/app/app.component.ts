import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { minimumAgeValidator } from './utils/dataValidator';
import { FormService } from '../../service';
import { IUser } from '../../service/types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  userForm = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'change',
    }),
    telefone: new FormControl('', {
      validators: [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/)],
      updateOn: 'change'
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change'
    }),
    data_nascimento: new FormControl('', {
      validators: [
        Validators.required,
        minimumAgeValidator(18),
      ],
      updateOn: 'change'
    }),
    tipo_usuario: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change'
    })
  },
    { updateOn: 'change' }
  );

  onSubmit(event: MouseEvent): void {
    event.preventDefault();
    const formService = new FormService();
    const listOfUsers = formService.getUsers();
    formService.addUser(undefined as unknown as IUser)
    console.log({ listOfUsers });
  }
}
