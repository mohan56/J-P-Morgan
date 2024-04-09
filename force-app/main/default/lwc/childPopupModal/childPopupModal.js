import { LightningElement } from 'lwc';

export default class ChildPopupModal extends LightningElement {

    closeButtonHandler(){
        const ClosePopUpEvent = new CustomEvent('closeModal', { detail : false});
            this.dispatchEvent(ClosePopUpEvent);
            
            
    }
}