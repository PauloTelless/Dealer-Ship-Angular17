import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformToPhoneFormat',
  standalone: true
})
export class TransformToPhoneFormatPipe implements PipeTransform {

  transform(value: string): string | undefined | void {
    return value = `(${value.substring(0,2)}) ${value.substring(2,7)}-${value.substring(7,11)}`
  }

}
