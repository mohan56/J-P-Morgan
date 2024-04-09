@isTest
public class TestBatchApplicant3 {

    public static testMethod void TestgenderMethod(){
        
        List<Applicant__c> appList = new List<Applicant__c>();
        
        for(Integer i=1;i<=200;i++){
         Applicant__c objApp = new  Applicant__c();
            objApp.First_Name__c='Della'+i;
            objApp.Gender_del__c='Female';
            objApp.Police_Verification__c=false;
            appList.add(objApp);
        }
        Database.Insert(appList,false);
        
        if(!appList.isEmpty()){
           
            test.startTest();
               Database.executeBatch(new BatchApplicant3());
            test.stopTest();
        }
        
       List<Applicant__c> updatedApplicants = [SELECT Id, Police_Verification__c FROM Applicant__c WHERE Id IN :appList];

        // Assert that Police_Verification__c field is updated to true for all records
        for (Applicant__c app : updatedApplicants) {
            System.assertEquals(true, app.Police_Verification__c);
        }
    }
}