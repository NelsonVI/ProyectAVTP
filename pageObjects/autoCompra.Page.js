import base from "./base.Page";
/*
Por practica propia y recomendada creo una clase por pagina con sus Elementos y acciones a realizar en cada pagina
*/
class autoCompra extends base{

    //WebElements de las paginas. Devuelve su ubicacion. 
    
    get btncerrariframe () {return $("//div[@class='widget_fb_close']")}
    get lugarDeRetiro (){return $('#retiro')}
    get seleccionarDestinodeRetiro() { return $('#ui-id-3')}
    get fechaDesde (){return $('#desde')}
    get fechaHasta (){return $('#hasta')}
    get horaDesde(){return $('#horadesde')}
    get horaHasta(){return $('#horahasta')}
    get buscarAutoBtn(){return $('#buscarAutos')}
    get iframe(){return $('#lightbox-iframe-e1f2dfbc-d2de-46a3-b573-25937c3612d7')}
    get btnCompradeAuto(){return $("/html/body/main/ui-view/div[2]/div/main/div[2]/div[2]/div[1]/ng-include/div/div[3]/ul/li[4]/form/button")}
    
    //Colocar Pagina a testear
    abrirBrowser(){super.abrirBrowser('https://www.avantrip.com/autos/')}
    //cierra el Iframe inicial
    IframeCerrar(){super.clickWebElement(this.btncerrariframe)}

    completarCiudadDeRetiro(ciudad){

        super.enviarTexto(this.lugarDeRetiro,ciudad)
        if (this.seleccionarDestinodeRetiro.isEnabled){
            super.clickWebElement(this.seleccionarDestinodeRetiro)
        }else {console.log ("Destino no presente")}
    
    }
   
    completarFechaHoraDesde(fecha,hora){

        if(this.fechaDesde.isEnabled() && this.horaDesde.isEnabled()){
        super.enviarTexto(this.fechaDesde,fecha)
        super.clickWebElement(this.fechaDesde)
        this.horaDesde.selectByVisibleText(hora)

        }else{console.log("Fecha Desde y Hora Desde no estan habilitados")}
    }
    completarFechaHoraHasta(fecha,hora){
        if(this.fechaHasta.isEnabled() && this.horaHasta.isEnabled()){
        super.enviarTexto(this.fechaHasta,fecha)
        browser.pause(1000)
        super.clickWebElement(this.horaHasta)
        this.horaHasta.selectByVisibleText(hora)
        }else{console.log("Fecha hasta y Hora hasta no estan habilitados")}
    }    
    clickBuscarAuto(){super.clickWebElement(this.buscarAutoBtn)}

    elegirOpcionDeCompra(){
        //Aca pagina donde elegimos la primera opcion.
        //Lo inclui en esta misma clase ya que solo es una accion a realizar en esta pagina
        
        this.btnCompradeAuto.isExisting()
        super.clickWebElement(this.btnCompradeAuto)
    }
}
export default new autoCompra()