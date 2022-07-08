import { Component } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {

  chips = [{name:'8086', image:'8086.jpg'}, {name:'8088', image:'8088.jpg'}, {name:'80186', image:'80186.jpg'}, {name:'80286', image:'80286.jpg'}, {name:'386', image:'386.jpg'}, {name:'486', image:'486.jpg'}, {name:'P5', image:'P5.jpg'}, {name:'Pentium II', image:'P2.jpg'}, {name:'Pentium III', image:'P3.jpg'}, {name:'Pentium 4', image:'P4.jpg'}, {name:'Pentium D', image:'PD.jpg'}, {name:'Core 2 Duo E6850', image:'C2D.jpg'}, {name:'Core 2 Extreme QX6850', image:'C2De.jpg'}, {name:'Core 2 Extreme QX9770', image:'QX9770.jpg'}, {name:'Core i7 975', image:'975.jpg'}, {name:'Core i7 3970X', image:'3970X.jpg'}, {name:'Core i7-990X', image:'990X.jpg'}, {name:'Core i7 4960X', image:'4690X.jpg'}, {name:'Core i7 5960X', image:'5960X.jpg'}, {name:'6950X.jpg', image:'6950X.jpg'}, {name:'Core i9 7980XE', image:'7980XE.jpg'}, {name:'9980XE', image:'9980XE.jpg'}, {name:'Core i9 9900KS', image:'9900KS.jpg'}, {name:'Core i9 10980XE', image:'10980XE.jpg'}, {name:'Core i9 11900K', image:'11900K.jpg'}, {name:'Core i9 12900K', image:'12900K.jpg'}];

  constructor() { 

  }

}
