import { LightningElement } from 'lwc';
import searchApplicantFirstName from '@salesforce/apex/ApplicantProvider.searchApplicantFirstName';
export default class SearchAlphabetApplicantTable extends LightningElement {
     firstName
     appList


    applicantAlphabetLike(){
      this.firstName=this.template.querySelector('lightning-input[data-formfield="applicantFirstName"]').value;
      console.log( this.firstName);


      searchApplicantFirstName({firstName :this.firstName})
      .then((result)=>{
        console.log(JSON.stringify(result));
        this.appList=result;
      })
      .catch((error)=>{
        console.log(JSON.stringify(error));
        
      })
    }
}