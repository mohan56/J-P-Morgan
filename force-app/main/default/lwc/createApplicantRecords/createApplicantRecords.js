import { LightningElement } from 'lwc';
import createApplicant from '@salesforce/apex/ApplicantProvider.createApplicant';
export default class CreateApplicantRecords extends LightningElement {

     objApplicant = {'sObjectType':'Applicant__c'}
    insertApplicantRecord(){
      this.objApplicant.First_Name__c= this.template.querySelector('lightning-input[data-formfield="applicantFirstName"]').value;
      this.objApplicant.Last_Name__c=this.template.querySelector('lightning-input[ data-formfield="applicantLastName" ]').value;
      this.objApplicant.DOB__c= this.template.querySelector('lightning-input[ data-formfield="dob"]').value;
         console.log(this.objApplicant.First_Name__c +''+  this.objApplicant.Last_Name__c +''+ this.objApplicant.DOB__c);

 

         // calling Apex Controller

         createApplicant({objApp : this.objApplicant})
         .then((result)=>{
            console.log(JSON.stringify(result));
         })
         .catch((error)=>{
            console.log(JSON.stringify(error));
         })
    }
}