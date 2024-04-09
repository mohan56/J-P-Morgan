import { LightningElement } from 'lwc';

export default class ParentCompo extends LightningElement {
    recievedMessage='waiting...!!';

    recievedDataHandler(event){
        console.log(event.detail);
        this.recievedMessage=event.detail;
    }
}