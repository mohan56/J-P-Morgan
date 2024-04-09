public with sharing class fetchAccount {
   @AuraEnabled
   public static string accountProvider(Account theAcc){
    try {
        if(theAcc != null){
          insert theAcc;
          return 'Account inserted Successfully';
        }
        else{
            return 'Error while fetching Account';
        }
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}