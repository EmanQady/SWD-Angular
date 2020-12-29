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

  id!: number;
  showForm = true;
  arrData: any = [];

  // initform: {
  //   id: number, title: string, startDate: string, endDate: string, proObj: string,
  //   proManager: string, proInfo: string, proScope: string
  // }[] = [];

  constructor(private StorageService: StorageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.editMode = params['id'] != null;
    //       this.initializeForm();
    //     }
    //   );
  }

  initializeForm() {
    let title = '';
    let startDate = '';
    let endDate = '';
    let objectives = '';
    let manager = '';
    let budget = '';
    let scope = '';
  }

  firstForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    objectives: new FormControl('', [Validators.required]),
    manager: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required]),
    scope: new FormControl('', [Validators.required])
  });


  onSubmit(title: any, sDate: any, eDate: any, obj: any, mngr: any, bud: any, scope: any) {
    this.StorageService.onInitformAdded(title, sDate, eDate, obj, mngr, bud, scope)
    {
      console.log(this.StorageService.initforms);
    }
  }

  onClose() {
    this.showForm = false;
  }

}
