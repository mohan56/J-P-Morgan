import { LightningElement } from 'lwc';

export default class FatherPopUpModal extends LightningElement {
   
    closePopupFlag=false;

    showPopupHandler(){
        console.log('Hi...');
    }

    closePopupModalHandler(event){
       this.closePopupFlag= event.detail;
    }
}