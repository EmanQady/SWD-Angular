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
<<<<<<< HEAD
  initforms: {
    id: number, title: string, startDate: string, endDate: string, proObj: string,
    proManager: string, proInfo: string, proScope: string
  };
  message: string;
=======

  @Input() initforms: {
    id: number; title: string; startDate: string; endDate: string; proObj: string;
    proManager: string; proInfo: string; proScope: string;
  } | undefined;

>>>>>>> 0a3b8fb4cbd35398baf1761cce44a4e6f4525ef6
  constructor(private route: ActivatedRoute,
    private router: Router,
    private storageSevice: StorageService ) {

     }

  ngOnInit() {
    
  }


}
