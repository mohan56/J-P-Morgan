public with sharing class CaseProvider {
   

    @AuraEnabled
    public static String createCase(Case objCas){
        try {
            if(objCas != null){             
              insert objCas;
              return 'Case Created SuccessFully';
            }
            else{
                return 'Locha while creating';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}