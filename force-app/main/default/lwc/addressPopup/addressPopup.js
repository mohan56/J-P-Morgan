import { LightningElement,api } from 'lwc';

const  columns = [
    { label: 'Id', fieldName: 'Id', editable: true },
    { label: 'Country', fieldName: 'Country__c', editable: true },
    { label: 'State', fieldName: 'State__c', editable: true },
    { label: 'City', fieldName: 'City__c', editable: true }

  ];


export default class AddressPopup extends LightningElement {

    @api recievedAddressList

    selectedRecordsHandler(){
        
    }

    closeButtonHandler(){
      const closeAddressPopEvent= new CustomEvent('closemodal',{detail:false});
      this.dispatchEvent(closeAddressPopEvent);
    }
        
}