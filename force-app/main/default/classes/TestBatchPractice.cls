@isTest
public class TestBatchPractice {

    @isTest
    public static void testWebMethod(){
        
        Account objAcc = new Account(Name='Ishu',Type='Prospect');
        Insert(objAcc);
        
        List<Contact> conList = new List<Contact>();
        for(Integer i=0;i<=200;i++){
           Contact objCon = new Contact(FirstName='Vaani'+i,LastName='Test'+i,AccountId=objAcc.Id);
            conList.add(objCon);
        }
        
        if(!conList.isEmpty()){
            Database.Insert(conList,false);
        }
        
        test.startTest();
           BatchPractice obj = new BatchPractice();
            Database.executeBatch(obj,200);
        test.stopTest();
        
        //Retrieving Updated LeadSource
       List<Contact> conUpdatedList = [select Id,LeadSource,AccountId from Contact where AccountId =: objAcc.Id];
        for(Contact objContact :conUpdatedList ){
            System.assertEquals('Web', objContact.LeadSource);
        }
    }
    
      @isTest
    public static void testOtherMethod(){
        
         Account objAcc = new Account(Name='Ishuu',Type='Other');
        Insert(objAcc);
        
        List<Contact> conList = new List<Contact>();
        for(Integer i=0;i<=200;i++){
           Contact objCon = new Contact(FirstName='Vaani'+i,LastName='Test'+i,AccountId=objAcc.Id);
            conList.add(objCon);
        }
        
        if(!conList.isEmpty()){
            Database.Insert(conList,false);
        }
        
        test.startTest();
           BatchPractice obj = new BatchPractice();
            Database.executeBatch(obj,200);
        test.stopTest();
        
        //Retrieving Updated LeadSource
       List<Contact> conUpdatedList = [select Id,LeadSource,AccountId from Contact where AccountId =: objAcc.Id];
        for(Contact objContact :conUpdatedList ){
            System.assertEquals('Other', objContact.LeadSource);
        }
    }
  }