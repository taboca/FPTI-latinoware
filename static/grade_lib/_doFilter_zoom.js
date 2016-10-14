
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
  cor1 = parseInt(Math.random()*155);
  cor2 = parseInt(Math.random()*155);
  cor3 = parseInt(Math.random()*155);
  htmlMarkup = '<span class="zone" style="display:inline-block;background-color:rgb('+cor1+','+cor2+','+cor3+');"></span><span class="author" >'+authorProposal+'</span><br>';
  var opacity = 9;
  for (var i=0;i<s.length;i++) {
      var el = s[i];
      var elMark = '<span class="talk" style="opacity:0.'+opacity+';margin-right:3px;font-size:'+fontSize+'px">'+el+'</span>';
      if(i<9) {
        opacity--;
      }
     // var elMark = '<span style="color:white;padding:.1em">'+el+'</span>';
      fontSize-=1;
      htmlMarkup+=elMark;
  }
  return htmlMarkup;
}
