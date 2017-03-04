/**
 * Created by lucy on 02/03/2017.
 */

var schedule = require('node-schedule');

var test = require('./Controllers/EmailControllers');



var rule0 = new schedule.RecurrenceRule();
rule0.dayOfWeek = [0, new schedule.Range(0,4)];
rule0.hour =07;
rule0.minute = 59;

var rule1 = new schedule.RecurrenceRule();
rule1.dayOfWeek = [0, new schedule.Range(0,4)];
rule1.hour =13;
rule1.minute = 59;


var rule2 = new schedule.RecurrenceRule();
rule2.dayOfWeek = [0, new schedule.Range(0,4)];
rule2.hour =17;
rule2.minute = 59;


var rule3 = new schedule.RecurrenceRule();
rule3.dayOfWeek = [0, new schedule.Range(0,4)];
rule3.hour =19;
rule3.minute = 59;


var rule4 = new schedule.RecurrenceRule();
rule4.dayOfWeek = [0, new schedule.Range(5,6)];
rule4.hour =12;
rule4.minute = 59;

//test.init();

var v0 = schedule.scheduleJob(rule0, function(){
    console.log('Time for tea!');
    test.init();
});

var v1 = schedule.scheduleJob(rule1, function(){
    //console.log('Time for tea!');
    test.init();

});

var v2 = schedule.scheduleJob(rule2, function(){
    //console.log('Time for tea!');
    test.init();

});

var v3 = schedule.scheduleJob(rule3, function(){
    //console.log('Time for tea!');
    test.init();
});

var v4 = schedule.scheduleJob(rule4, function(){
    //console.log('Time for tea!');
    test.init();

});




/*var startTime = new Date(Date.now() + 3000);
var endTime = new Date(Date.now() + 5000);*/
//debugger;

// var date = new Date(2017, 02, 04, 10, 17, 0);


// var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
//     console.log('Time for tea!');
//
// });

// var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(0,7)];
// rule.hour =10;
// rule.minute = 40;
//
// var j = schedule.scheduleJob(rule, function(){
//     console.log('Time for tea!');
//
// });
//
//
// var rule = new schedule.RecurrenceRule();
// var x = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(0,7)];
// rule.hour =10;
// rule.minute = 50;
//
// var j = schedule.scheduleJob(rule, function(){
//     console.log('Time for tea!');
//
// }.bind(null,x));
//
//
// x.dayOfWeek = [0, new schedule.Range(0,7)];
// x.hour =10;
// x.minute = 52;
//
