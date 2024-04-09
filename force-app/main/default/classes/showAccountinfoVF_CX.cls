public class showAccountinfoVF_CX {

     public Account objAcc{get;set;}
     
    public showAccountinfoVF_CX(ApexPages.StandardController controller) {
     String accountId = ApexPages.currentPage().getParameters().get('AccountId');
    
      objAcc =  [select Id,Name,Type,Rating,SLA__C From Account where Id=:accountId];
    }

}