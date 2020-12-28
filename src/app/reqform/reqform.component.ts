import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reqform',
  templateUrl: './reqform.component.html',
  styleUrls: ['./reqform.component.css']
})
export class ReqformComponent implements OnInit {
  reqform: {
    id: number, intro: string, purpose: string, audience: string,
    description: string, features: string, imgUrl: string
  }[] = [];

  constructor(private StorageService: StorageService) { }

  ngOnInit(): void {
    this.reqform = this.StorageService.reqforms;
  }

  showForm = true;

  secondForm = new FormGroup({
    intro: new FormControl('', Validators.required),
    purpose: new FormControl(null, [Validators.required]),
    audience: new FormControl(null, [Validators.required]),
    descript: new FormControl(null, [Validators.required]),
    features: new FormControl(null, [Validators.required]),
    use: new FormControl(null, [Validators.required])
  });
  url = "";

  onSubmit() {

  }
  onClear() {
    this.secondForm.reset();
    this.url = "";
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result
      }
    }
  }

  onClose() {
    this.showForm = false;
  }

}
