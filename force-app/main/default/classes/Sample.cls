public class Sample {
  
    public void Sam(){
        Sample.HelloWorld();
    }
    public static List<Account> HelloWorld(){
        List<Account> accList = new List<Account>();
        for(Integer i=1;i<=5;i++){
            Account objAcc = new Account(Name='Sharma');
            accList.add(objAcc);
        }
        if(!accList.isEmpty()){
            insert accList;
        }
        System.debug('Account Inserted');
        return accList;
    }
    
    
}