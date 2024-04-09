import { LightningElement } from 'lwc';

export default class RecordPicker extends LightningElement {


    handleValueChange(event) {
        const selectedRecordId = event.detail;
        // Handle the selected record ID, for example, log it to the console
        console.log('Selected Contact ID: ' + selectedRecordId);
    }
}