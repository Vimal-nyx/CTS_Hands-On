import { Pipe, PipeTransform } from '@angular/core';

// Hands-On 3 Task 3: Custom Pipe with PipeTransform
@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (!value || value === 0) {
      return 'No Credits';
    }
    return value === 1 ? '1 Credit' : `${value} Credits`;
  }
}
