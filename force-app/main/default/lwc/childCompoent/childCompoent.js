import { LightningElement,api } from 'lwc';

export default class ChildCompoent extends LightningElement {


    @api receivedDataFromParent=0;
   @api receivedDatafromParentOnButtonClick=0;
}