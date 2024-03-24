import { Component, OnInit, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-car-favorite-success',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './users-car-favorite-success.component.html',
  styleUrl: './users-car-favorite-success.component.scss'
})
export class UsersCarFavoriteSuccessComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.closeModalUserCarsFavoriteSuccess();
  };


  closeModalUserCarsFavoriteSuccess(): void{
    setTimeout(() => {
      this.dialogRef.close()
    }, 2500);
  };

}
