import { LightningElement } from 'lwc';

export default class RecordPicker extends LightningElement {


    handleValueChange(event) {
        const selectedRecordId = event.detail;
        console.log('Selected Contact ID: ' + selectedRecordId);
    }
}