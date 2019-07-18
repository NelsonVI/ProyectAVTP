import assert from 'assert'

import autoCompra from '../pageObjects/autoCompra.Page'
import datosCompra from '../pageObjects/datosCompra.Page'

describe('Avantrip Ejercicio', () => {
	it('Pasos para rentar un auto', () => {
        /*
        En test.js instancio todo y agrego argumentos para que sea facil de modificar.
        */
        autoCompra.abrirBrowser()
        autoCompra.IframeCerrar()
        autoCompra.completarCiudadDeRetiro("Mendoza")
        //Para completar fecha y hora seguir el con formato "dd/MM/yyyy" para la fecha y la hora es 24hs con el formato "12:00" 
        autoCompra.completarFechaHoraDesde("29/07/2019","13:00")
        autoCompra.completarFechaHoraHasta("31/07/2019","11:00")
        autoCompra.clickBuscarAuto()
        autoCompra.elegirOpcionDeCompra()

        browser.pause(1000) //Solo darle tiempo de carga a la WEB
        //Completar con nombre, apellido, dia, mes, anio, dni como parametros
        datosCompra.completarQuienVaAConducir("Juan","Matienzo","12","05","1985","20878555")
        //Completar con nombre, mail, area, telefono
        datosCompra.completarDatosContacto("Juan Matienzo","jmatienzo@mail.com","11","15978412")
        //Completar con banco, cuotas, numeroTC, codSeg, mes, anio. 
        datosCompra.completarDatosTarjeta("Banco Ciudad","12","4502080879895621","123","9","22")
        //Completar con nombreCompleto, dni, FechaNac, domicilio
        datosCompra.completarDatosTitularTarjeta("Juan Matienzo","20878555","12/05/1985","Caseros 4585")
        browser.pause(5000) //Para chequear los datos completos
        

        //falta las verificaciones. 
    })
})


/// to run the test --------  ./node_modules/.bin/wdio wdio.conf.js
