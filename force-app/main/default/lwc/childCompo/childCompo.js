import { LightningElement } from 'lwc';

export default class ChildCompo extends LightningElement {
    childMessage='Ati Ky Khandala';
    sendDataHandler(){
        const myEvent = new CustomEvent('eventname', {detail : this.childMessage });
            this.dispatchEvent(myEvent);
            
    }
}