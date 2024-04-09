public with sharing class ApplicantAddressSearch {
    

    @AuraEnabled
    public static List<Address__c> applicantAddressSearch(Applicant__c objApp){
        try {
            Id appId = [select Id from Applicant__c where Name =:objApp.Name].Id;
            if(objApp != null){
                return [select 	Country__c,	State__c,City__c from Address__c where Applicant__c =:appId];
            }
            else{
                return null;
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static string deleteApplicantAddress(List<Id> addressIdList){
        try {
            if(!addressIdList.isEmpty()){
                Database.delete([select Id from Address__c where Id IN : addressIdList],false);
              return 'Record deleted';
            }
            else{
                  return 'Empty Records';
            }
           
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}