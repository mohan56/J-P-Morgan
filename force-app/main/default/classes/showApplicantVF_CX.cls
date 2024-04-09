public class showApplicantVF_CX {

     public Applicant__c objApplicant{get;set;}

    public showApplicantVF_CX(ApexPages.StandardController controller) {
       String applicantId = ApexPages.currentPage().getParameters().get('ApplicantId');
       
       system.debug('Recieved Id='+applicantId);
        
        if(String.isNotBlank(applicantId))
     objApplicant = [select Id,First_Name__c,Gender_del__c,DOB__c from Applicant__c where Id=: applicantId];
    }

}