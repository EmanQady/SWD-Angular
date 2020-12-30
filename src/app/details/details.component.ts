import { StorageService } from './../services/storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'detailspage',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id: number | undefined;
  sub: Subscription = new Subscription;
  initforms: {
    id: number; title: string; startDate: string; endDate: string; proObj: string;
    proManager: string; proInfo: string; proScope: string;
  } | undefined;

  constructor(private route: ActivatedRoute,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initforms = this.storageService.getFormById(this.id)!;
    });

  }
  showForm = true;

  onClose() {
    this.showForm = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
