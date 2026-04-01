public with sharing class AccountTriggerHandler {
    public static void beforeInsert(List<Account> newAccs) {
        String formattedDate = Date.today().format();
        for(Account acc : newAccs) {
            acc.Description = 'Account created on: '+formattedDate;
        }
    }
    public static void beforeUpdate(List<Account> newAccs, Map<Id,Account> oldAccMap) {
        for(Account acc : newAccs) {
            if(acc.Phone != oldAccMap.get(acc.Id).Phone) {
                acc.Description = 'Phone updated on: '+Date.today().format();
            }
        }
    }
}