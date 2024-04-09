public with sharing class AuraAccountProvider {

    
    @AuraEnabled
    public static string createAccountRecords(Account objAcc){
        try{
            if(objAcc != null){
               Insert objAcc;
                return 'Account Created Successfully';
            }
            else{
                return 'Locha....!';
            }
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}