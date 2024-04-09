import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track input1;
    @track input2;
    @track result;

    onchange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === 'number1') {
            this.input1 = inputValue;
        } else {
            this.input2 = inputValue;
        }
    }

    calculationHandler() {
        console.log('Inside of Calculation Handler');
        this.result = parseInt(this.input1) + parseInt(this.input2);
        console.log(this.result);
    }
}