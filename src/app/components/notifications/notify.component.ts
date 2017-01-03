// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnChanges, Input, trigger, state, animate, transition, style } from '@angular/core';
import { NotificationService } from '../../services/index';

@Component({
    selector: 'app-notification',
    animations: [
        trigger('visibilityChanged', [
            state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
            state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
            transition('1 => 0', animate('300ms')),
            transition('0 => 1', animate('900ms'))
        ])
    ],
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.css']
})

export class NotificationComponent implements OnInit, OnChanges {
    message: string;
    @Input() isVisible : boolean = true;
     visibility = 'shown';

    constructor(private notificationService: NotificationService) { }

    ngOnChanges() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }

    ngOnInit() {
        this.visibility = 'shown';
        this.notificationService.getMessage().subscribe(message => { this.message = message; });
    }

    closeAlert(element: HTMLElement) {
        element.classList.remove('in');
        setTimeout(() => this.message = null, 150);
    }
}
