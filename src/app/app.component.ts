import { Component } from '@angular/core';


//https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Grepping Angular Basics';
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  output = '';
  taskName = '';
  taskList = '';

  //for task list add warn message
  warnSpanClass = 'warn';
  //warnMsgStyle = 'display:none';   ***=> *ngIf handles these kinds of DOM manips
  warnMsg = '';
  warnMsgStateBool = false;

  errWarnMsg = ['Input cannot be blank.', 'Task list cannot be blank.', 'Task list cannot be blank.', 'Task list downloaded.'];
 
  allowNewAlert = false;

  constructor(){

    setTimeout(()=>{ this.allowNewAlert = true }, 3000);

  }

  getTask(event: any){

    this.taskName = event.target.value;

  }

  addTask(){

    this.warnSpanClass = '';
    //this.warnMsgStyle = 'display:none';   ***=> *ngIf handles these kinds of DOM manips
    this.warnMsg = '';

    if(this.taskName == "" || this.taskName == null){

      this.warnMsgStateBool = true;

      this.warnSpanClass = 'warn';
      //this.warnMsgStyle = 'display:inline-block';
      this.warnMsg = this.errWarnMsg[0];

    }else{

      //you must use [innerHTML] for html entities to be recognized
      this.taskList += this.taskName + "<br>";
      this.taskName = "";

    }

  }

  exportTaskList(){

    this.warnSpanClass = '';
    //this.warnMsgStyle = 'display:none';  ***=> *ngIf handles these kinds of DOM manips
    this.warnMsg = '';

    let data = this.taskList;

    if(data == "" || data == null ){

      this.warnSpanClass = 'warn';
      //this.warnMsgStyle = 'display:inline-block';  ***=> *ngIf handles these kinds of DOM manips
      this.warnMsg = 'Task list cannot be blank.';

    }else{

      data = data.replace(/[<br>]/gm, '\r');

      let taskList = new Blob([data], {type:"text/plain"});
  
      let textFile = window.URL.createObjectURL(taskList);
      var link = document.getElementById('downloadlink');
      link.setAttribute("href", textFile)
      link.style.display = 'block';
      link.click();
      link.style.display = 'none';

      this.warnSpanClass = 'succ';
      //this.warnMsgStyle = 'display:inline-block';  ***=> *ngIf handles these kinds of DOM manips
      this.warnMsg = 'Task list downloaded.';

    }

  }

  rndclr = '';
  
  randomColor(){
    
    let int = 0;
    let rgbColor = '';
    let clrArray = [];
    
    for(let i = 0; i < 3; i++){

      int = Math.floor(Math.random() * 255);
      clrArray.push(int);

    }
    
    rgbColor = `rgb(${clrArray[0]}, ${clrArray[1]}, ${clrArray[2]})`;
    this.rndclr = rgbColor;

    //console.log(rgbColor);

  }

}