/**
 * Validaciones.js
 *

 **/

'use strict'

window.onload = iniciar;
//window.onload = desplegable;

    function iniciar(){
        let formulario = document.forms[0];
        formulario.onsubmit = validar;
        formulario.onclick = desplegable;
    }

    function validar(evento){
        console.log("Estoy validando");
       //evento.preventDefault();

        if(!document.getElementById('iPolitica').checked){
            console.log("politica no valida")
            return false;
        }
            //Validando Nombre
        let  nombre = document.getElementById('iNombre').value;
        if (nombre.length < 2){
                console.log("tiene menos de dos letras el nombre");
                return false;
            }
    //Validando Apellidos
        let apellido = document.getElementById('iApellidos').value;
        let arrayApellidos = apellido.split(' ');

            if (arrayApellidos.length <= 2){
                console.log('Apellidos Correcto');

            }else{
                console.log('Apellido es Incorrecto');
                return false;
            }
    //Validar Correo
        let correo = document.getElementById('iEmail').value;
        let reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        if (reLargo.test(correo)== true){
            console.log("Correo es correcto")

        }else{
            console.log("Correo es incorrecto")
        }

    //Validando DNI
        let dni = document.getElementById('iNIF').value;
        let expresionReg_dni = /^\d{8}[a-zA-Z]$/;
        if (expresionReg_dni.test(dni)){
            console.log("Dni es correcto");

        }else{
            console.log("no es correcto el dni");
            return false;
        }


    //Validar Telefono
        let telefono = document.getElementById('iTelefono').value;
        let expresionReg_Tlf = /^[+-]?[0-9]+$/;
        if (expresionReg_Tlf.test(telefono)){
            console.log('Es correcto');

        }else {
            console.log('Telefono incorrecto')
            return false;
        }









    }

    function desplegable(evento){
        //Detectar cuando seleciona Extremadura para sacar un deplegable que ponga
        // Caceres, Badajoz.
        //Evento change sacado de https://es.stackoverflow.com/questions/72141/obtener-el-valor-del-select-seleccionado-javascript-dom/72146
        var select = document.getElementById('sComunidad');
        select.addEventListener('change',
            function(){
                var selectedOption = this.options[select.selectedIndex];
                console.log(selectedOption.value + ': ' + selectedOption.text);


                //https://www.discoduroderoer.es/como-crear-un-select-html-en-javascript/
                //Una vez detectado el evento cramos los menus
                if (selectedOption.value == 11){
                    let div1 = document.getElementsByClassName('sunOption')[0];
                    let select2 = document.createElement('select');
                    select2.classList.add('col-75');
                    let option1 = document.createElement('Option');
                    div1.appendChild(select2);
                    option1.setAttribute('value', 'Caceres');
                    let option1Texto = document.createTextNode("Caceres")
                    option1.appendChild(option1Texto);
                    let option2 = document.createElement('Option');
                    option2.setAttribute('value', 'Badajoz');
                    let option2Texto = document.createTextNode('Badajoz');
                    option2.appendChild(option2Texto)
                    select2.appendChild(option1);
                    select2.appendChild(option2)


                }

            });
    }