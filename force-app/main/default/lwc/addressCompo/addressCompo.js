import { LightningElement,api } from 'lwc';
import deleteAddressRecords from '@salesforce/apex/ApplicantAddressProvider.deleteAddressRecords';

const  columns = [
   { label: 'Name', fieldName: 'Name', editable: true },
   { label: 'Country__c', fieldName: 'Country__c', editable: true },
   { label: 'State__c', fieldName: 'State__c', editable: true },
   { label: 'City__c', fieldName: 'City__c', editable: true },
 ];
export default class AddressCompo extends LightningElement {
   @api recievedAddressList;
   columns = columns;
   selectedRecordsCount


 
      selectedRecordsHandler(event){
         const selectedRows  =   event.detail.selectedRows;
         console.log("Selected Rows = "+selectedRows)
         this.selectedRecordsCount = event.detail.selectedRows.length;

         let recordsSets = new Set();

         // getting selected record id
         for (let i = 0; i < selectedRows.length; i++) {
             recordsSets.add(selectedRows[i].Id);
         }
   
         // coverting to array
         this.selectedRecords = Array.from(recordsSets);
      
   
   }

   deletedAddressRecord(){
      deleteAddressRecords({addIdList:this.selectedRecords})
      .then((result)=>{
         console.log(JSON.stringify(result));
      })
      .catch((error)=>{
         console.log(JSON.stringify(error));
      })
   }
}