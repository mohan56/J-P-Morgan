public with sharing class InsertAccount {
   @AuraEnabled
   public static String saveAccount(Account theAcc){
      try {
          insert theAcc;
          return 'Account Inserted Successfully';
      } catch (Exception e) {
          return 'Error: ' + e.getMessage();
      }
   }
}