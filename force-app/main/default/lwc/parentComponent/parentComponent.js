import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

   parentSalary = 300;
   sendData

    sendToChildHandler(){
           this.sendData= this.parentSalary;
           console.log(sendData);
    }
}