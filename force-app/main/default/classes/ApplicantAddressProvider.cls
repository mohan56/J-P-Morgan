public with sharing class ApplicantAddressProvider {
   

    @AuraEnabled
    public static List<Address__c> searchApplicantAddress(Applicant__c objApp){
        try {
            Id appId = [select Id,Name from Applicant__c where Name =: objApp.Name LIMIT 1].Id;

            if(objApp != null){
                  return [select Country__c,State__c,City__c from Address__c where Applicant__c=:appId];
            }
            else{
                  return null;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static string deleteAddressRecords(List<Id> addIdList){
        try {
            if(!addIdList.isEmpty()){
              Database.delete([select Id from Address__c where Id IN :addIdList],false);
              return'Record Deleted SuccessFully';
            }
            else{
               return 'Error While Deleting';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}