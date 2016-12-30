import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2/index';

@Component ({
    selector: 'data-base',
    template: `<h1>{{title}}</h1>
                <div>
                    <p>{{item.id}} -> {{item.title}}</p>
                </div>`
})
export class FirebaseTest{
    title = 'app is connected'

    constructor(private af: AngularFire){
       const items$ = af.database.list('items');

       items$.subscribe(
           val => console.log(val)
       )
    }
}