import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

}
