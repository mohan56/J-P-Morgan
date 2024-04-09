public class Query {

    public static  List<List<sObject>> display(String FirstName){
        
        List<List<sObject>> searchList = [Find :FirstName IN ALL Fields Returning Contact(FirstName,LastName,Email)];
        
        System.debug('Contact Information =' + searchList );
        return searchList;
    }
}