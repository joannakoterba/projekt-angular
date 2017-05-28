import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'dataSearch'
})

export class DataSearchPipe implements PipeTransform {

  transform(value: any, search: string): any {
    search = search.toLowerCase();

    return value.filter((element) => {
      const combo = `${element.firstName} ${element.lastName} ${element.dateOfBirth} ${element.position} ${element.salary}`;

      return combo.toLowerCase().indexOf(search) != -1;
    });
  }
}
