import { LightningElement } from 'lwc';

export default class ShowPopupModal extends LightningElement {


    showPopUpFlag=false;

    showPopupHandler(){
      this.showPopUpFlag=true;
    }

    recievedCloseModalHandler(event){
       this.showPopUpFlag = event.detail;
       
    }
}