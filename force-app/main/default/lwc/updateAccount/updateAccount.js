import { LightningElement } from 'lwc';
import updateAccount from '@salesforce/apex/AccountUpdate.updateAccount';
import deleteRecords from '@salesforce/apex/AccountUpdate.updateAccount';

export default class UpdateAccount extends LightningElement {
     objAcc = {'sObjectType':'Account'}
     
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
            this.objAcc.Type=event.detail.value;
         }

         get optionsSLA() {
            return [
                { label: '	Gold', value: '	Gold' },
                { label: 'Silver', value: 'Silver' },
                { label: '	Platinum', value: '	Platinum' },
                { label: 'Bronze', value: '	Bronze' },
            ];
        }

        slaHandler(event){
            this.objAcc.SLA__c=event.detail.value;
        }


    saveHandler(){
     this.objAcc.Name=this.template.querySelector('lightning-input[ data-formfield="accountId"]').value;
    console.log(this.objAcc.Name);

    updateAccount({objAccount : this.objAcc})
    .then((result)=>{
        console.log(JSON.stringify(result));
        this.objAcc=result;
        alert('Account Updated');
    })
    .catch((error)=>{
        console.log(JSON.stringify(error));
        this.objAcc=error;
        alert('Locha..');
    })
    }

    deleteHandler(){
        let text = "Do you want to delete this record ? ";
        if (confirm(text) == true) {
                deleteRecords({objAccount :this.objAcc})
                .then((result)=>{
                    console.log(result);
                    this.objAcc=result;
                    alert('Account Deleted');
                })
                .catch((error)=>{
                    this.objAcc=result;
                    console.log(error);
                    alert('error while deleting');

                }) 
        }
         else {
         
           }
    
    }
}