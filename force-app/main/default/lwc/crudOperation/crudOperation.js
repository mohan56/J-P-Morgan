import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/CRUDAccountProvider.createAccount';
import searchAccount from '@salesforce/apex/CRUDAccountProvider.searchAccount';

export default class CrudOperation extends LightningElement {

   objectAcc = {'sObjectType':'Account'}
   showInfoFlag= true;
   disableSearchFlag=true;
   showSearchFeild=false;
    createHandler(){
       this.showInfoFlag= true;
    }

    searchHandler(){
        this.showInfoFlag=false;

    }

    updateHandler(){
        console.log('update');

    }

    deleteHandler(){
        console.log('delete');

    }

    undeleteHandler(){
        console.log('undelete');

    }

    saveHandler(){
     this.objectAcc.Name= this.template.querySelector('lightning-input[data-formfield="accountName" ]').value ;
     this.objectAcc.Type =  this.template.querySelector('lightning-input[ data-formfield="accountType"]').value ;
     this.objectAcc.SLA__c =  this.template.querySelector('lightning-input[ data-formfield="accountSLA"]').value ;

     console.log( this.objectAcc.Name +''+ this.objectAcc.Type +''+ this.objectAcc.SLA__c);


     createAccount({objAcc : this.objectAcc})
     .then((result)=>{
        console.log(result);
     })
     .catch((error)=>{
        console.log(error);
     })
    }

    findRecordHandler(){
      this.objectAcc.Name=this.template.querySelector('lightning-input[ data-formfield="accountName" ]').value ;

        searchAccount({objAcc : this.objectAcc})
        .then((result)=>{
            console.log(JSON.stringify(result));
            this.objectAcc=result;
            this.showSearchFeild=true;
        
        })
        .catch((error)=>{
           console.log(JSON.stringify(Error));
           this.showSearchFeild=false;
          
        })
    }


}