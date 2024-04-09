public with sharing class applicantAddressPopupProvider {
    

    @AuraEnabled
    public static List<Address__c> applicantAddressSearch(Applicant__c objApp){
        try {
            Id appID = [select Id,Name from Applicant__c where Name=:objApp.Name].Id;

            if(objApp != null){
               return [select Country__c,State__c,City__c from Address__c where Applicant__c =:appID];
            }
            else{
               return null;
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}