import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
