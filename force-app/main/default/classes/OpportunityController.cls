public with sharing class OpportunityController {
    
    // Method to fetch Opportunity Record Types by Record Type Id
    @AuraEnabled(cacheable=true)
    public static List<RecordType> fetchRecordTypesById(String recordTypeId) {
        // Query Opportunity record types
        return [SELECT Id, Name FROM RecordType WHERE SObjectType = 'Opportunity' AND Id = :recordTypeId];
    }
}