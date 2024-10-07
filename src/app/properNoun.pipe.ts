import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'propernoun',
})

export class ProperNounPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        let retval = value[0].toUpperCase();
        for (let i = 1; i < value.length; i++) {
            retval += value[i].toLowerCase();
        }
        return retval;
    }
}
