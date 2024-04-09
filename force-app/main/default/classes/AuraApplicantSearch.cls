public  class AuraApplicantSearch {
  
    @AuraEnabled
    public static Applicant__c searchApplicant(Applicant__c objApp){
        try{
            if(objApp != null){
                return ([select Id,First_Name__c,Last_Name__c,Gender_del__c,Police_Verification__c from Applicant__c where Name=:objApp.Name LIMIT 1]);
            }
            else{
                return null ;
            }
        }catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       }
    }
}