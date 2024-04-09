global class BatchApplicant implements Database.Batchable<sObject>{
    global Database.QueryLocator start(Database.BatchableContext BC){
       
        return Database.getQueryLocator('select Id,Gender_del__c,Police_Verification__c from Applicant__c where (Gender_del__c=\'Male\' or Gender_del__c=\'Female\') and Police_Verification__c=false');
    }
    
   global void execute(Database.BatchableContext BC, List<Applicant__c> appList){
       if(!appList.isEmpty()){
           for(Applicant__c objApp : appList){
              objApp.Police_Verification__c=true; 
           }
           Database.Update(appList,false);
       }
    }
    
    global void finish(Database.BatchableContext BC){
        
    }
}