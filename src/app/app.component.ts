import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parent';
  data: any = 'Data from parent via EventEmitter!';

  ngOnInit(): void {
    localStorage.setItem('WorkStationId','1a2-332-100-171');
    localStorage.setItem('OfficeId','HRB-GTC-01');
  }

  getDataBack($event: string) {
    console.log($event);
  }

  
}
