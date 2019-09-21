var TL = new TimelineMax();;

main();

function main() {


  document.addEventListener("keydown", keyPressCheck, false);
  // TL.eventCallback("onUpdate", updateSlider);


  TL.add( metronome() );
  TL.add( zoomToElement(["#r","#s"], 100), 0 );

  TL.add( baseSequence(), 3 );
  TL.addLabel("start")

  TL.add( root3grid(), "+=" + BEAT * 2 ); //, "+=" + BEAT
  TL.add( g01() );
  TL.addLabel("g01");
  TL.add( g01remove(), "+=" + BEAT * 4 );

  TL.add( fadeRoot3());

  // TL.addLabel("root5");
  TL.add( root5grid(), "+=" + BEAT * 4 );
  TL.add( g01() );
  TL.addLabel("g01-b");
  TL.add( g01remove(), "+=" + BEAT * 4 );

  TL.add( fadeRoot5(), "+=" + BEAT * 4);

  // TL.addLabel("root2");
  TL.add( root2grid(), "+=" + BEAT * 4 );
  TL.add( g01() );
  TL.addLabel("g01-c");
  TL.add( g01remove(), "+=" + BEAT * 4 );

  TL.add( fadeRoot2(), "+=" + BEAT * 4);

  // TL.addLabel("squares");
  TL.add( squares(), "+=" + BEAT * 4 );
  TL.add( g01() );
  TL.addLabel("g01-d");
  TL.add( g01remove(), "+=" + BEAT * 4 );

  TL.add( fadeSquares(), "+=" + BEAT);

  // TL.addLabel("squares");
  TL.add( squares3(), "+=" + BEAT  * 4);
  TL.add( g01() );
  TL.addLabel("g01-e");
  TL.add( g01remove(), "+=" + BEAT  * 4);

  TL.add( fadeSquares3(), "+=" + BEAT);


  TL.add( hexagon(), "+=" + BEAT  * 4);
  TL.add( g01() );
  TL.addLabel("g01-f");
  TL.add( g01remove(), "+=" + BEAT  * 4);

  TL.add( fadeHexagon(), "+=" + BEAT);

  TL.add( circumTriangle(), "+=" + BEAT  * 4 );
  TL.add( g01() );
  TL.addLabel("g01-g");
  TL.add( g01remove(), "+=" + BEAT  * 4 );

  TL.add( fadeCircumTriangle(), "+=" + BEAT);

  TL.add( g01(), "+=" + BEAT  * 2 );
  TL.addLabel("review1");
  TL.add( review1() );
  TL.addLabel("review2");
  TL.add( review2() );


  // TL.delay(4);
  TL.timeScale(1  );
  console.log("duration: " + TL.duration())
  TL.play("");

}

//template
function sequence() {

  var seqTL = new TimelineMax();

  seqTL.add( selectElements("#e") );

  seqTL.add( unSelectElements("#e") );

  return seqTL;

}

function metronome() {

  var seqTL = new TimelineMax( {repeat:-1} );

  seqTL.call( tick, [], this, BEAT );

  return seqTL;

}


function review1() {

  var seqTL = new TimelineMax();

  seqTL.add( selectElements("#e") );

  seqTL.add( selectElements("#c_1"), "+=2" );
  seqTL.add( unSelectElements("#e") );

  seqTL.add( selectElements("#d_2"), "+=2" );
  seqTL.add( unSelectElements("#c_1") );

  seqTL.add( selectElements("#c_2"), "+=2" );
  seqTL.add( unSelectElements("#d_2") );

  // seqTL.add( selectElements("#c_3"), "+=2" );

  seqTL.add( selectElements("#d_4"), "+=2" );
  seqTL.add( unSelectElements("#c_2") );

  seqTL.add( selectElements("#r_3"), "+=2" );
  seqTL.add( unSelectElements("#d_4") );

  seqTL.add( unSelectElements("#r_3"), "+=2" );


  seqTL.add( selectElements("#e") , "+=2");
  seqTL.add( selectElements("#c_1"), "+=2" );
  seqTL.add( selectElements("#d_2"), "+=2" );
  seqTL.add( selectElements("#c_2"), "+=2" );
  seqTL.add( selectElements("#d_4"), "+=2" );
  seqTL.add( selectElements("#r_3"), "+=2" );

  seqTL.add( unSelectElements("#r_3") );
  seqTL.add( unSelectElements("#d_4") );
  seqTL.add( unSelectElements("#c_2") );
  seqTL.add( unSelectElements("#d_2") );
  seqTL.add( unSelectElements("#c_1") );
  seqTL.add( unSelectElements("#e") );

  return seqTL;

}

function review2() {

  var seqTL = new TimelineMax();

  // root 3
  seqTL.add( selectElements("#e") , "+=2");

  seqTL.add( zoomToElement(["#e"], 50) );
  seqTL.add( setPolygon("#t3") );

  // root 5
  seqTL.add( selectElements("#c_1") , "+=4");

  seqTL.add( unSelectElements("#e") );
  seqTL.add( hideElements("#t3") );
  seqTL.add( zoomToElement(["#c_1"], 50) );

  seqTL.add( setPolygon("#q2") );
  seqTL.add( setPolygon("#q4") );


  // root 2
  seqTL.add( selectElements("#d_2") , "+=4");

  seqTL.add( unSelectElements("#c_1") );
  seqTL.add( hideElements("#q2") );
  seqTL.add( hideElements("#q4") );
  seqTL.add( zoomToElement(["#d_2"], 50) );
  seqTL.add( setPolygon("#q5") );


  // squares
  seqTL.add( selectElements("#c_2") , "+=4");
  seqTL.add( zoomToElement(["#c_2"], 50) );
  seqTL.add( setPolygon("#q6") );
  seqTL.add( setPolygon("#q7") );

  seqTL.add( unSelectElements("#d_2") );
  seqTL.add( hideElements("#q5") );


  //hexagon
  seqTL.add( selectElements("#r_3") , "+=4");
  seqTL.add( zoomToElement(["#r_3"], 50) )
  seqTL.add( setPolygon("#poly1"));

  seqTL.add( unSelectElements("#c_2") );
  seqTL.add( hideElements("#q6") );
  seqTL.add( hideElements("#q7") );

// circumtriangle
  seqTL.add( selectElements("#d_4") , "+=4");
  seqTL.add( zoomToElement(["#d_4"], 50) );
  seqTL.add( setPolygon("#t4") );

  seqTL.add( unSelectElements("#r_3") );
  seqTL.add( hideElements("#poly1") );


  return seqTL;

}

function root3grid() {

  var seqTL = new TimelineMax();

  var points = [
    "#A",
    "#B",
    "#E",
  ];

  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#f" ) );
  seqTL.add( drawLine( "#g" ), "-=" + BEAT  );

  seqTL.add( setPolygon("#t1") );

  seqTL.add( unHighlightPoint( points ) );

  points = [
    "#A",
    "#B",
    "#F",
  ];

  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#h" ) );
  seqTL.add( drawLine( "#i" ), "-=" + BEAT  );

  seqTL.add( setPolygon("#t2") );

  seqTL.add( unHighlightPoint( points ) );

  points = [
    "#I",
    "#K",
  ];

  seqTL.add( setPoint( points ) );
  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#k" ) );

  seqTL.add( unHighlightPoint( points ) );

  points = [
    "#M",
    "#J",
  ];

  seqTL.add( setPoint( points ) );
  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#j" ) );

  seqTL.add( unHighlightPoint( points ) );


  seqTL.add( hideElements(["#t1", "#t2"]) );

  var points = [
    "#I",
    "#E",
    "#K",
  ];

  seqTL.add( highlightPoint( points ) );

  seqTL.add( setPolygon("#t3") );

  seqTL.add( unHighlightPoint( points ) );


  var points = [
    "#I",
    "#B",
    "#A",
    "#K",
  ];

  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#l" ) );
  seqTL.add( drawLine( "#h_2" ), "-=1" );

  seqTL.add( unHighlightPoint( points ) );

  seqTL.add( setPoint("#H") );

  var points = [
    "#H",
    "#K",
  ];

  seqTL.add( highlightPoint( points ) );
  seqTL.add( drawLine( "#m" ) );

  seqTL.add( orientCircle("#e", "30") );
  seqTL.add( drawCircle("#e", "#m") );
  seqTL.add( orientCircle("#e", "0") );
  seqTL.add( eraseLine("#m") );

  seqTL.add( unHighlightPoint( points ) );

  // seqTL.add( zoomToElement("#e", 100) );

  seqTL.add( setPoint( ["#N", "#L"] ) );

  seqTL.add( selectElements("#e") );


  return seqTL;

}

function fadeRoot3() {

  var seqTL = new TimelineMax();
  var set = [
    "#f",
    "#g",
    "#h",
    "#i",
    "#j",
    "#k",
    "#l",
    "#e",
    "#h_2",
  ];

  seqTL.add( unSelectElements( "#e" ) );
  seqTL.add( fadeElements( set ) );


  return seqTL;
}

function g01() {

  var seqTL = new TimelineMax();
  var set = [
    "#N",
    "#L",
    "#A",
    "#B",
    "#C",
    "#D",
  ];

  seqTL.add( highlightPoint( set ) );


  seqTL.add( drawLine( "#g0101c" ) );
  seqTL.add( drawLine( "#g0101b_2" ) );
  seqTL.add( drawLine( "#g0101b_1" ), "-=1"  );
  seqTL.add( drawLine( "#g0101a_2" ) );
  seqTL.add( drawLine( "#g0101a_1" ), "-=1"   );

  return seqTL;
}

function g01remove() {

  var seqTL = new TimelineMax();
  var set = [
    "#N",
    "#L",
    "#A",
    "#B",
    "#C",
    "#D",
  ];

  seqTL.add( eraseLine( "#g0101a_2" ) );
  seqTL.add( eraseLine( "#g0101a_1" ), "-=1"   );

  seqTL.add( eraseLine( "#g0101b_2" ) );
  seqTL.add( eraseLine( "#g0101b_1" ), "-=1"  );

  seqTL.add( eraseLine( "#g0101c" ) );

  seqTL.add( unHighlightPoint( set ) );
  seqTL.add( hideElements( "#t3" ) );


  return seqTL;
}

function root5grid() {

  var seqTL = new TimelineMax();

  //vesica piseces
  // seqTL.add( zoomToElement(["#r","#s"], 100) );

  var points = [
    "#B",
    "#C",
  ];

  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#n_1" ) );
  seqTL.add( orientCircle("#p", "180") );
  seqTL.add( drawCircle("#p", "#n_1") );
  seqTL.add( orientCircle("#p", "0") );

  seqTL.add( eraseLine("#n_1") );


  seqTL.add( drawLineReverse("#n_1") );
  seqTL.add( drawCircle("#r", "#n_1") );
  seqTL.add( eraseLine("#n_1") );

  seqTL.add( unHighlightPoint( points ) );

  seqTL.add( setPoint("#O") );

  var points = [
    "#O",
    "#P",
  ];

  seqTL.add( setPoint( points ) );
  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#n" ) );
  seqTL.add( unHighlightPoint( points ) );


  seqTL.add( setPoint("#S") );
  seqTL.add( setPoint("#T"), "-=" + BEAT );

  // seqTL.add( highlightPoint("#S") );
  // seqTL.add( highlightPoint("#T") );

  seqTL.add( drawLine( "#p_1" ) );
  // seqTL.add( orientCircle("#q", "180") );
  seqTL.add( drawCircle("#q", "#p_1") );
  seqTL.add( eraseLine("#p_1") );

  seqTL.add( drawLineReverse("#p_1") );
  seqTL.add( orientCircle("#s", "180") );
  seqTL.add( drawCircle("#s", "#p_1") );
  seqTL.add( orientCircle("#s", "0") );
  seqTL.add( eraseLine("#p_1") );

  var points = [
    "#R",
    "#Q",
  ];

  seqTL.add( setPoint( points ) );
  seqTL.add( highlightPoint( points ) );

  seqTL.add( drawLine( "#t" ) );

  seqTL.add( unHighlightPoint( points ) );

  seqTL.add( setPoint("#U") );
  seqTL.add( setPoint("#V"), "-=" + BEAT );

  // seqTL.add( highlightPoint("#U") );
  // seqTL.add( highlightPoint("#V") );

  var points = [
    "#S",
    "#U",
  ];

  seqTL.add( highlightPoint( points ) );
  seqTL.add( drawLine( "#g_1" ) );
  seqTL.add( unHighlightPoint( points ) );

  var points = [
    "#T",
    "#V",
  ];

  seqTL.add( highlightPoint( points ) );
  seqTL.add( drawLine( "#h_1" ) );
  seqTL.add( unHighlightPoint( points ) );


  seqTL.add( setPolygon( "#q2" ) );
  seqTL.add( setPolygon( "#q4" ) );

  seqTL.add( drawLine( "#j_1" ) );
  seqTL.add( drawLine( "#l_1" ) );


  seqTL.add( drawLine( "#m_1" ) );
  seqTL.add( orientCircle("#c_1", "-62.5") );
  seqTL.add( drawCircle("#c_1", "#m_1") );
  seqTL.add( orientCircle("#c_1", "0") );
  seqTL.add( eraseLine("#m_1") );

  seqTL.add( selectElements("#c_1") );


  seqTL.add( unHighlightPoint("#S") );
  seqTL.add( unHighlightPoint("#T") );
  seqTL.add( unHighlightPoint("#U") );
  seqTL.add( unHighlightPoint("#V") );


  return seqTL;

}

function fadeRoot5() {
  var seqTL = new TimelineMax();

  var set = [
    "#p",
    "#q",
    "#r",
    "#s",
    "#n",
    "#t",
    "#g_1",
    "#h_1",
    "#l_1",
    "#j_1",
    "#c_1",
  ];

  seqTL.add( hideElements("#q2") );
  seqTL.add( hideElements("#q4") );

  seqTL.add( unSelectElements( "#c_1" ) );
  seqTL.add( fadeElements( set ) );


  return seqTL;

}


function root2grid() {

  var seqTL = new TimelineMax();

  seqTL.add( drawLine( "#q_1" ) );
  seqTL.add( setPoint("#W") );

  seqTL.add( drawLine( "#r_1" ) );
  seqTL.add( setPoint("#Z") );
  seqTL.add( setPoint("#A_1") );
  seqTL.add( setPoint("#B_1") );
  seqTL.add( setPoint("#C_1") );


  // seqTL.add( zoomToElement("#d_2", 100) );
  seqTL.add( drawLine( "#d_1" ) );

  // seqTL.add( orientCircle("#e", "30") );
  seqTL.add( drawCircle("#d_2", "#d_1") );
  seqTL.add( selectElements( "#d_2" ) );

  seqTL.add( eraseLine("#d_1") );

  seqTL.add( setPoint("#D_1") );

  seqTL.add( setPolygon("#q5") );


  return seqTL;

}

function fadeRoot2() {

  var seqTL = new TimelineMax();

  var set = [
    "#q_1",
    "#r_1",
    "#d_2",

  ];

  seqTL.add( hideElements("#q5") );

  seqTL.add( unSelectElements( "#d_2" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function squares() {

  var seqTL = new TimelineMax();


  seqTL.add( unFadeElements( ["#b", "#c"] ) );
  seqTL.add( unFadeElements( ["#f", "#g"] ) );
  seqTL.add( unFadeElements( ["#l", "#h_2"] ) );

  seqTL.add( setPoint("#E_1") );
  seqTL.add( setPoint("#G_1") );

  seqTL.add( drawLine( "#i_2" ) );
  seqTL.add( drawLine( "#j_2" ) );

  seqTL.add( setPoint("#C_1") );
  seqTL.add( setPoint("#F_1") );


  seqTL.add( setPolygon("#q6") );
  seqTL.add( setPolygon("#q7") );

  seqTL.add( drawLine( "#p_2" ) );
  seqTL.add( drawLine( "#q_2" ) );

  seqTL.add( drawLine( "#r_2" ) );

  seqTL.add( orientCircle("#c_2", "11") );
  seqTL.add( drawCircle("#c_2", "#r_2") );
  seqTL.add( orientCircle("#c_2", "0") );
  seqTL.add( selectElements("#c_2") );

  seqTL.add( eraseLine("#r_2") );

  seqTL.add( fadeElements( ["#b", "#c"] ) );
  seqTL.add( fadeElements( ["#f", "#g", "#p_2", "#q_2", "#i_2", "#j_2"] ) );
  seqTL.add( fadeElements( ["#l", "#h_2"] ) );


  // seqTL.add( unSelectElements( "#d_2" ) );
  // seqTL.add( fadeElements( set ) );

  return seqTL;

}

function fadeSquares() {

  var seqTL = new TimelineMax();

  var set = [
    "#i_2",
    "#j_2",
    "#c_2",

  ];

  seqTL.add( hideElements("#q6") );
  seqTL.add( hideElements("#q7") );

  seqTL.add( unSelectElements( "#c_2" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function squares3() {

  var seqTL = new TimelineMax();

  seqTL.add( drawLine( "#s_2" ) );
  seqTL.add( drawLine( "#t_2" ) );

  seqTL.add( setPoint("#H_1") );

  seqTL.add( drawLine( "#m_3" ) );
  seqTL.add( drawLine( "#n_3" ) );


  seqTL.add( drawLine( "#h_3" ) );

  seqTL.add( orientCircle("#c_3", "-15") );
  seqTL.add( drawCircle("#c_3", "#h_3") );
  seqTL.add( orientCircle("#c_3", "0") );
  seqTL.add( selectElements("#c_3") );

  seqTL.add( eraseLine("#h_3") );

  seqTL.add( setPoint("#I_1") );
  seqTL.add( setPoint("#J_1") );
  seqTL.add( setPoint("#K_1") );
  seqTL.add( setPoint("#L_1") );

  seqTL.add( drawLine( "#f_3" ) );
  seqTL.add( drawLine( "#g_3" ) );
  seqTL.add( drawLine( "#p_3" ) );
  seqTL.add( drawLine( "#q_3" ) );

  seqTL.add( setPolygon("#q8") );


  return seqTL;

}

function fadeSquares3() {

  var seqTL = new TimelineMax();

  var set = [
    "#s_2",
    "#t_2",
    "#m_3",
    "#n_3",
    "#c_3",
    "#f_3",
    "#g_3",
    "#p_3",
    "#q_3",

  ];

  seqTL.add( hideElements("#q8") );

  seqTL.add( unSelectElements( "#c_3" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function hexagon() {

  var seqTL = new TimelineMax();

  seqTL.add( setPoint("#M_1") );
  seqTL.add( setPoint("#N_1") );
  //
  //
  seqTL.add( drawCircle("#d_3" ) );
  seqTL.add( drawCircle("#s_3" ) );

  seqTL.add( setPoint("#O_1") );
  seqTL.add( setPoint("#P_1") );

  //
  //
  seqTL.add( drawLine( "#f_4" ) );

  // seqTL.add( orientCircle("#c_3", "30") );
  seqTL.add( drawCircle("#r_3", "#f_4") );
  // seqTL.add( orientCircle("#c_3", "0") );
  seqTL.add( selectElements("#r_3") );

  seqTL.add( eraseLine("#f_4") );
  //

  seqTL.add( setPolygon("#poly1") );


  return seqTL;

}

function fadeHexagon() {

  var seqTL = new TimelineMax();

  var set = [
    "#d_3",
    "#s_3",
    "#r_3",

  ];

  seqTL.add( hideElements("#poly1") );

  seqTL.add( unSelectElements( "#r_3" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function circumTriangle() {

  var seqTL = new TimelineMax();

  seqTL.add( setPolygon("#t1") );

  seqTL.add( drawLine("#m_4") );
  seqTL.add( drawLine("#n_4") );

  seqTL.add( setPoint("#S_1") );

  seqTL.add( drawLine( "#p_4" ) );
  seqTL.add( orientCircle("#c_4", "30") );
  seqTL.add( drawCircle("#c_4", "#p_4") );
  seqTL.add( orientCircle("#c_4", "0") );
  seqTL.add( selectElements("#c_4") );
  seqTL.add( eraseLine("#p_4") );
  //
  seqTL.add( drawLine( "#q_4" ) );
  seqTL.add( orientCircle("#d_4", "-30") );
  seqTL.add( drawCircle("#d_4", "#q_4") );
  seqTL.add( orientCircle("#d_4", "0") );
  seqTL.add( selectElements("#d_4") );
  seqTL.add( eraseLine("#q_4") );

  seqTL.add( setPoint("#C_2") );
  seqTL.add( setPoint("#B_2") );
  seqTL.add( setPoint("#E_2") );
  seqTL.add( setPoint("#D_2") );

  //
  seqTL.add( setPolygon("#t4") );



  return seqTL;

}

function fadeCircumTriangle() {

  var seqTL = new TimelineMax();

  var set = [
    "#c_4",
    "#d_4",
    "#m_4",
    "#n_4",

  ];

  seqTL.add( hideElements("#t1") );
  seqTL.add( hideElements("#t4") );

  seqTL.add( unSelectElements( "#c_4" ) );
  seqTL.add( unSelectElements( "#d_4" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}




function baseSequence() {

  var seqTL = new TimelineMax();

  // point A
  seqTL.add( setPoint("#A") );
  seqTL.add( setPoint("#B") );

  seqTL.add( highlightPoint( ["#A", "#B"] ), "+=" + BEAT );

  // line a
  seqTL.add( drawLine("#a") );

  // circle b
  seqTL.add( drawLine("#q1") );
  seqTL.add( drawCircle("#b", "#q1") ); //vesica piseces
  seqTL.add( eraseLine("#q1") );

  // circle c
  seqTL.add( drawLineReverse("#q1")  );
  seqTL.add( orientCircle("#c", "180") );
  seqTL.add( drawCircle("#c", "#q1") );
  seqTL.add( orientCircle("#c", "0") );
  seqTL.add( eraseLine("#q1") );

  seqTL.add( unHighlightPoint(["#A", "#B"]));

  // new points on baseline
  seqTL.add( setPoint(["#C", "#D"]) );
  seqTL.add( highlightPoint(["#C", "#D"]) );

  // new points on bisector
  seqTL.add( setPoint(["#E", "#F"]) );
  seqTL.add( highlightPoint(["#E", "#F"]) );
  seqTL.add( unHighlightPoint(["#C", "#D"]));

  // line d
  seqTL.add( drawLine("#d") );

  seqTL.add( unHighlightPoint(["#E", "#F"]) );
  seqTL.add( setPoint("#G") );
  seqTL.add( highlightPoint("#G") );

  // seqTL.add( drawLine("#q3") );
  // seqTL.add( eraseLine("#q3") );

  var set = [
    "#a",
    "#b",
    "#c",
    "#d",
  ];

  seqTL.add( fadeElements( set ), "+=" + BEAT * 2  );
  seqTL.add( unHighlightPoint("#G") );

  return seqTL;

}
