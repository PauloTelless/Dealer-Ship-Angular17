import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CarsInfoComponent } from '../../cars/cars-info/cars-info.component';
import { MarcaService } from '../../../services/marca/marca.service';
import { Marca } from '../../../models/marca/marca';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { StepText } from '../../../models/enums/enumText';
import { UsersNotLoggedComponent } from '../users/users-not-logged/users-not-logged.component';
import { UserService } from '../../../services/user/user.service';
import { UsersCarFavoriteSuccessComponent } from '../../users/users-car-favorite-success/users-car-favorite-success.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { sort } from 'fast-sort';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    ToolBarComponent,
    MatDialogModule,
    TimelineModule,
    CardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers:[
    CarService,
    MarcaService,
    UserService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private carService = inject(CarService);
  private marcaService = inject(MarcaService);
  private dialogService = inject(MatDialog);
  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);
  private formBuilder = inject(FormBuilder);
  private token!: string;
  public responsiveOptions: any[] | undefined;
  public userId!: string;
  public carsDatas!: Array<Car>;
  public marcasDatas!: Array<Marca>;
  public etapas: Array<any> = [];
  public optionsFilterCaras = [
    {option: 'Nome'},
    {option: 'Maior preço'},
    {option: 'Menor preço'},
    {option: 'Maior quilometragem'},
    {option: 'Menor quilometragem'}
  ]

  ngOnInit(): void {

    if (typeof localStorage != 'undefined') {
      this.token = localStorage.getItem('token') as string;
    };

    this.getCars();
    this.getMarcas();
    this.searchModelCarForm.valueChanges.subscribe(() => {
      this.searchModelCar();
    });

    // if (!this.token) {
    //   setTimeout(() => {
    //     this.dialogService.open(UsersPopUpLoginComponent, {
    //       width: '550px',
    //       height: '320px'
    //     })
    //   }, 30000);
    // };

    if (typeof localStorage !== 'undefined') {
      this.userId = localStorage.getItem('userId') as string;
    };

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ];

      this.etapas = [
      { titulo: 'Pesquise', text: StepText['Texto-Pesquise'], icon: 'pi pi-search' },
      { titulo: 'Selecione', text: StepText['Texto-Selecione'], icon: 'pi pi-check' },
      { titulo: 'Entre em contato', text: StepText['Texto-Entre-Contato'], icon: 'pi pi-user' },
      { titulo: 'Vendido', text: StepText['Texto-Vendido'],  icon: 'pi pi-car' }
    ];
  };

  getCars(): void {
    this.carService.getAllCars().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (carsResponse) => {
        this.carsDatas = carsResponse.map(car => ({
          ...car,
          modeloCarro: car.modeloCarro.toUpperCase()
        }));
      },
      error: (error) => {
        console.error('Erro ao obter carros:', error);
      }
    });
  }

    getMarcas(): void{
      this.marcaService.getAllMarcas().pipe(
        takeUntilDestroyed(
          this.destroyRef
          )
          ).subscribe({
            next: (response => {
              this.marcasDatas = response;
            })
          });
        };

        saveFavoriteCar(userId: string, carId: string): void{
          try {

        this.userService.favoriteCar(userId, carId).pipe(
          takeUntilDestroyed(
            this.destroyRef
          )
          ).subscribe({
            next: (() => {
              this.openModalFavoriteCarSucess();
            }),
            error: (() => {
              if (!localStorage.getItem('token')) {
                this.dialogService.open(UsersNotLoggedComponent, {
                  width: '400px',
                 height: '350px'
              });
            };
          })
        });

      } catch (error) {
        console.log(error);
      };
    };

    searchModelCarForm = this.formBuilder.group({
      modeloCarro: ['']
    });

    searchModelCar(): void{
      const modelCarSearch = this.searchModelCarForm.value.modeloCarro?.toUpperCase() as string;

      if (!modelCarSearch || modelCarSearch.trim() == '') {
        this.getCars();
        return;
      };

      this.carsDatas = this.carsDatas.filter((modeloCarro) => {
        return modeloCarro.modeloCarro.includes(modelCarSearch);
      });
    };

    selectFilter(event: MatSelectChange): void{
      const optionFilter = event.value;

      switch (optionFilter) {
        case 'Nome':
          this.carsDatas = sort(this.carsDatas).asc(modeloCarro => modeloCarro.modeloCarro);
          break;

        case 'Maior preço':
          this.carsDatas = sort(this.carsDatas).desc(precoCarro => parseFloat(precoCarro.precoCarro));
          break;

        case 'Menor preço':
          this.carsDatas = sort(this.carsDatas).asc(precoCarro => parseFloat(precoCarro.precoCarro));
          break;

        case 'Maior quilometragem':
          this.carsDatas = sort(this.carsDatas).desc(quilometragem =>  parseFloat(quilometragem.quilometragemCarro));
          break;

        case 'Menor quilometragem':
          this.carsDatas = sort(this.carsDatas).asc(quilometragem => parseFloat(quilometragem.quilometragemCarro));
          break;

        default:
          break;
      };
    };

    openModalCarInfo(carInfo: Car): void{
      this.dialogService.open(CarsInfoComponent, {
      width: '600px',
      height: '550px',
      data: carInfo
    });
  };

  openModalFavoriteCarSucess(): void{
    this.dialogService.open(UsersCarFavoriteSuccessComponent,{
      width: '300px',
      height: '300px',
    });
  };

}
