import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LightningServiceLWCDemo extends NavigationMixin(LightningElement) {

    @api recordId;

    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

    navigateToEditRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
    }

    navigateToViewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }

    navigateToRecentView(){
       this[NavigationMixin.Navigate]({
         type: 'standard__objectPage',
         attributes: {
            objectApiName: 'Account',
            actionName: 'list'       
         },
         state: {
            filterName: 'Recent'
          }
       });
    }

    // View the Contacts Associated with the Accounts.
    navigateToRelatedList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
               recordId: this.recordId,
               objectApiName: 'Account',
               relationshipApiName: 'Contacts',
               actionName: 'view'
            }
        });
    }
    
}