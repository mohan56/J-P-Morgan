public with sharing class OpportunityProvider {
    @AuraEnabled(cacheable=true)
    public static List<OpportunityProviderWrapper> fetchOpportunity(Id recordId) {
        List<OpportunityProviderWrapper> wrapperList = new List<OpportunityProviderWrapper>();
        try {
            Opportunity opp = [SELECT Id, Account.Name, Name, StageName FROM Opportunity WHERE Id = :recordId LIMIT 1];
            if (opp != null) {
                OpportunityProviderWrapper theWrapper = new OpportunityProviderWrapper();
                theWrapper.oppName = opp.Name;
                theWrapper.accName = opp.Account.Name;
                theWrapper.oppStage = opp.StageName;
                wrapperList.add(theWrapper);
            }
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return wrapperList;
    }

    public class OpportunityProviderWrapper {
        @AuraEnabled
        public String oppName { get; set; }

        @AuraEnabled
        public String accName { get; set; }
        
        @AuraEnabled 
        public String oppStage { get; set; }
    }
}