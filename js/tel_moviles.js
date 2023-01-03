var app = new Vue({
  
    el: '#app',
    data: {
      enviado: false,
      telefono:'',
      nombre:'',
      email:'',
      msg:'',
      errTelefono:false,
      errTelefono2:false,
      formulario:null,
        },
        methods:{
            enviar_frm: function ( event) {

                event.preventDefault();
                var tel=app.isValid()
                app.formulario=document.getElementById('form')
                if(!tel){
                //   e.preventDefault();
                  app.errTelefono=true
                  return
                }
                else
                { app.errTelefono=false}
                
       
                const btn = document.getElementById('btnEnviar');
                btn.value = 'Enviando Email...';
                   const serviceID = 'service_xl7lpjj';
                   const templateID = 'template_8z41e1f';
                app.enviado=true
                emailjs.sendForm(serviceID, templateID, app.formulario)
                  .then(() => {
                    btn.value = 'Enviar Email';
                    app.enviado=true
                    alert('Su email fue enviado');
                  }, (err) => {
                    btn.value = 'Enviar Email';
                    alert(JSON.stringify(err));
                  });
            },
            enviar: function (e){
                
                const btn = document.getElementById('btnEnviar');

                // document.getElementById('form')
                // .addEventListener('submit', function(event) {
                  

                  var tel=app.isValid()
                  if(!tel){
                    e.preventDefault();
                    app.errTelefono=true
                    return
                  }
                  else
                  { app.errTelefono=false}
                  
                //   return
                  btn.value = 'Enviando Email...';
                     const serviceID = 'service_xl7lpjj';
                     const templateID = 'template_8z41e1f';
                  app.enviado=true
                  emailjs.sendForm(serviceID, templateID, app.frm)
                    .then(() => {
                      btn.value = 'Enviar Email';
                      app.enviado=true
                      alert('Su email fue enviado');
                    }, (err) => {
                      btn.value = 'Enviar Email';
                      alert(JSON.stringify(err));
                    });
                    
                // });
                
            },

     
             isValid() {
                var phoneRe = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
             
              return phoneRe.test(this.telefono);
            },
            celular: function(params) {
                    return navigator.userAgent.match(/Android | iphone | movile/i)
                },
            validaCall: function (e) {
                if(app.celular()==null){
                            e.preventDefault()
                            app.errTelefono2=true
                        }
                        else
                        app.errTelefono2=false
            }
        },
        
  });

// 
// document.getElementById('msg_tel').style.display = 'none';
// document.getElementById('err_Tel').style.display = 'none';
// function celular(params) {
//     return navigator.userAgent.match(/Android | iphone | movile/i)
// }


// document.getElementById("btntelefono").addEventListener('click',(e)=>{

//     if(celular()==null){
//         e.preventDefault()
//         document.getElementById('msg_tel').style.display = 'block';

//     }
//     else
//         document.getElementById('msg_tel').style.display = 'none';
// });

// const btn = document.getElementById('btnEnviar');

// function isValid() {
//     var phoneRe = / ^ \ (? (\ d {3}) \)? [-]? (\ d {3}) [-]? (\ d {4}) $ /;
    
//     return phoneRe.test(document.getElementById('err_Tel').value);
//   }

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    var tel=isValid()
//    if(!tel){
    
//     document.getElementById('err_Tel').style.display = 'block';
//      return
//    }
//    document.getElementById('err_Tel').style.display = 'none';

//    btn.value = 'Enviando Email...';
//    const serviceID = 'service_xl7lpjj';
//    const templateID = 'template_8z41e1f';
// return;
//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Enviar Email';
//       alert('Su email fue enviado');
//     }, (err) => {
//       btn.value = 'Enviar Email';
//       alert(JSON.stringify(err));
//     });
// });