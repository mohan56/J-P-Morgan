public with sharing class PicklistController {
    @AuraEnabled(cacheable=true)
    public static List<String> getPicklistValues(String objectApiName, String fieldApiName, String recordTypeId) {
        List<String> picklistValues = new List<String>();
        
        try {
            // Fetch picklist values based on the object, field, and record type
            Schema.DescribeFieldResult fieldResult = Schema.getGlobalDescribe().get(objectApiName).getDescribe().fields.getMap().get(fieldApiName).getDescribe();
            List<Schema.PicklistEntry> picklistEntries = fieldResult.getPicklistValues();
            
            for (Schema.PicklistEntry entry : picklistEntries) {
                picklistValues.add(entry.getValue());
            }
        } catch (Exception e) {
            System.debug('Error fetching picklist values: ' + e.getMessage());
        }
        
        return picklistValues;
    }
}