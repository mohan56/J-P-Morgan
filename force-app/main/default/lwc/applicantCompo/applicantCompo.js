import { LightningElement } from 'lwc';
import searchApplicantAddress from '@salesforce/apex/ApplicantAddressProvider.searchApplicantAddress';
export default class ApplicantCompo extends LightningElement {
    
    objApplicant={'sObjectType':'Applicant__c'}
    appList
    searchAddressHandler(){
        
      this.objApplicant.Name = this.template.querySelector('lightning-input[ data-formfield="applicantId"]').value;
      console.log(this.objApplicant.Name);

     
      searchApplicantAddress({objApp : this.objApplicant})
      .then((result)=>{
        console.log(JSON.stringify(result));
        this.appList=result;
      })
      .catch((error)=>{
        console.log(JSON.stringify(error));
      })
   

    }

  

   
}