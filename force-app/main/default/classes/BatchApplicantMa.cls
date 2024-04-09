global class BatchApplicantMa implements Database.Batchable<sObject>{
   
    global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('select Id,Age__c,Passport_Message__c from Applicant__c where Age__c <18 ');
    }
    global void execute(Database.BatchableContext BC, List<Applicant__c> appList){
        if(!appList.isEmpty()){
            for(Applicant__c objApp: appList){
                objApp.Passport_Message__c='Your Passport Has Been Rejected';
            }
            Database.Update(appList,false);
        } 
    }
    
    global void finish(Database.BatchableContext BC){
        
        Database.executeBatch(new BatchApplicantSendingMail(),100);
    }
}