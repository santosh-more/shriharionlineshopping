import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent implements OnInit {

  uploadProductForm: FormGroup;
  imageName: string;
  imgURL: any;
  imagePath: any[];
  isPreview = false;
  message: string;
  fileName: string;

  constructor(private formBuilder: FormBuilder) {
    this.uploadProductForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  uploadProduct() {
    // TODO Product Form Body
    console.log('uploadProduct this.uploadProductForm.value', this.uploadProductForm.value);
    console.log('product image ', this.imgURL);
    this.uploadProductForm.reset();
    this.removePreview();
  }

  showPreview() {
    this.isPreview = true;
  }

  removePreview() {
    this.isPreview = false;
  }

  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    this.fileName = this.imagePath[0].name;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
