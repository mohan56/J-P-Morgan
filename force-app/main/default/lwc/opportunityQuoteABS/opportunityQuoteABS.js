import { LightningElement, wire, track } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import fetchAccounts from '@salesforce/apex/AccountProvider.fetchAccounts';
import OppoRecordType from "@salesforce/label/c.OppoRecordType";
export default class OpportunityQuoteABS extends LightningElement {
    @track typeOptions = [];
    @track ratingOptions = [];
    @track stageOptions = [];
    @track error;



    theOpp = {'sObjectType' : 'Opportunity'}

    connectedCallback() {
        console.log('Custom Label Value:', this.OppoRecordType);
        this.fetchAccountRating();
    }

    @wire(getPicklistValuesByRecordType, {
        objectApiName: OPPORTUNITY_OBJECT.objectApiName,
        recordTypeId: OppoRecordType
    })
    wireTypeValue({ error, data }) {
        if (data) {
            this.typeOptions = data.picklistFieldValues.Type.values.map(option => ({
                label: option.label,
                value: option.value
            }));

            this.stageOptions = data.picklistFieldValues.StageName.values.map(option => ({
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

    fetchAccountRating() {
        fetchAccounts()
            .then(result => {
                this.ratingOptions = this.removeDuplicates(result.map(account => ({
                    label: account.Rating,
                    value: account.Rating
                })));
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.ratingOptions = [];
                console.error('Error retrieving Account ratings: ', error);
            });
    }

    removeDuplicates(array) {
        return array.filter((value, index, self) => self.findIndex(item => item.label === value.label && item.value === value.value) === index);
    }
    
    //Hadling Account rating 
    handleAccountRating(event){
     this.theOpp.Rating = event.target.value;
     console.log(' this.theOpp.Rating:'+ this.theOpp.Rating);
    }

    handleType(){
        
    }
   
    handleStageChange(event){
     this.theOpp.StageName = event.target.value;
     console.log(' this.theOpp.StageName:'+ this.theOpp.StageName);

    }
   //Record Picker Handler for Opportunity Dealer Account
    handleDealerValueChange(event){
        const selectedDealerRecordId = event.detail;
    }

    //Record Picker for Opportunity Assigned salesperson
    handleSalesDealerChange(event){
        const selectedSalesRecordId = event.detail;
    }

    //Creating a Opportunity Record on a Button Click 
    createOpportunityHandler() {

        
    }
}