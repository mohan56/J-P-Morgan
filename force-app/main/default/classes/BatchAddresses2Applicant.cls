global class BatchAddresses2Applicant implements Database.Batchable<sObject>{
    
    global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('select Name,City__c,Pin_Code__c,Applicant__r.List_Of_Addresses__c,Applicant__c from Address__c where City__c=\'Tirupati\' && Pin_Code__c like \'44%\' && Applicant__r.Police_Verification__c=true');
    }
    
    global void execute(Database.BatchableContext BC, List<Address__c> addList){
        Set<Id> AppIdSet = new Set<Id>();
        if(!addList.isEmpty()){           
                for(Address__c objAddr : addList){
                    if(objAddr.Applicant__c != null){
                    AppIdSet.add(objAddr.Applicant__c) ;
                }
            }
        }
        
        Map<Id,Applicant__c> AppMap = new Map<Id,Applicant__c>();
    }     
    
    global void finish(Database.BatchableContext BC){
        
    }
    
}