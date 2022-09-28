const botao = document.querySelector('.botao')
const email = document.querySelector('#ilogin')

botao.addEventListener('click', () => {
  const nodemailer = require('nodemailer')

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // True para 465, false para outras
    auth: {
      user: 'davivirtue@gmail.com',
      pass: 'ayxxlzjjvpqjhgkv'
    }
  })
  transport
    .sendMail({
      from: 'Davi Raeder <davivirtue@gmail.com>',
      to: `${email.value}`,
      subject: 'Enviando email com Nodemailer',
      html: '<h1>Esqueci a minha senha</h1> <p>Caso tenha esquecido a sua senha entre em contato com o suporte para mais detalhes</p>',
      text: 'Esqueci a minha senha Caso tenha esquecido a sua senha entre em contato com o suporte para mais detalhes',
    })
  .then(() => console.log('Email enviado com sucesso!'))
  .catch(err => console.log('Erro ao enviar email: ', err))
})