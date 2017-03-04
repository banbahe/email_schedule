var _dataraw = require('../Config/DataRAW');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

//var emailModels = require('../Models/EmailModels');

module.exports = {
    init: function () {


        // subject
        var vsubject = _dataraw.subject();
        vsubject = vsubject[Math.floor(Math.random() * vsubject.length)];

        // body
        var vbody = _dataraw.body();
        vbody = vbody [Math.floor(Math.random() * vbody.length)];

        // Email sender
        var vsender = _dataraw.senderconfig();
        vsender = vsender[Math.floor(Math.random() * vsender.length)];


        console.log(vsender.auth.user);

        var transporter = nodemailer.createTransport(
            smtpTransport(vsender)
        );
        transporter.sendMail({
            to: 'gmedina@integrasoftware.com.mx',
            from: vsender.auth.user,
            subject: vsubject,
            html: vbody


        }, function (error) {
            if (error) {
                console.log(error);
                //callback(error);
            } else {
                //console.log('Message sent');
                console.log('Message sent', 'response.response');

            }
        });


    }
}