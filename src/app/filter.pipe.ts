import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filteredString:string,propName:string) {
    if(filteredString==='')
      return value;
    if(value.length===0)
      return value;
    const resultArray=[];
    for (const item of value)
    {
      if(item[propName].includes(filteredString))
      {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
