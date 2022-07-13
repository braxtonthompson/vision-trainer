import { Component, Input, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() square!: Square;

  constructor() { }

  ngOnInit(): void {
  }

}
