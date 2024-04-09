import { LightningElement, wire, track } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import saveAccount from '@salesforce/apex/InsertAccount.saveAccount';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class picklistAccount extends LightningElement {
    @track selectedRating;
    @track selectedIndustry;
    @track ratingOptions = [];
    @track industryOptions = [];
    @track error;
    theAccount = {'sObjectType':'Account'};

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        recordTypeId: '0125j000000aL3fAAE' // Rating Record Type Id
    })
    wiredRatingValues({ error, data }) {
        if (data) {
            this.ratingOptions = data.picklistFieldValues.Rating.values;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.ratingOptions = [];
            console.error('Error retrieving Rating picklist values: ', error);
        }
    }

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        recordTypeId: '0125j000000X3ypAAC' // Industry Record Type Id
    })
    wiredIndustryValues({ error, data }) {
        if (data) {
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.industryOptions = [];
            console.error('Error retrieving Industry picklist values: ', error);
        }
    }

    saveHandler(){
        console.log('Inside of save Button');
        this.theAccount.Name = this.template.querySelector('lightning-input[data-formfield="accName"]').value;
        this.theAccount.ChannelProgramName = this.template.querySelector('lightning-input[data-formfield="channelName"]').value;
        this.theAccount.ChannelProgramLevelName = this.template.querySelector('lightning-input[data-formfield="channelLevelName"]').value;

        console.log('this.theAccount.Name '+this.theAccount.Name );
        console.log('this.theAccount.ChannelProgramName :'+this.theAccount.ChannelProgramName );
        console.log('this.theAccount.ChannelProgramLevelName:'+this.theAccount.ChannelProgramLevelName);

        saveAccount({theAcc : this.theAccount})
         .then((result)=>{
            console.log("Result::"+JSON.stringify(result));
            // Optionally, reset the form or do any other necessary actions upon successful insertion.
         })
         .catch((error)=>{
           console.log("Error::"+JSON.stringify(error));
           // Handle error here, display an error message or log it.
         });
    }

    handleRatingChange(event){
        this.theAccount.Rating = event.detail.value;
    }

    handleIndustryChange(event){
        this.theAccount.Industry = event.detail.value;
    }
}