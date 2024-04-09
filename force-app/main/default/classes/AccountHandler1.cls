public class AccountHandler1 {
    
    public Static void beforeInsert(List<Account> accNewList){
        AccountHelper2.AccountDescriptionSetting(accNewList,null);
    }
    
    public Static void beforeUpdate(List<Account> accNewList,Map<Id,Account> accOldMap){
        AccountHelper2.AccountDescriptionSetting(accNewList,accOldMap);
    }
}