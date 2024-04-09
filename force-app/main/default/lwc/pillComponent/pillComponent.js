import { LightningElement,api } from 'lwc';

export default class PinComponent extends LightningElement {

    @api label;

    removePill() {
        // Dispatch an event to notify the parent component to remove this pill
        const removeEvent = new CustomEvent('removepill');
        this.dispatchEvent(removeEvent);
    }
}