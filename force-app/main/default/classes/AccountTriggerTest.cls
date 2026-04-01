@isTest
public with sharing class AccountTriggerTest {
    @isTest
    public static void testBeforeInsert() {
        List<Account> newAccs = new List<Account>();
        Account acc = new Account(Name='Test Account');
        newAccs.add(acc);
        Test.startTest();
        insert newAccs;
        Test.stopTest();
        List<Account> accList = [SELECT Id, Description FROM Account WHERE Id = :acc.Id];
            System.Assert.areEqual('Account created on: '+Date.today().format(), accList[0].Description);
    }

    @isTest
    public static void testBeforeUpdate_PhoneUpdated() {
        Account acc1 = new Account(Name='Test Trigger Account1');
        Test.startTest();
        insert acc1;

        acc1.Phone = '1234567890';
        update acc1;
        Test.stopTest();
        List<Account> accList = [SELECT Id, Description FROM Account WHERE Id = :acc1.Id];
        System.Assert.areEqual('Phone updated on: '+Date.today().format(), accList[0].Description);
    }

    @isTest
    public static void testBeforeUpdate_PhoneNotUpdated() {
        Account acc2 = new Account(Name='Test Trigger Account2', Phone='9876543210');
        
        insert acc2;

        List<Account> accList = [SELECT Id, Description FROM Account WHERE Id = :acc2.Id];
        String oldDescription = accList[0].Description;
        acc2.Name = 'ABD';
        Test.startTest();
        update acc2;
        Test.stopTest();
        accList = [SELECT Id,Name, Description FROM Account WHERE Id = :acc2.Id];
        System.Assert.areEqual(oldDescription, accList[0].Description, 'Description should not change when Phone not updated');
    }


}