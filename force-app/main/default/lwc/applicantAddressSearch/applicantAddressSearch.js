import { LightningElement } from 'lwc';
import applicantAddressSearch from '@salesforce/apex/ApplicantAddressSearch.applicantAddressSearch';
import deleteApplicantAddress from '@salesforce/apex/ApplicantAddressSearch.deleteApplicantAddress';

export default class ApplicantAddressSearch extends LightningElement {
     
    objApplicant = {'sObjectType' : 'Applicant__c'}
    addressList
    selectedRecordsCount
    

     columns = [
      { label: 'Id', fieldName: 'Id', editable: true },
      { label: 'Country', fieldName: 'Country__c', editable: true },
      { label: 'State', fieldName: 'State__c', editable: true },
      { label: 'City', fieldName: 'City__c', editable: true }

    ];

    searchApplicantAddress(){
       
      this.objApplicant.Name=this.template.querySelector('lightning-input[data-formfield="applicantId"]').value;
      console.log(this.objApplicant.Name);
       
      applicantAddressSearch({objApp:this.objApplicant})
      .then((result)=>{
        console.log(JSON.stringify(result));
        this.addressList=result;
      })
      .catch((error)=>{
        console.log(JSON.stringify(error));
      })
 
    }

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

   

    deletedAddressRecords(){
      deleteApplicantAddress({addressIdList : this.selectedRecords})
      .then((result)=>{
        console.log(result);
       
      })
      .catch((error)=>{
        console.log((error));
      })
    }
}