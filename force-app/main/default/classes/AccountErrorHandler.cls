public class AccountErrorHandler {
    public Static void beforeInsert(List<Account> accNewList){
        AccountErrorHelper.AccountDescriptionSetting(accNewList);
    }
}