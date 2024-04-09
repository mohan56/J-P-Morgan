import { LightningElement } from 'lwc';

export default class PopUpMessage extends LightningElement {

    closePopupHandler(){
        const closedPopupEvent= new CustomEvent('closemodel',{detail : false});
         this.dispatchEvent(closedPopupEvent);
    }
}