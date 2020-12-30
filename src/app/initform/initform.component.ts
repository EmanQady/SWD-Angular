import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'initform',
  templateUrl: './initform.component.html',
  styleUrls: ['./initform.component.css']
})
export class InitformComponent implements OnInit {

  id: number;
  firstForm: FormGroup;
  editMode = false;
  showForm = true;

  // initform: {
  //   id: number, title: string, startDate: string, endDate: string, proObj: string,
  //   proManager: string, proInfo: string, proScope: string
  // }[] = [];

  constructor(private StorageService: StorageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initializeForm();
        }
      );
  }


  initializeForm() {
    let title = '';
    let startDate = '';
    let endDate = '';
    let objectives = '';
    let manager = '';
    let budget = '';
    let scope = '';

    this.firstForm = new FormGroup({
      'title': new FormControl(title, [Validators.required]),
      'startDate': new FormControl(startDate, [Validators.required]),
      'endDate': new FormControl(endDate, [Validators.required]),
      'objectives': new FormControl(objectives, [Validators.required]),
      'manager': new FormControl(manager, [Validators.required]),
      'budget': new FormControl(budget, [Validators.required]),
      'scope': new FormControl(scope, [Validators.required])
    });

  }


  onSubmit() {
     console.log(this.firstForm.value);
     this.StorageService.formValues$ = this.firstForm.valueChanges;
    if (this.editMode) {
      
      this.StorageService.onInitformUpdate(this.id, this.firstForm.value);
    }
    else {
      this.StorageService.onInitformAdded(this.firstForm.value.title, this.firstForm.value.startDate,
        this.firstForm.value.endDate, this.firstForm.value.objectives, this.firstForm.value.manager,
        this.firstForm.value.budget, this.firstForm.value.scope);
      this.firstForm.reset();
    }

  }

  onClose() {
    this.showForm = false;
  }

}
