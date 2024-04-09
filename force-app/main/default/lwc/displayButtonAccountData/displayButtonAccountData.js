import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

const FIELDS = ['Account.Name', 'Account.Rating', 'Account.Type'];

export default class DisplayButtonAccountData extends LightningElement {
    @api recordId;
    accountName;
    accountRating;
    accountType;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    loadFields({ error, data }) {
        if (data) {
            this.accountName = getFieldValue(data, 'Account.Name');
            this.accountRating = getFieldValue(data, 'Account.Rating');
            this.accountType = getFieldValue(data, 'Account.Type');
        } else if (error) {
            console.error('Error fetching account data:', error);
        }
    }
}