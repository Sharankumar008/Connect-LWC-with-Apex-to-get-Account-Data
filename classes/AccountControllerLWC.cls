public class AccountControllerLWC {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(String Rating){
        return [Select id,Name,Industry,Rating from Account where Rating=:rating];
    }
}