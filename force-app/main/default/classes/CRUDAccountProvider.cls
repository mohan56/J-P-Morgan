public with sharing class CRUDAccountProvider {
    
    @AuraEnabled
    public static string createAccount(Account objAcc){
        try {
            if(objAcc != null){
                   insert objAcc;
                   return 'Account Created Successfully';
            }
            else{
                return 'Locha while creating.';
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Account searchAccount(Account objAcc){
        try {
            if(objAcc != null){
               return [select Id, Name,Type,Rating,SLA__c from Account where Name =: objAcc.Name];
            }
            else{
                 return null;
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}