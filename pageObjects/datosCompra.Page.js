import base from "./base.Page";

class datosCompra extends base{

    get nombreConductor (){return $('#nombreConductor')}
    get apellidoConductor(){return $('#apellidoConductor')}
    get diaNacConductor(){return $('#diaNacConductor')}
    get mesNacConductor(){return $('#mesNacConductor')}
    get anoNacConductor(){return $('#anoNacConductor')}
    get dniConductor(){return $('#dniConductor')}
//--------------------------------------------------------
    get nombreContacto(){return $('#nombreContacto')}
    get emailContacto(){return $('#emailContacto')}
    get areaTelContacto(){return $('#areaTelContacto')}
    get telContacto(){return $('#telContacto')}
//--------------------------------------------------------------------------------
    get seleccionarBancoDP(){return $('#av-field-tarjeta__banco')}
    get seleccionarCantCuotas(){return $('#av-field-tarjeta__cuotas')}
    get numeroDeTarjeta(){return $('#av-field-tarjeta__numero')}
    get numeroDeCodigoSeguridad(){return $('#av-field-tarjeta__codigo')}
    get vencimientoTarjetaMesDP(){return $('#av-field-tarjeta__vence--mes')}
    get vencimientoTarjetaAnioDP(){return $('#av-field-tarjeta__vence--ano')}
//--------------------------------------------------------------------------------- 
    get nombreTitularTarjeta(){return $('#av-field-tarjeta__nombre')}
    get dniTitularTarjeta(){return $('#av-field-tarjeta__titular--dni')}
    get NacTitularTarjeta(){return $('#av-field-tarjeta__titular--fechanac')}
    get domicilioTitularTarjeta(){return $('#av-field-tarjeta__titular--domicilio')}
    get aceptarTerminosCondiciones(){return $('#av-field-terminos__aceptar')}

    get TituloQuienVaAconducir(){return $('#nombreRequired')}
    get terminosYCondiciones(){return $('#terminosCondicionesTarjetaRequired')}

    completarQuienVaAConducir(nombre,apellido,dia,mes,anio,dni){
        super.enviarTexto(this.nombreConductor,nombre)
        super.enviarTexto(this.apellidoConductor,apellido)
        super.enviarTexto(this.diaNacConductor,dia)
        super.enviarTexto(this.mesNacConductor,mes)
        super.enviarTexto(this.anoNacConductor,anio)
        super.enviarTexto(this.dniConductor,dni)
    }
    completarDatosContacto(nombre,mail,area,telefono){
        super.enviarTexto(this.nombreContacto,nombre)
        super.enviarTexto(this.emailContacto,mail)
        super.enviarTexto(this.areaTelContacto,area)
        super.enviarTexto(this.telContacto,telefono)
        
    }
    completarDatosTarjeta(banco,cuotas,numeroTC,codSeg,mes,anio){
        this.seleccionarBancoDP.selectByVisibleText(banco)   
        browser.pause(1000) 
        if(this.seleccionarCantCuotas.isEnabled()){
        this.seleccionarCantCuotas.selectByVisibleText(cuotas)
        }
        super.enviarTexto(this.numeroDeTarjeta,numeroTC)
        super.enviarTexto(this.numeroDeCodigoSeguridad,codSeg)
        this.vencimientoTarjetaMesDP.selectByVisibleText(mes)
        this.vencimientoTarjetaAnioDP.selectByVisibleText(anio)
        
    }
    completarDatosTitularTarjeta(nombreCompleto,dni,FechaNac,domicilio){

        super.enviarTexto(this.nombreTitularTarjeta,nombreCompleto)
        super.enviarTexto(this.dniTitularTarjeta,dni)
        super.enviarTexto(this.NacTitularTarjeta,FechaNac)
        super.enviarTexto(this.domicilioTitularTarjeta,domicilio)
        super.clickWebElement(this.aceptarTerminosCondiciones)
       
    }

}
export default new datosCompra()