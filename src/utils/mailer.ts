import nodemailer from 'nodemailer'

export async function sendLoginEmail({
  email,
  url,
  token,
  verifyTokenUrl
}: {
  email: string
  url: string
  token: string,
  verifyTokenUrl: string
}) {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  const info = await transporter.sendMail({
    from: '"Jane Doe" <j.doe@example.com>',
    to: email,
    subject: 'Login to your account',
    html: `Login by clicking <a href="${url}/login#token=${token}">HERE</a><br /> or paste this token: ${token} into <a href="${verifyTokenUrl}">Verify Token</a> page and click 'verify'<br />This token will be valid for next 5 minutes`,
  })

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
  
}
