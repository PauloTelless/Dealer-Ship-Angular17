import { Car } from "../car/car";

export interface UserfavoriteCarResponse{
  usuarioId: string,
  usuarioNome: string,
  carrosFavoritados: Array<Car>
}
