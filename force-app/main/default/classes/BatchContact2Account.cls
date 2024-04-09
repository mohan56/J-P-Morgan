global class BatchContact2Account  implements Database.Batchable<sObject>{
   
   global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('select Account.Name,Account.Description,AccountId,Id,FirstName,LastName,LeadSource from Contact where LeadSource=\'Web\'');
    }
    
    global void execute(Database.BatchableContext BC, List<Contact> conList){
 
        Set<Id> AccIdSet = new Set<Id>();
        if(!conList.isEmpty()){          
            for(Contact objcon :conList){
                if(objcon.AccountId != null){
                    AccIdSet.add(objcon.AccountId);
                }              
            }
        }
        Map<Id,Account> accMap = new Map<Id,Account>();
        if(!AccIdSet.isEmpty()){
            for(Account objAcc : [select Id,Description from Account where Id IN : AccIdSet]){
               accMap.put(objAcc.Id,objAcc);
            }
        }
        if(!accMap.isEmpty()){
            for(Contact objcon : conList){
                if(accMap.containsKey(objcon.AccountId)){
                    if(String.isBlank( accMap.get(objcon.AccountId).Description)){
                        accMap.get(objcon.AccountId).Description=objcon.FirstName+' '+objcon.LastName+' '+objcon.LeadSource;
                    }
                    else{
                        accMap.get(objcon.AccountId).Description=accMap.get(objcon.AccountId).Description+'\n'+objcon.FirstName+' '+objcon.LastName+' '+objcon.LeadSource;
                    }
                  
                }
            }
        }
        if(!accMap.isEmpty())
        Database.Update(accMap.values(),false);
    }
    
    global void finish(Database.BatchableContext BC){
        
    }
    
 }