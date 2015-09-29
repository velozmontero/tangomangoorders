var port=3001;

var express= require('express');
var fs= require('fs');
var nodemailer= require('nodemailer');
var smtpTransport= require('nodemailer-smtp-transport');
var wellknown= require('nodemailer-wellknown');
var bodyParser= require('body-parser');

var app= express();
app.use(bodyParser.urlencoded({extended: true}))

var transporter= nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'fvm.productions04@gmail.com',
        pass:'3900Java' 
    }
});

var mailOptions= {
    from: 'New Order <fvm.productions04@gmail.com>',
    subjects: 'Re: New Order',
    to: 'velozmontero@gmail.com'
}

app.post('/email', function(req, res){

    var emailBody= "New Order from: "+req.body.store-name;
    emailBody += "<br>Phone: "+req.body.phone+"<br>Date: "+req.body.ddate+"<br>Time: "+req.body.hora+"<br>Email: "+req.body.email+
    "<br>Message: "+req.body.message;
    
    mailOptions.html= emailBody;
    transporter.sendMail(mailOptions, function(error,info){
        if (error) {
            console.log(error);
            res.end("Somthing went wrong");
        }else{
            console.log('Message sent '+ info.response);
            res.end("Email sent to: "+mailOptions.to);
        }
    });
});
app.get('/', function(req,res){
    res.end("post the contact form to the /email URL in order to have "+"it forwarded to velozmontero@gmail.com");
});

app.listen(port);
console.log("server listening on port "+ port);