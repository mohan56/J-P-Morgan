public class AllAccoutVF {
      public List<Account>  accList{get;set;}
      
    public AllAccoutVF(ApexPages.StandardController controller) {
       accList = [Select Id, Name,Type from Account where Type='Prospect'];
       system.debug('Retrived Records='+accList);
    }

}