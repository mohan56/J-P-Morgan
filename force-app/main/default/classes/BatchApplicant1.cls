global class BatchApplicant1 implements Database.Batchable<sObject>{
       
    global Database.QueryLocator start(Database.BatchableContext BC){
   String query ='select Id,Gender_del__c,Police_Verification__c from Applicant__c where (Gender_del__c=\'Male\' || Gender_del__c=\'Female\') && Police_Verification__c=false';
    return Database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext BC, List<Account> accList){
        
    }
    
    global void finish(Database.BatchableContext BC){
        
    }
}