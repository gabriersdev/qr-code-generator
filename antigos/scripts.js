document.querySelector('#btn').addEventListener('click', () => {
  let texto = document.querySelector('#texto').value;
  let qrCode = document.querySelector('#qrCode');
  let imgDownload = document.querySelector('#imgDownload');

  if(texto == undefined || texto == NaN || texto == null || texto == ""){
    texto = "";
    let content = 'https://api.qrserver.com/v1/create-qr-code/?data=' + 'Hello-World' + '&size=250x250';
    console.log(content);
    qrCode.setAttribute('src', content);
    imgDownload.setAttribute('href', content);
  }else{
    let content = 'https://api.qrserver.com/v1/create-qr-code/?data=' + texto + '&size=250x250';
    qrCode.setAttribute('src', content);
    imgDownload.setAttribute('href', content);
    console.log(content);
    console.log('QR Code gerado')
  }
});