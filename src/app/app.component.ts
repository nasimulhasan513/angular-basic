import { Component, Input } from '@angular/core';

interface dataType{
  name: string,
  id: number,
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getData(){
    const data: dataType = {
      name: 'deep',
      id: 30,
      indian: false
    }
  }
}
