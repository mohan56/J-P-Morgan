import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent' ; 
import searchApplicant from '@salesforce/apex/ApplicantProvider.searchApplicant';

export default class ApplicantSearch extends LightningElement {

     objApp = {'sObjectType' : 'Applicant__c'}
     showInfoFlag = false;
     showSpinnerFlag=false;
    searchApplicantHandler(){
        this.showSpinnerFlag=true;
       this.objApp.Name=this.template.querySelector('lightning-input[ data-formfield="applicantId"]').value ;
       console.log( this.objApp.Name);

        
       searchApplicant({objApplicant : this.objApp})
       .then((result)=>{
        console.log(JSON.stringify(result));
        this.objApp=result;
        this.showSpinnerFlag=false;
        this. showSuccessToast('Record Found','success');
        this.showInfoFlag=true;
       })
       .catch((error)=>{
        console.log(JSON.stringify(error));
        this.showSuccessToast('Record Not Found','error');
        this.showInfoFlag=false;
        this.showSpinnerFlag=false;
       
       })
      }

       showSuccessToast(message,variantName) {
        const evt = new ShowToastEvent({
            title: 'Message',
            message:message ,
            variant:variantName,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      }

      

 

    

}