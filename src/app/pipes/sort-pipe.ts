import { Pipe, PipeTransform } from '@angular/core';

function sortDesc(x: string, y: string) {
    return y.localeCompare(x)
}
function sortAsc(x: string, y: string) {
    return x.localeCompare(y)
}

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(items: any[], isDesc = false, sortBy?: string) {
        if(sortBy){
            if(isDesc){
                return items.sort((x, y) => {
                    return sortDesc(x[sortBy].toString(),y[sortBy].toString());
                    });
                }
                else{
                    return items.sort((x, y) => {
                        return sortAsc(x[sortBy].toString(),y[sortBy].toString());
                        });
                }
        } else {
            let comparefunc = isDesc ? sortDesc: sortAsc;
            return items.sort(comparefunc);
        }
    }
};