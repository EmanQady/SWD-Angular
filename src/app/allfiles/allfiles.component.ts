import { Component } from '@angular/core';

@Component({
  selector: 'allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.css']
})
export class AllfilesComponent {

  display=false;
  showImages() {
    this.display = true;
  }

}
