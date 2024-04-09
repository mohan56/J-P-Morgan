import { LightningElement } from 'lwc';
import accountTableRecord from '@salesforce/apex/AccountProvider.accountTableRecord';
export default class AccountTableComponent extends LightningElement {
  
      objAccount = {'sObjectType':'Account'}
      accList
      countOfRecords=0;
    get optionsType() {
        return [
            { label: 'Prospect', value: 'Prospect' },
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Channel Partner / Reseller', value: 'Channel Partner / Reseller' },
            { label: 'Installation Partner', value: 'Installation Partner' },
            { label: '	Technology Partner', value: 'Technology Partner' },
            { label: 'Other', value: 'Other' },
        ];
    }
         typeHandler(event){
            this.objAccount.Type=event.detail.value;
            console.log( this.objAccount.Type);

            accountTableRecord({objAcc :this.objAccount})
            .then((result)=>{
                console.log(JSON.stringify(result));
                this.accList=result;
                this.countOfRecords=result.length;
            })

         }
}