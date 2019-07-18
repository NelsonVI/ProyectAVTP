export default class base {
    /* 
    Esta clase la creo para llamar a metodos que siempre se utilizan en todas las paginas
    es lo que siempre hago cuando lo hago en java 
    */

    abrirBrowser (PagWeb) {
        browser.url(PagWeb)
        browser.maximizeWindow();
    }
    clickWebElement(locator){
        locator.click()
    }
    enviarTexto(locator,texto){
        locator.setValue(texto)
    }
  
}

