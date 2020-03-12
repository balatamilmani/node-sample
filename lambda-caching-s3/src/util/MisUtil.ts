var moment = require('moment')

export class MisUtil {
    public static isExpired = function(lastModified, ttl){
        console.log(`lastModified ${lastModified}! ttl! ${ttl}`);
        let expired = false;
        var lastSavedTime = moment(lastModified, 'ddd MMM DD YYYY HH:mm:ss ZZ');
        let currDateTime = moment().utc();
        let elapsedTime = currDateTime.diff(lastSavedTime, 'seconds');
        expired = elapsedTime>ttl?true:false;
        console.log(`expired ${expired}`);
        return expired;
    }

    public static getCurrentTime = function(){
        let currDateTime = moment().utc();
        return currDateTime;
    }
}