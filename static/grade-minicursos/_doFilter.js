
function doFilter(str, authorContainer) {
  $('#temp').html(str);
  var str = $('#temp').text();
  var fontSize = INNER_FONT_SIZE+3;

  var s = str.split(' ');
  var authorProposal = '';
  if(authorContainer) {
      if(typeof gridMaker.candidates[authorContainer] != 'undefined') {
          authorProposal = gridMaker.candidates[authorContainer][0];
      }
  }
  htmlMarkup = '<span class="zone" style="display:block;height:100%;background:url(http://www.mgalli.com/marcio.jpg)"><span class="author" >'+authorProposal+'</span>';
  htmlMarkup+= '<div class="topShade" >'
  var opacity = 9;
  for (var i=0;i<s.length;i++) {
      var el = s[i];
      var elMark = '<span class="talk" style="opacity:0.'+opacity+';margin-right:3px;font-size:'+fontSize+'px">'+el+'</span>';
      htmlMarkup+=elMark;
  }
  htmlMarkup+='</div></span>'
  return htmlMarkup;
}
