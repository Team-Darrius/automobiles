import { Component, OnInit, OnChanges, Input, trigger, state, animate, transition, style } from '@angular/core';
import { NotificationService } from '../../services/index';

@Component({
    selector: 'app-notification',
    animations: [
        trigger('visibilityChanged', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [style({transform: 'translateX(-100%)'}), animate(100)]),
            transition('* => void', [animate(100, style({transform: 'translateX(100%)'}))])
        ])
    ],
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.css']
})

export class NotificationComponent implements OnInit {
    message: string;
    @Input() isVisible : boolean = true;
     visibility = 'shown';

    constructor(private notificationService: NotificationService) { }


    ngOnInit() {
        // this.visibility = 'shown';
        this.notificationService.getMessage().subscribe(message => { this.message = message; });
    }

    // closeAlert(element: HTMLElement) {
    //     element.classList.remove('in');
    //     setTimeout(() => this.message = null, 150);
    // }
}