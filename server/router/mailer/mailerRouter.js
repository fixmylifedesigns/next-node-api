const router = require("express").Router();
const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");
const hbs = require("nodemailer-handlebars");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
});

router.post("/", (req, res) => {
  const body = req.body;
  var m = new Date()
  var dateString =
    m.getUTCFullYear() + "/" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      // partialsDir: __dirname + "/views",
      layoutsDir: __dirname + "/views",
      defaultLayout: body.layout + ".handlebars",
    },
    viewPath: __dirname + "/views",
    // extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));

  let mailOptions = {
    // from: "contact@duranirving.com",
    to: body.to,
    subject: body.name + " - " + body.subject || `New submitted to: ${body.url}`,
    template: body.layout,
    context: {
      url: body.url,
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      time: dateString
    },
  };

  transporter.sendMail(mailOptions, (err, data) => {
    let pass = process.env.EMAIL;
    if (err) {
      return res
        .status(500)
        .json({ err, message: "error sending your email", pass });
    }
    return res.status(200).json(data);
  });
});

module.exports = router;
