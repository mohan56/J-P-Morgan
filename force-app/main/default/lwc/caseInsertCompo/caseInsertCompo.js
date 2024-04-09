import { LightningElement } from 'lwc';
import createCase from '@salesforce/apex/CaseProvider.createCase';
export default class CaseInsertCompo extends LightningElement {
   
    objCase= {'sObject':'Cases'}
    get optionsStatus() {
        return [
            { label: 'New', value: 'New' },
            { label: 'Working', value: 'Working' },
            { label: 'Escalated', value: 'Escalated' },
            { label: 'Closed', value: 'Closed' },
        ];
    }

    statusHandler(event){
          this.objCase.Status=event.detail.value;
          console.log(this.objCase.Status);
    }

    get optionsOrigin() {
        return [
            { label: 'Phone', value: 'Phone' },
            { label: 'Email', value: 'Email' },
            { label: 'Web', value: 'Web' },
            
        ];
    }

    originHandler(event){
          this.objCase.Origin=event.detail.value;
          console.log(this.objCase.Origin);
    }

    get optionsType() {
        return [
            { label: 'Mechanical', value: 'Mechanical' },
            { label: 'Electrical', value: 'Electrical' },
            { label: 'Electronic', value: 'Electronic' },
            { label: 'Structural', value: 'Structural' },
            { label: 'Other', value: 'Other' },
            
        ];
    }

    typeHandler(event){
        this.objCase.Type=event.detail.value;
        console.log(this.objCase.Type);
    }


    caseHandler(){
        this.objCase.CaseNumber=this.template.querySelector('lightning-input[data-formfield="caseNumber"]').value;
        this.objCase.Description=this.template.querySelector('lightning-input[data-formfield="description"]').value;
        console.log(this.objCase.CaseNumber +''+this.objCase.Description);


        createCase({objCas:this.objCase})
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

}