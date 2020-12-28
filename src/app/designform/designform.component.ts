import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'designform',
  templateUrl: './designform.component.html',
  styleUrls: ['./designform.component.css']
})
export class DesignformComponent implements OnInit {

  designform: {
    id: number, filename: string, docs: Array<string>
  }[] = [];

  constructor(private StorageService: StorageService) { }

  ngOnInit(): void {
    this.designform = this.StorageService.designforms;
  }

  showForm = true;

  thirdForm = new FormGroup({
    documents: new FormArray([]),
    urls: new FormArray([])
  });

  documents = this.thirdForm.get('documents') as FormArray;
  urls: string[] = [];

  onAddDoc() {
    const control = new FormControl('', Validators.required);
    this.documents.push(control);
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.urls.push(event.target.result)
      }
    }
  }

  onClose() {
    this.showForm = false;
  }

}