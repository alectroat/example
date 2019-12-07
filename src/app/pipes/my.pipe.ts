import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myPipe' })
export class MyPipe implements PipeTransform {
  transform(value: any, args?: any,dd?:any): string {
    let transformedValue = value == undefined ? "" : value.toUpperCase(); 
    return transformedValue;
  }
}
