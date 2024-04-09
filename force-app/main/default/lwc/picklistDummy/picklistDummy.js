import { LightningElement, api } from 'lwc';
import getPicklistValues from '@salesforce/apex/PicklistController.getPicklistValues';

export default class PicklistDummy extends LightningElement {
    @api objectApiName = 'Account';
    @api fieldApiName = 'Rating';
    @api recordTypeName = 'Saving_Account';
    picklistOptions = [];

    connectedCallback() {
        this.fetchPicklistValues();
    }

    async fetchPicklistValues() {
        try {
            const recordTypeId = await this.getRecordTypeId();
            const result = await getPicklistValues({ objectApiName: this.objectApiName, fieldApiName: this.fieldApiName, recordTypeId: recordTypeId });
            this.picklistOptions = result.map(option => ({ label: option, value: option }));
        } catch (error) {
            console.error('Error fetching picklist values:', error);
        }
    }

    async getRecordTypeId() {
        try {
            const response = await fetch(`/services/data/v53.0/query?q=SELECT+Id+FROM+RecordType+WHERE+SObjectType='${this.objectApiName}'+AND+DeveloperName='${this.recordTypeName}'`);
            const data = await response.json();
            return data.records.length > 0 ? data.records[0].Id : null;
        } catch (error) {
            console.error('Error fetching Record Type Id:', error);
            return null;
        }
    }

    handleChange(event) {
        // Handle picklist value change
        console.log('Selected Picklist Value:', event.detail.value);
    }
}