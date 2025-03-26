function orderEmailTemplate(username,orderNo,date,returnDate){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Order Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f5f0; color: #333333; line-height: 1.6;">
        <!-- Header Banner -->
        <div style="background-color: #6b3c20; color: #ffffff; text-align: center; padding: 15px 0; font-size: 16px;">
            Glad to Have You! Stay Stylish, Spend Smart
        </div>
        
        <!-- Logo Section -->
        <div style="text-align: center; padding: 20px; background-color: #f9f5f0;">
            <img src="https://res.cloudinary.com/dlasb4krd/image/upload/v1743002985/johfye5u0h9hs3mhzjge.png" alt="Loop Wear Logo" style="max-width: 180px; height: auto;">
        </div>
        
        <!-- Main Content -->
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="color: #6b3c20; font-size: 24px; margin-bottom: 20px; font-weight: 500;">Order Confirmation</h1>
            
            <p style="margin-bottom: 25px; color: #555555;">Dear ${username},</p>
            
            <p style="margin-bottom: 25px; color: #555555;">Thank you for your order! We're excited to confirm that your rental has been successfully placed. Below are the details of your order:</p>
            
            <!-- Order Details -->
            <div style="background-color: #f9f5f0; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                <h2 style="color: #6b3c20; font-size: 18px; margin-top: 0; margin-bottom: 15px; font-weight: 500;">Order Summary</h2>
                
                <p style="margin: 5px 0; color: #555555;"><strong>Order Number:</strong> #${orderNo}</p>
                <p style="margin: 5px 0; color: #555555;"><strong>Order Date:</strong> ${date}</p>
                <p style="margin: 5px 0; color: #555555;"><strong>Payment Method:</strong> Cash On Delivery</p>
            </div>
            
           
           
            
            
            <!-- Return Instructions -->
            <div style="background-color: #f9f5f0; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                <h3 style="color: #6b3c20; font-size: 16px; margin-top: 0; margin-bottom: 10px; font-weight: 500;">Return Instructions</h3>
                <p style="margin: 0 0 10px 0; color: #555555;">Please return your items by ${returnDate}. A prepaid return label is included in your package.</p>
                <p style="margin: 0; color: #555555;">Remember our motto: Rent. Wear. Return. Repeat — Sustainable Fashion at Your Fingertips.</p>
            </div>
            
            
            
            <p style="margin-bottom: 25px; color: #555555;">If you have any questions about your order, please contact our customer service team at <a href="mailto:support@loopwear.com" style="color: #6b3c20; text-decoration: underline;">support@loopwear.com</a> or call us at (800) 123-4567.</p>
            
            <p style="color: #555555;">Thank you for choosing sustainable fashion,<br>
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
    orderEmailTemplate
};