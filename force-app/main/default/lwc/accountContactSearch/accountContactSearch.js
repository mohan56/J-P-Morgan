import { LightningElement } from 'lwc';

export default class AccountContactSearch extends LightningElement {
   
   objAcc = {'sObjectType' : 'Account'}
    searchAccountHandler(){
       this.objAcc.Name=this.template.querySelector('lightning-input[data-formfield="accountId"]').value ;
       console.log(this.objAcc.Name);
    }
}