function doGet() {
    var temp = HtmlService.createTemplateFromFile("boty_page");
    return temp.evaluate();
}
function userClicked(uIn){
  var id1 = "HIER DIE ID EINER GOOGLE SHEETS SEITE EINFÜGEN";
  var ss = SpreadsheetApp.openById(id1);
  var ws = ss.getSheetByName("data");
  var nD = new Date();
  
  ws.appendRow([uIn.g1,uIn.uName, nD]); 
  ws.appendRow([uIn.g2, uIn.uName, nD]);
}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
