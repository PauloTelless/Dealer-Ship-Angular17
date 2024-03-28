import { Component } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    ButtonModule,
    MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public emailContato = 'meajudeautocar@email.com';
  public telefoneContato = '(xx) xxxxx-xxxx';
  public localizaoContato = 'Rua Alameda dos anjos, 1341';
}
