global class BatchApplicant3 implements Database.Batchable<sObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC){
        String query ='select Id,First_Name__c,Gender_del__c,Police_Verification__c from Applicant__c where (Gender_del__c =\'Male\' or Gender_del__c =\'Female\') && Police_Verification__c=false';
        return Database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext BC, List<Applicant__c> appList){
        if(!appList.isEmpty()){
            for(Applicant__c objapp : appList){
                objapp.Police_Verification__c=true; 
            }
            Database.Update(appList,false);
        }
    }
    
    global void finish(Database.BatchableContext BC){
        List<Messaging.SingleEmailMessage> mailList = new  List<Messaging.SingleEmailMessage>();
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[]{'jha621311@gmail.com'});
        mail.setSenderDisplayName('Silver micro');
        mail.setSubject('Welcome to air India');
        mail.setPlainTextBody('hi,Welcome Your record  has been updated');
        mailList.add(mail);
        if(!mailList.isEmpty()){
            Messaging.sendEmail(mailList);
        }
        
    }
}