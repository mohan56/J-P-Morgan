import { LightningElement, track } from 'lwc';

export default class SimpleCalculator1 extends LightningElement {

    @track calculation = '';

    handleNumberClick(event) {
        const selectedNumber = event.target.value;
        this.calculation += selectedNumber;
    }

    handleOperatorClick(event) {
        const selectedOperator = event.target.value;
        this.calculation += selectedOperator;
    }

    evaluateExpression() {
        try {
            // Using eval to evaluate the expression
            this.calculation = eval(this.calculation);
        } catch (error) {
            // Handle any errors
            console.error('Error evaluating expression:', error);
            this.calculation = 'Error';
        }
    }

    clearInput(){
        this.calculation = '';
    }
}