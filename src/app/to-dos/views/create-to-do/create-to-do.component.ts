import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss']
})
export class CreateToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
