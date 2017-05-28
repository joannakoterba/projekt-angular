import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'dataSort'
})

export class DataSortPipe implements PipeTransform {

  transform(value: any, field: string, direction): any {

    if (direction == "desc") {
      return value.sort(function (a, b) {
        if (a[field] < b[field]) {
          return 1;
        }

        if (a[field] > b[field]) {
          return -1;
        }

        return 0;
      });
    } else {
      return value.sort(function (a, b) {
        if (a[field] > b[field]) {
          return 1;
        }

        if (a[field] < b[field]) {
          return -1;
        }

        return 0;
      });
    }
  }
}
