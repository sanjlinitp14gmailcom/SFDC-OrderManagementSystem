trigger AccountTrigger on Account (before insert, before update) {
    switch on Trigger.operationType {
        when BEFORE_INSERT {
            AccountTriggerHandler.beforeInsert(Trigger.new);
        }
        when BEFORE_UPDATE {
            AccountTriggerHandler.beforeUpdate(Trigger.new, Trigger.oldMap);
        }
    }
}