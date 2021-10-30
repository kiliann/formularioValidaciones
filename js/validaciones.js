/**
 * Validaciones.js
 *

 **/

'use strict'

window.onload = iniciar;

    function iniciar(){
        let formulario = document.forms[0];
        formulario.onsubmit = validar;
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
            return false;
        }else {
            console.log('Telefono incorrecto')
            return false;
        }
    //Detectar cuando seleciona Extremadura para sacar un deplegable que ponga
    // Caceres, Badajoz.





    }