import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/AccountProvider.createAccount';

export default class AccountInsert extends LightningElement {

   accountName
    createAccount(){
        this.accountName= this.template.querySelector('lightning-input[ data-formfield="accountName"]').value;

        createAccount({accName : this.accountName})
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })

    }
}