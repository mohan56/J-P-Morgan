import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
const FIELDS = ['Opportunity.Name', 'Opportunity.Account.Name', 'Opportunity.StageName'];

export default class OppoInvoice extends LightningElement {
    @api recordId;
    opportunityName ;
    OpportunityAccountName;
    opportunityStage;
    value = '';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Completed', value: 'Completed' },
        ];
    }

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS  })
    wiredOpportunity({ error, data }) {
        if (data) {
            this.opportunityName = getFieldValue(data, 'Opportunity.Name');
            this.OpportunityAccountName = getFieldValue(data, 'Opportunity.Account.Name');
            this.opportunityStage = getFieldValue(data, 'Opportunity.StageName');
        } else if (error) {
            this.error = error;
        }
    }

    handleStatusChange(event) {
        this.value = event.detail.value;
    }

    renderedCallback() {
        if (this.opportunity && this.opportunity.Name) {
            this.template.querySelector('lightning-input[label="Opportunity Name"]').value = this.opportunity.Name;
        }
    }
}