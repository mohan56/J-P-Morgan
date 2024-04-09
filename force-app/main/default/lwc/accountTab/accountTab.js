import { LightningElement, wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountProvider.fetchAccounts';

const columns = [
    { label: 'Account Name', fieldName: 'Name', cellAttributes: { class: {fieldName: 'cellClass' } }},
    { label: 'Rating', fieldName: 'Rating', cellAttributes: { class: {fieldName: 'cellClass' } } },
    { label: 'Type', fieldName: 'Type', cellAttributes: { class: {fieldName: 'cellClass' } }},
    { label: 'Phone', fieldName: 'Phone', type: 'phone', cellAttributes: { class: {fieldName: 'cellClass' } }},
    { label: 'Industry', fieldName: 'Industry', cellAttributes: { class: {fieldName: 'cellClass' } }},
    {
        type: "button",
        typeAttributes: {
            label: 'Edit',
            name: 'Edit',
            title: 'Edit',
            value: 'edit',
            disabled: { fieldName: 'isEditDisabled' }
        },
        cellAttributes: { class: {fieldName: 'cellClass' } }
    }
];

export default class AccountTab extends LightningElement {

    accountList;
    columns = columns;

    @wire(fetchAccounts)
    wiredAccount({ error, data }) {
        if (data) {
            this.accountList = data.map(a => ({
                ...a,
                cellClass: a.Rating === 'Hot' ? 'slds-theme_success' : a.Rating === 'Cold' ? 'slds-theme_warning' : '',
                isEditDisabled: a.Rating !== 'Warm'
            }));
            console.log('data:', data);
        } else if (error) {
            console.log('Error:', error);
        }
    }
}