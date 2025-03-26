import  nodemailer from "nodemailer";
import { orderEmailTemplate } from '../template/order.js'
import { otpTemplate } from '../template/otp.js'


function getFormattedDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
}

function getFutureDate(daysAhead) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + daysAhead);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return futureDate.toLocaleDateString('en-US', options);
}
const orderConfirmation = async (useremail,username,orderNo) => {
    try {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        service: "Gmail",
        auth: {
          user: process.env.NODE_MAILER_USER,
          pass: process.env.NODE_MAILER_PASS,
        },
        secure: true,
      });
      
        await transporter.sendMail({
          from: process.env.NODE_MAILER_USER,
          to: useremail,
          subject: `Your Appointment is Confirmed`,
          html: orderEmailTemplate(username,orderNo,getFormattedDate(),getFutureDate(7)),
        });
      
  
      return true
    } catch (error) {
      return false
    }
}

const otpSendToCustomer = async (useremail,otp) => {
    try {



      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        service: "Gmail",
        auth: {
          user: process.env.NODE_MAILER_USER,
          pass: process.env.NODE_MAILER_PASS,
        },
        secure: true,
      });

      
        await transporter.sendMail({
          from: process.env.NODE_MAILER_USER,
          to: useremail,
          subject: `OTP`,
          html: otpTemplate(otp),
        });
      
  
      return true
    } catch (error) {
      return false
    }
}


export   {orderConfirmation,otpSendToCustomer}