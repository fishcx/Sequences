function doGet(e) {
   
  var output= HtmlService
      .createTemplateFromFile('main.html')
      
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
  output.setTitle('Sequences Generator');
  
  return output;
 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}