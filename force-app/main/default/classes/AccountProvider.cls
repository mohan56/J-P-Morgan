public with sharing class AccountProvider {

   @AuraEnabled(cacheable=true)
   public static List<Account> fetchAccounts() {
       List<Account> newAccountList = new List<Account>();
       try {
           newAccountList = [SELECT Id, Rating, Type, Name, Phone, Industry FROM Account];
       } catch(Exception e) {
           throw new AuraHandledException(e.getMessage());
       }
       return newAccountList;
   }

     @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccountData(String searchText) {
         System.debug('searchText'+searchText);
        String queryString = 'SELECT Id,Name,Email__c,Phone,Rating,Type FROM Account';
        System.debug('Account Query::'+queryString);
        
        if (String.isNotBlank(searchText)) {
            queryString += ' WHERE (Email__c = \'' + String.escapeSingleQuotes(searchText) + '\' OR Phone = \'' + String.escapeSingleQuotes(searchText) + '\')';
            System.debug('queryString'+queryString);
        }
        
        List<Account> theFetchedAccountsList = Database.query(queryString);
        System.debug('theFetchedAccounts'+theFetchedAccountsList);

        return  theFetchedAccountsList;
    } 

}