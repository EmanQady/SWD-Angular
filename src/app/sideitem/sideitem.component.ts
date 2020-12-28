import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sideitem',
  templateUrl: './sideitem.component.html',
  styleUrls: ['./sideitem.component.css']
})
export class SideitemComponent implements OnInit {

  @Input() initforms: {
    id: number; title: string; startDate: string; endDate: string; proObj: string;
    proManager: string; proInfo: string; proScope: string;
  } | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

}
