@RestResource(urlMapping='/getAccountDetails')

 global class ProviderAccount {
    global static List<Account> fetchAllAccounts(){
        return [select Id, Name, Type, Rating from Account LIMIT 5];
    }
}