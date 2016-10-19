$(document).ready(function() {

    register("/main/middle"    , "meio"  , "./grade/index.html", iframeTemplate);
    register("/main/middle2"   , "meio2" , "./grade-minicursos/index.html", iframeTemplate);
    register("/main/topheader" , "topo"  , "./header-vertical/index.html", iframeTemplate);
    register("/main/hora"      , "hora"  , "./tempo/index.html", iframeTemplate);
    register("/main/data"      , "data"  , "./tempo/date.html", iframeTemplate);
    register("/main/sectionC"   , "fHardware" , "./grade-hardware/index.html", iframeTemplate);
    compile();

});
