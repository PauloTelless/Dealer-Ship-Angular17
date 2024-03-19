import { Component, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ToolBarComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent{

}
