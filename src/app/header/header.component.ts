import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{

  bodyState = 'dark';
  tglBtnHTML = 'Light Theme';

  themeToggle(){

    let bodyState = document.getElementById('body');

    if(bodyState.getAttribute("class") == 'bodyDark'){
      
      bodyState.setAttribute("class", "bodyLight");
      this.tglBtnHTML = 'Dark Theme';

    }else if(bodyState.getAttribute("class") == 'bodyLight'){

      bodyState.setAttribute("class", "bodyDark");
      this.tglBtnHTML = 'Light Theme';

    }else{

      console.log("There was an error here");

    }

    //console.log(this.tglBtnHTML);
    
  }

}