global class BatchApplicantSendingMail  implements Database.Batchable<sObject>{
    
    global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('select Id,Passport_Message__c,Email_ID__c,First_Name__c from Applicant__c where Passport_Message__c=\'Your Passport has been rejected\''); 
    }
    
    global void execute(Database.BatchableContext BC, List<Applicant__c> appList){
        
        List<Messaging.SingleEmailMessage> mailList= new List<Messaging.SingleEmailMessage>();
        if(!appList.isEmpty()){
            for(Applicant__c objApp: appList){
                if(String.isBlank(objApp.Email_ID__c)){
                    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                    mail.setToAddresses(new String[] {objApp.Email_ID__c});
                    mail.setSenderDisplayName('Silver micro');
                    mail.setSubject('URGENT MESSAGE FROM pASSPORT OFFICE');
                    mail.setPlainTextBody('hi,'+objApp.First_Name__c+'\n'+ objApp.Passport_Message__c);  
                    mailList.add(mail);
                }
            }
            if(!mailList.isEmpty()){
               Messaging.sendEmail(mailList);
            }
        }
    }
    global void finish(Database.BatchableContext BC){
        
    }
}