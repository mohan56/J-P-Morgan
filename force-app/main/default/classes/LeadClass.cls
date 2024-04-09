public with sharing class LeadClass {
   @AuraEnabled
   public static List<Lead> fetchLeadRecords(){
    try {
        return [select Id,Name,Email,Phone from Lead ORDER BY CreatedDate LIMIT 10];
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }

  /* @AuraEnabled
   public static string createTaskRecord(Task objTask){
    try {

        insert objTask;
        return 'Task record is created';
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }*/
}