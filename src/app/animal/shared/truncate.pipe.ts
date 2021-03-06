import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value && value.length > limit) {
      return value.substring(0, limit - 3).concat('...');
    }
    return value;
  }
}
