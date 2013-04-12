window.addEventListener("load", function(e) { 
    var notificationService = Components.classes["@mozilla.org/messenger/msgnotificationservice;1"].getService(Components.interfaces.nsIMsgFolderNotificationService);
    notificationService.addListener(newMailListener, notificationService.msgAdded);
}, false);

var newMailListener = {
    msgAdded: function(aMsgHdr) {
        if( !aMsgHdr.isRead ) {
            window.getAttention();
        }
    }
}
