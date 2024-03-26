import { Component } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ToolBarComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
