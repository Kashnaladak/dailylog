function insertDailyLog() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  
  // Insert today's date as a date chip
  var today = new Date();
  var dateText = body.insertParagraph(0, Utilities.formatDate(today, Session.getScriptTimeZone(), 'MMM dd, yyyy'));
  dateText.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  
  // Insert "Main Focus:"
  var mainFocus = body.insertParagraph(1, "Main Focus:");
  mainFocus.setBold(true);

  // Insert "1:1s" and an empty bullet list
  body.insertParagraph(2, "\n1:1s");
  body.insertListItem(3, "").setGlyphType(DocumentApp.GlyphType.BULLET);
  
  // Insert "Tasks" and an empty bullet list
  body.insertParagraph(4, "Tasks");
  body.insertListItem(5, "").setGlyphType(DocumentApp.GlyphType.BULLET);
}

function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Daily Log')
    .addItem('Insert Daily Log', 'insertDailyLog')
    .addToUi();
}
