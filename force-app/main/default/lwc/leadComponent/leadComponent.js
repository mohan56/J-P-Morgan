import { LightningElement,api } from 'lwc';
import fetchLeadRecords from '@salesforce/apex/LeadClass.fetchLeadRecords'; 
//import createTaskRecord from '@salesforce/apex/LeadClass.createTaskRecord';
/*import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import TASK_OBJECT from '@salesforce/schema/Task';
import NAME_FIELD from '@salesforce/schema/Task.WhoId';
import SUBJECT_FIELD from '@salesforce/schema/Task.Subject';
import PRIORITY_FIELD from '@salesforce/schema/Task.Priority';
import STATUS_FIELD from '@salesforce/schema/Task.Status';*/
  const  columns = [
    {
        label: 'Name',
        fieldName: 'accLink',
        type: 'url',
        typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }
    },
    { label: 'Email', fieldName: 'Email', editable: true },
    { label: 'Phone', fieldName: 'Phone', editable: true }
    
  ];
export default class LeadComponent extends LightningElement {

  //@api recordId
  //taskObject = {'sObjectType' : 'Task'};

   leadData
   draftValues=[];
    columns = columns;
    showPopupFlag=false;
    

    connectedCallback(){
        console.log('I am from connectedCallback');
        this.showPopupFlag = true;
        //this.wireAccounts();
        fetchLeadRecords({})
        .then((result)=>{
            console.log('Lead Data='+JSON.stringify(result));
            result = JSON.parse(JSON.stringify(result));
                result.forEach((res) => {
                    res.accLink = '/' + res.Id;
                });
                this.leadData = result;
               // this.error = undefined;    
                
        })
        .catch((error) =>{
            console.log(JSON.stringify(error));
        });

    }
   
    /*handleLeadClick() {
        
        this.showPopupFlag = true;
    }*/

    closeButtonHandler(){
        this.showPopupFlag=false;
    }

   // taskId;
   // name = '';

    /*handleNameChange(event) {
        this.taskId = undefined;
        this.name = event.target.value;
    }*/
  /*  createTask() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.recordId;
        fields[SUBJECT_FIELD.fieldApiName] = this.taskObject.Subject;
        fields[PRIORITY_FIELD.fieldApiName] = this.taskObject.Priority;
        fields[STATUS_FIELD.fieldApiName] = this.taskObject.Status;
        
        const recordInput = { apiName: TASK_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(task => {
                //this.taskId = task.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Task created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }*/

    /*createTask(){

        createTaskRecord({objTask : this.taskObject})
        .then((result) =>{
            console.log(JSON.stringify(result) );
            
        })
        .catch((error)=>{
            console.log(JSON.stringify(error));
        });

    }*/
}