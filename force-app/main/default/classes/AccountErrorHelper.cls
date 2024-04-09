public class AccountErrorHelper {
    
    public Static void AccountDescriptionSetting(List<Account> accNewList){
        List<Account> accList = new List<Account>();
        
        for(Account objAcc : accList){
            Account newAcc = new Account(Name='Apex22');
            accList.add(newAcc);
        }
        
        if(!accList.isEmpty()){
            Database.insert(accList,true);
        }
    }
}