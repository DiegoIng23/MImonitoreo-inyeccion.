Editor
Código.gs
Index.html
.

40414243444546474849
/**
 *  * Proyecto: Monitoreo de Inyección (Multi-marca)
  * Archivo: Código.gs
   */

   // 1. Esta función "dibuja" la interfaz en tu navegador (Oppo/Fold/Tab)
   function doGet() {
     return HtmlService.createHtmlOutputFromFile('Index')
         .setTitle('Control de Inyección - Diego Prieto')
             .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)

