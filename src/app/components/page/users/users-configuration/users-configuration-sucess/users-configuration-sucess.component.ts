import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-configuration-sucess',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './users-configuration-sucess.component.html',
  styleUrl: './users-configuration-sucess.component.scss'
})
export class UsersConfigurationSucessComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.closeModalConfigurationSuccess();
  };

  closeModalConfigurationSuccess(): void{
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  };

}
