public with sharing class AccountUpdate {
   
    @AuraEnabled
    public static Account updateAccount(Account objAccount){
        try {
            if(objAccount != null){
                Database.update(objAccount,false);
               return [select Id,Name,Type,SLA__c from Account where Name =:objAccount.Name];
            }
            else{
               return null;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static string deleteRecords(Account objAccount){
        try {
            if(objAccount != null){
               delete objAccount;
               return 'Account deleted';
            }
            else{
                return 'Error while deleting';
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}