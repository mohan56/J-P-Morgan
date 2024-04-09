global class BatchAccount1 implements Database.Batchable<sObject>{
    
     global Database.QueryLocator start(Database.BatchableContext BC){ 
         String query='select Id,Name,Type from Account where Type=\'Prospect\'';
         return Database.getQueryLocator(query);
     }
     
     global void execute(Database.BatchableContext BC, List<Account> accList){
         if(!accList.isEmpty()){
             for(Account objAcc : accList){
                objAcc.Type='Customer - Direct'; 
             }
             Database.Update(accList,false);
         }
     }
     
     global void finish(Database.BatchableContext BC){
         
     }
}