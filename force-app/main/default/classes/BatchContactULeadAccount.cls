global class BatchContactULeadAccount implements Database.Batchable<sObject>{

    global Database.QueryLocator start(Database.BatchableContext BC){
        String query = 'Select Id,LeadSource,Account.Type from Contact where Account.Type=\'Prospect\' || Account.Type=\'Other\'';
        return(Database.getQueryLocator(query));
    }
    
    global void execute(Database.BatchableContext BC,List<Contact> conList){
      
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
                Database.Update(conList,false);
                System.debug('Records Updated');
            } 
        }
    }
    
    global void finish(Database.BatchableContext BC){
        
    }
}