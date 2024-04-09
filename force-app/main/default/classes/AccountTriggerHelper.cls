public class AccountTriggerHelper {
    
    public Static void DescriptionSetting(List<Account> AccNewList, Map<Id,Account> AccNewMap){
        for(Account objAcc:AccNewList){     
            if(trigger.isInsert && trigger.isBefore){
                if(!String.isBlank(objAcc.Type)){   
                    if(trigger.isInsert && trigger.isBefore){
                        if(objAcc.Type=='Prospect'){
                            objAcc.Description='TU TU TU TARA';
                        }
                        else{             
                            objAcc.Description='';
                        }
                        
                    }       
                }
                
                
                if(trigger.isUpdate && trigger.isBefore){
                    if(objAcc.Type != AccNewMap.get(objAcc.Id).Type){
                        if(objAcc.Type=='Prospect'){
                            objAcc.Description='TU TU TU TARA';
                        }
                        else{             
                            objAcc.Description='';
                        }
                    }             
                }
            }
        }
    }
}