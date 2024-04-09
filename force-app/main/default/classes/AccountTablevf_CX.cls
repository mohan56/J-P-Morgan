public  with sharing class AccountTablevf_CX {
        
     public  List<Account>  accList  {get;set;} 
     public Integer totalRecords{get;set;}
     
    public AccountTablevf_CX(ApexPages.StandardController controller) {
     accList  = [select Id,Name,Type,createdBy.Name from Account ];
      totalRecords=accList.size();
    
     
    }

}