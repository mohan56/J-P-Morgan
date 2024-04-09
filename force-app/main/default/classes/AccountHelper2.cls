public class AccountHelper2 {
    public Static void AccountDescriptionSetting(List<Account> accNewList,Map<Id,Account> accOldMap){
        for(Account objAcc:accNewList){           
                if(trigger.isInsert && trigger.isBefore){
                     if(!String.isBlank(objAcc.Type)){
                    if(objAcc.Type=='Prospect' || objAcc.Rating=='Hot'){
                        objAcc.Description='ACCEPTED';
                    }
                    else{
                        objAcc.Industry='Hospitality';
                    }
                }
                if(trigger.isUpdate && trigger.isBefore){
                    if(objAcc.Type !=accOldMap.get(objAcc.Id).Type){
                        if(objAcc.Type=='Prospect' || objAcc.Rating=='Hot'){
                            objAcc.Description='ACCEPTED';
                        }
                        else{
                            objAcc.Industry='Hospitality';
                        } 
                    }
                }
            }
        }
    }
}