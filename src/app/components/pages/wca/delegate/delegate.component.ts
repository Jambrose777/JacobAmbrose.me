import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.scss']
})
export class DelegateComponent implements OnInit {
  stats = {
    competed: 169,
    organized: 55,
    delegated: 115,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
