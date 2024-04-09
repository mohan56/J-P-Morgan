public class AllApplicantVF_CX {
 
     public  List<Applicant__c> appList{get;set;} 
    public AllApplicantVF_CX(ApexPages.StandardController controller) {
    appList= [Select Id,First_Name__c,Last_Name__c,Gender_del__c,DOB__c,Age__c from Applicant__c where Gender_del__c='Female'];
    system.debug('Retrived Records='+appList);
    }

}