import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.scss']
})
export class DataBindingExampleComponent {
title = 'Data Binding Example';
isdisabled = true;
name = 'Angular';

OnFan(){
  alert('Fan is ON');
}
}


