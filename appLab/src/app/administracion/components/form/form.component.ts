import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lab-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title=""
  group!:FormGroup

  constructor(private reference:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { 
    this.title = data?"EDITAR PACIENTE":"NUEVO PACIENTE"
  }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.group = new FormGroup({
      _id:new FormControl(this.data?._id),
      id:new FormControl(this.data?.id, Validators.required),
      name: new FormControl(this.data?.name, Validators.required),
      lastname: new FormControl(this.data?.lastname, Validators.required),
      phone: new FormControl(this.data?.phone, Validators.required),
      address: new FormControl(this.data?.address, Validators.required),
    })
    
  }

  save(){
    const records = this.group.value
    this.reference.close(records)
  }

}
