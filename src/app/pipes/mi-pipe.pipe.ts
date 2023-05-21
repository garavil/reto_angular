import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigo'
})
export class MiPipePipe implements PipeTransform {

  transform(value: number): string {
    return 'Ref - '+ value;
  }

}
