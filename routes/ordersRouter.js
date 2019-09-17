const express = require('express');
const { Order } = require('../models');
const ordersRouter = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bcnodemailer@gmail.com',
    pass: 'com17job',
  }
});

ordersRouter.post('/', async (req, res) => {
  try {
    let order = req.body;
    // mailoptions will come from req.body
    const mailOptions = {
      from: 'bcnodemailer@gmail.com',
      to: 'briancarroll112@gmail.com',
      subject: 'Test nodemailer email',
      text: 'shit worked! req.body is ' + req.body,
    };
    transporter.sendMail(mailOptions, function(error ,info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email send: ' + info.response);
      }
    })

    res.json(order)
    //link to LEI table?
    //payment?? FE/BE? either only post if stripe worked, or utilize stripe from back here

    // const orderObj = await Order.create({
    //   // email: order.email,
    //   // etc, etc.
    // })
  } catch(e) {
    console.error(e);
    res.json({message:e.message});
  }
});

module.exports = ordersRouter;
