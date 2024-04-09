import { LightningElement } from 'lwc';
import applicantAddressSearch from '@salesforce/apex/applicantAddressPopupProvider.applicantAddressSearch';
export default class ApplicantPopup extends LightningElement {
   
    objApplicant={'sObjectType':'Applicant__c'}
    addressList
    showPopupModalFlag=false;
    searchAddressHandler(){
       this.objApplicant.Name=this.template.querySelector('lightning-input[ data-formfield="applicantId" ]').value;
       console.log(this.objApplicant.Name);


       applicantAddressSearch({objApp:this.objApplicant})
       .then((result)=>{
        console.log(JSON.stringify(result));
        this.addressList=result;
       })
       .catch((error)=>{
        console.log(error);
       })
    }

    closeAddressPopupHandler(event){
        this.showPopupModalFlag=event.detail;
    }
}