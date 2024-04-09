public with sharing class ApplicantProvider {
   
   @AuraEnabled(cacheable=true)
   public static List<ApplicantWrapper> fetchApplicant(){
     
  
      List<ApplicantWrapper> theAppWrapperList = new List<ApplicantWrapper>();//Creating a wrapper class list 

       List<Applicant__c> theAppList = new List<Applicant__c>();
        
        theAppList = [SELECT Id, First_Name__c, Last_Name__c, Gender_del__c, Applican_Type__c, Adhar_Card__c FROM Applicant__c];

        if(!theAppList.isEmpty()){
           
           for(Applicant__c app : theAppList){
            
             // Creating a Wrapper class Object to store into refrence fields
            ApplicantWrapper theAppWrapper = new ApplicantWrapper();
            theAppWrapper.firstName = app.First_Name__c;
            theAppWrapper.lastName = app.Last_Name__c;
            theAppWrapper.Gender = app.Gender_del__c;
            theAppWrapper.applicantType = app.Applican_Type__c;
            theAppWrapper.aadharCard = app.Adhar_Card__c;
            theAppWrapperList.add(theAppWrapper);
           }
        }

        return theAppWrapperList;
         
   }

   public class ApplicantWrapper{
    @AuraEnabled
    public String firstName {get;set;}

    @AuraEnabled
    public string lastName {get;set;}

    @AuraEnabled
    public string Gender {get;set;}

    @AuraEnabled
    public string applicantType {get;set;}

    @AuraEnabled
    public string aadharCard {get;set;}

   }
}