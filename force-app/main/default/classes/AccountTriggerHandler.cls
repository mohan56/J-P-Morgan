public class AccountTriggerHandler {
 
    public Static void beforeInsert(List<Account> AccNewList){
        AccountTriggerHelper.DescriptionSetting(AccNewList,null);
    }
    
    public Static void beforeUpdate(List<Account> AccNewList,Map<Id,Account> AccNewMap){
        AccountTriggerHelper.DescriptionSetting(AccNewList,AccNewMap);
    }
  
}