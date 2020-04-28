import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  constructor(private fb:FormBuilder){}

  formularioPrueba=this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(10)]],
    mail: ['',[Validators.required, Validators.email]]
  });
}

