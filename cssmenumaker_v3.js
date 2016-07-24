/*
Menu contains custom CSS, different than that on the cssmenumaker.com site. 
Only use the cssmenumaker.com builder to change menu items. Copy HTML only as a single
embedded object in PageCloud.  PageCloud is already linked to the CSS file on github.
UPDATE AND COPY ONLY HTML TO PAGECLOUD
*/
$("#cssmenu").menumaker({
  title: "Menu",
  breakpoint: 768,
  format: "multitoggle"
});

$("#cssmenu").prepend("<div id='menu-line'></div>");

var foundActive = false,
  activeElement, linePosition = 0,
  menuLine = $("#cssmenu #menu-line"),
  lineWidth, defaultPosition, defaultWidth = 0;

$("#cssmenu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $("#cssmenu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();
defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$("#cssmenu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});
