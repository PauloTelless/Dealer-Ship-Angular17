import { Component } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    ToolBarComponent
  ],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss'
})
export class ServicePageComponent {

}
