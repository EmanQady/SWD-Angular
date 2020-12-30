import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from './../services/storage.service'

@Component({
  selector: 'sideitem',
  templateUrl: './sideitem.component.html',
  styleUrls: ['./sideitem.component.css']
})
export class SideitemComponent implements OnInit {
  initforms: {
    id: number, title: string, startDate: string, endDate: string, proObj: string,
    proManager: string, proInfo: string, proScope: string
  };
  message: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private storageSevice: StorageService ) {

     }

  ngOnInit() {
    
  }


}
