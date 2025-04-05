function otpTemplate(otp){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Password Reset Code</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f5f0; color: #333333; line-height: 1.6;">
        <!-- Header Banner -->
        <div style="background-color: #6b3c20; color: #ffffff; text-align: center; padding: 15px 0; font-size: 16px;">
            Secure Account Access
        </div>
        
        <!-- Logo Section -->
        <div style="text-align: center; padding: 20px; background-color: #f9f5f0;">
            <img src="https://res.cloudinary.com/dlasb4krd/image/upload/v1743002985/johfye5u0h9hs3mhzjge.png" alt="Loop Wear Logo" style="max-width: 180px; height: auto;">
        </div>
        
        <!-- Main Content -->
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="color: #6b3c20; font-size: 24px; margin-bottom: 20px; font-weight: 500; text-align: center;">Password Reset Code</h1>
            
            <p style="margin-bottom: 25px; color: #555555; text-align: center;">We received a request to reset your password. Please use the verification code below to complete the process:</p>
            
            <!-- OTP Code Box -->
            <div style="background-color: #f9f5f0; padding: 30px; border-radius: 6px; margin: 30px auto; text-align: center; max-width: 300px; border: 1px dashed #6b3c20;">
                <h2 style="color: #6b3c20; font-size: 18px; margin-top: 0; margin-bottom: 15px; font-weight: 500;">Your Verification Code</h2>
                
                <p style="margin: 0; color: #6b3c20; font-size: 36px; font-weight: bold; letter-spacing: 8px;">${otp}</p>
            </div>
            
            <!-- Security Notice -->
            <div style="background-color: #f9f5f0; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                <h3 style="color: #6b3c20; font-size: 16px; margin-top: 0; margin-bottom: 10px; font-weight: 500;">Important Security Information</h3>
                <p style="margin: 0 0 10px 0; color: #555555;">This code will expire in 10 minutes. If you did not request a password reset, please ignore this email or contact customer support immediately.</p>
                <p style="margin: 0; color: #555555;">Never share this code with anyone, including Loop Wear staff. Our team will never ask for your verification code.</p>
            </div>
            
            <p style="margin-bottom: 25px; color: #555555; text-align: center;">If you have any questions, please contact our customer service team at <a href="mailto:support@loopwear.com" style="color: #6b3c20; text-decoration: underline;">support@loopwear.com</a> or call us at (800) 123-4567.</p>
            
            <p style="color: #555555; text-align: center;">Thank you,<br>
            The Loop Wear Team</p>
        </div>
        
        <!-- Footer -->
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; color: #777777; font-size: 14px;">
            <p style="margin-bottom: 15px;">Fashion That Circulates, Style That Lasts.</p>
            
            <!-- Social Media Icons -->
            <div style="margin-bottom: 20px;">
                <a href="#" style="display: inline-block; margin: 0 10px; color: #6b3c20; text-decoration: none;">Instagram</a>
                <a href="#" style="display: inline-block; margin: 0 10px; color: #6b3c20; text-decoration: none;">Facebook</a>
                <a href="#" style="display: inline-block; margin: 0 10px; color: #6b3c20; text-decoration: none;">Pinterest</a>
            </div>
            
            <p style="margin-bottom: 10px;">© 2025 Loop Wear. All rights reserved.</p>
            <p style="margin: 0;">123 Fashion Street, New York, NY 10001</p>
            
            <!-- Unsubscribe Link -->
            <p style="margin-top: 20px; font-size: 12px;">
                <a href="#" style="color: #999999; text-decoration: underline;">Unsubscribe</a> | 
                <a href="#" style="color: #999999; text-decoration: underline;">View in Browser</a> | 
                <a href="#" style="color: #999999; text-decoration: underline;">Privacy Policy</a>
            </p>
        </div>
    </body>
    </html>
    `
}

export {
    otpTemplate
};
