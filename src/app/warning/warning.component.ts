import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})

export class WarningComponent {

  warningMsg: string = 'No special characters allowed!';
  warningMsg2: string = 'Warning message 2!';

  displayWarnMsg2(){

    return this.warningMsg2;

  }

}


// export class WarningComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
