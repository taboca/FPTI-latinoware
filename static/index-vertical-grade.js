/* Grids On The Fly */

$(document).ready(function() {

    setTimeout('startEngine()',1000);

    register("/main/middle"    , "meio"  , "./grade/index.html", iframeTemplate);
    register("/main/middle2"   , "meio2" , "./grade-minicursos/index.html", iframeTemplate);
    register("/main/topheader" , "topo"  , "./header-vertical/index.html", iframeTemplate);
    register("/main/hora"      , "hora"  , "./tempo/index.html", iframeTemplate);
    register("/main/data"      , "data"  , "./tempo/date.html", iframeTemplate);
    compile();

});

function startEngine() {
   s1();
//   setTimeout("cicleMidia()",TEMPO_INICIO_MIDIA);
}

function cicleMidia() {
   setTimeout( function () {
	var doc = $("#main #middle #abas").get();
	doc = document.getElementById("meio").contentDocument;
	cc.send( doc.getElementById("galeria").contentDocument, "container", "rotate");
	cicleMidia();
   }, TEMPO_REFRESH_MIDIA);
}

function s1() {
  if(document.location.toString().indexOf("mode")>-1) {
    var param = document.location.toString().split("mode=");
    if(param[1]=="tv") {
      //document.getElementById("viewport").style.width="1080";
      //document.getElementById("viewport").style.height="1920";
      animate();
    }
  }
}

var i =0;
function animate() {
  if(i==0) {
    //$('#screen1').attr('style','transition-property:transform;transition-duration:4s; transform:translate(0,-70px) rotateY(-360deg) rotateX(-360deg) rotateZ(360deg);transform-origin:700px 100px  ')
    i=1;
  } else {
    //$('#screen1').attr('style','transition-property:transform;transition-duration:4s; transform:translate(0,-70px) rotateY(0deg) rotateX(0deg) rotateZ(0deg);transform-origin:700px 100px  ')
    i=0;
  }
  //tv.setup();
  //tv.add($('#animation li'));
  //tv.play();
  setTimeout("animate()",TEMPO_REFRESH);
}
