import { LightningElement } from 'lwc';
import fromDateApplicantSearch from '@salesforce/apex/ApplicantProvider.fromDateApplicantSearch';
export default class FromDateApplicantSearch extends LightningElement {
    
   
    formDate 
    toDate
    applist
    countOfRecords=0;
    showTableInfo=false;

    searchHandler(){
            this.formDate= this.template.querySelector('lightning-input[ data-formfield="FromDate"]').value;
            this.toDate= this.template.querySelector('lightning-input[ data-formfield="ToDate"]').value;
            console.log( this.formDate +''+this.toDate);

            fromDateApplicantSearch({fromDate :this.formDate,toDate :this.toDate})
            .then((result)=>{
                console.log(JSON.stringify(result));
                this.applist=result;
                this.countOfRecords=result.length;
                if(result.length > 0){
                   this.showTableInfo=true;
                }
                else{
                    this.showTableInfo=false;
                }
            })
            .catch((error)=>{
                console.log(JSON.stringify(error));
                this.showTableInfo=false;
            })
    }
}