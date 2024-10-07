const express = require('express');
const path = require('path');

const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();

app.use(bodyparser.urlencoded({extended:true}));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '')));


// Define a route for serving the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});


app.post("/",function(req,res)
{
  const senderMessage = req.body.message;
  const senderName = req.body.nameofperson;
  console.log(senderName)
  console.log(senderMessage)

  var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'shreyaspatil3007@gmail.com',
      pass: 'rudn vwju hpik kxss',

    } 
  })

  var mailOptions ={
    from: 'shreyaspatil3007@gmail.com',
    to: req.body.emailofperson,
    cc: 'shreyaspatil3007@gmail.com',
    subject: 'Thanks for the feedback ' + senderName,
    text : `Your below mentioned feedback will be considered !! Stay Connected . Your message => ${senderMessage}`,

  };

  transporter.sendMail(mailOptions,function(error,info)
  {
    if(error)
    {
      console.log(error);
    }
    else {
      message=> alert("Your message was sent successfully !! Thanks for the feedback 😊 ");
      res.redirect('/#contact_page');
     
      console.log("Mail successfully sent !!"+info.response);
      

     

    }
  })
  
   
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
