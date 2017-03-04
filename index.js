/**
 * Created by lucy on 02/03/2017.
 */

var schedule = require('node-schedule');

var test = require('./Controllers/EmailControllers');

//test.init();
var startTime = new Date(Date.now() + 3000);
var endTime = new Date(Date.now() + 5000);
debugger;


var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
    console.log('Time for tea!');

});
test.init();
test.init();