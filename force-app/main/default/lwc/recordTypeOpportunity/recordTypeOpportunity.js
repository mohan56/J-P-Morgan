import { LightningElement, wire, track } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class RecordTypeOpportunity extends LightningElement {
    @track typeOptions = [];
    @track error;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: OPPORTUNITY_OBJECT.objectApiName,
        recordTypeId: '0125j000000X46j' // Specify your record type ID here
    })
    wireTypeValue({ error, data }) {
        if (data) {
            this.typeOptions = data.picklistFieldValues.Type.values.map(option => ({
                label: option.label,
                value: option.value
            }));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.typeOptions = [];
            console.error('Error retrieving Type picklist values: ', error);
        }
    }
}