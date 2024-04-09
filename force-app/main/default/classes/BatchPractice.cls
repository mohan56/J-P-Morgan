global class BatchPractice implements Database.Batchable<sObject> {

    global Database.QueryLocator start(Database.BatchableContext BC){
        String query = 'Select Id,FirstName,LastName,LeadSource,AccountId from Contact where Account.Type=\'Prospect\' Or Account.Type= \'Other\'';
        return(Database.getQueryLocator(query));
    }
    
    global void execute(Database.BatchableContext BC, List<Contact> conList){
     
        if(!conList.isEmpty()){
            for(Contact objCon : conList){
                if(objCon.Account.Type=='Prospect'){
                   objCon.LeadSource='Web'; 
                }
                else{
                    if(objCon.Account.Type=='Other'){
                        objCon.LeadSource='Phone Inquiry'; 
                    }
                }
            }
             Database.Update(conList,false);
            System.debug('Updated Succesfully');
        }        
    }
    
    global void finish(Database.BatchableContext BC){
        
    }
}