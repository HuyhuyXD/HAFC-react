const nodemailer = require('nodemailer');

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',        // 🔁 Gmail của bạn
      pass: 'your-app-password'            // 🔐 App Password (không phải mật khẩu thường)
    }
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',            // 🔁 Email nhận liên hệ
    subject: 'Liên hệ từ website',
    text: `Tên: ${name}\nEmail: ${email}\nNội dung: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Gửi liên hệ thành công!' });
  } catch (error) {
    console.error('Lỗi gửi mail:', error);
    res.status(500).json({ success: false, message: 'Gửi liên hệ thất bại!' });
  }
};
