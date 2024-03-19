import { Component, Input, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { Car } from '../../../models/car/car';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ToolBarComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  public userName!: string;

  ngOnInit(): void {
    localStorage.getItem('userName');
    this.userName = localStorage.getItem('userName')?.toUpperCase() as string;
  };
}
