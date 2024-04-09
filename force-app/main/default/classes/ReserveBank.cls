public abstract class ReserveBank {
    public void deposit(String bankName){
        system.debug('Use Reserve bank method for deposit'+ (bankName));
    }
    
    public void withdraw(String bankName){
        system.debug('Use Reserve bank method for withdraw'+ (bankName));
    }
    
    public abstract void calculateEMI();

}