@isTest
public class TestBatchContactULeadAccount {
    @isTest
    public static void TestProspectMethod(){
        
        Account objAcc = new Account();
        objAcc.Name='Test1';
        objAcc.Type='Prospect';
        
        List<Contact> conList = new List<Contact>();
        for(Integer i=1;i<=200;i++){
            Contact objCon = new Contact(FirstName='TestContact'+i,LastName ='Apple'+i,AccountId=objAcc.Id);
            conList.add(objCon);
        }
        if(!conList.isEmpty()){
            Database.Insert(conList,false);
        }
        
        test.startTest();
           BatchContactULeadAccount objBatch = new BatchContactULeadAccount();
            Database.executeBatch(objBatch,200);
        test.stopTest();
        
        List<Contact> conListReturned  =  [select Id,LeadSource,AccountId from Contact where LeadSource='Web' and AccountId =:objAcc.Id];
        //Illtreating For Every Updated Contact LeadSource With Excepted LeadSource
        System.assertEquals(200, conListReturned.size());
    }
}