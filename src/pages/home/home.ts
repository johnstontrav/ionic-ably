import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as Ably from 'ably';
let options: Ably.Types.ClientOptions = {key: 'KEY_HERE'};
let client = new Ably.Realtime(options);
/* inferred type Ably.Realtime */
let channel = client.channels.get('feed');
/* inferred type Ably.Types.RealtimeChannel */

channel.subscribe(function (message) {
    console.log("Received: " + message.data);
});


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

}