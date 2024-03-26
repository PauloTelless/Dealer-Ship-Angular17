import { Component, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TimelineModule } from 'primeng/timeline';
import { StepText } from '../../../models/enums/enumText';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TextService } from '../../../models/enums/enumTextService';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    ToolBarComponent,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    TimelineModule,
    CardModule,
    CommonModule
  ],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.scss'
})
export class ServicePageComponent implements OnInit{
  ngOnInit(): void {
    this.etapas = [
      { textService: TextService['textCarroService'],  icon: 'pi pi-car' },
      { textService: TextService['textGarantiaService'],  icon: 'pi pi-check-circle' },
      { textService: TextService['textPagamentoService'],  icon: 'pi pi-dollar' },
      { textService: TextService['textEspecialistasService'], icon: 'pi pi-users' }
    ];
  };

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  etapas: Array<any> = [];

}
