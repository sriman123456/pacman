var b1,b2,ww,wl,wi,wa,w0,w1,w2,w3,w4,w5,w6,w7,w8,w9, w10,w11,w12,w13, w14, w15, w16, w17, w18, w19, w20, w21,
 w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38, w39, w40, w41, w42,
  w43, w44, w45, w46, w47, w48, w49, w50, w51, w52, w53, w54, w55, w56, w57,w58,w59,
w60,w61,w62,w63,w64,w65,w66,w67, w68, w69, w70, w71, w72, w73, w74, w75, w76, w77, w78, w79, w80, w81,
 w82, w83, w84, w85, w86, w87, w88, w89, w90, w91, w92, w93, w94, w95, w96, w97, w98,w99, w100;

var coin, coin2 , coin3 , coin4 , coin5 ,coin6 , coin7, coin8 , coin9 , coin10,
 coin11, coin12, coin13, coin14, coin15, coin16, coin17, coin18, coin19, coin20,
  coin21, coin22, coin23,coin24,coin25,coin25,coin26,coin27,coin28,coin29,coin30,
  coin31,coin32,coin33,coin34,coin35,coin36,coin37,coin38,coin39,coin40,
coin41,coin42,coin43,coin44,coin45,coin46,coin47,coin48,coin49,coin50,
coin51,coin52,coin53,coin54,coin55,coin56,coin57,coin58,coin59,coin60,
coin61,coin62,coin63,coin64,coin65,coin66,coin67,coin68,coin69,coin70,
coin71,coin72,coin73,coin74,coin75,coin76,coin77,coin78,coin79,coin80,
coin81,coin82,coin83,coin84,coin85,coin86,coin87,coin88,coin89,coin90,
coin91,coin92,coin93,coin94,coin95,coin96,coin97,coin98,coin99,coin100,
coin101,coin102,coin103,coin104,coin105,coin106,coin107,coin108,coin109,coin110,
coin111,coin112,coin113,coin114,coin115,coin116,coin117,coin118,coin119,coin120,
coin121,coin122,coin124,coin125,coin126,coin127,coin128,coin129,coin130,
coin131,coin132,coin133,coin134,coin135,coin136,coin137,coin138,coin139,coin140,
coin141,coin142,coin143,coin144,coin145,coin146,coin147,coin148,coin149,
coin150,coin151,coin152,coin153,coin154,coin155;

var pacman;
var score=0;
var Death=0;
var g1,g2,g3,g4;
var ghost1Img,ghost2Img,ghost3Img,ghost4Img;
var start,gameover,restart,won,logo;
var startImg,gameoverImg,restartImg,wonImg,logoImg;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var water,water2;

function preload(){
  
  pacmanImg=loadImage("pacman.png");
  ghost1Img=loadImage("ghost1.png");
  ghost2Img=loadImage("ghost2.png");
  ghost3Img=loadImage("ghost3.png");
  ghost4Img=loadImage("ghost4.png");
  startImg=loadImage("start.png");
  gameoverImg=loadImage("gameover.gif");
  restartImg=loadImage("restart.png");
  wonImg=loadImage("won.png");
  water=loadSound("water.mp3");
  logoImg=loadImage("logo.png");
  water2=loadSound("waterSound.mp3");

  
}

function setup() {
  createCanvas(800, 400);
  
  pacman=createSprite(50,150);
  pacman.addImage(pacmanImg);
  pacman.scale=0.07;

  logo=createSprite(210,200);
  logo.addImage(logoImg);
  logo.scale=0.4;

  start=createSprite(600,200);
  start.addImage(startImg);
  start.scale=1;

  gameover=createSprite(600,100);
  gameover.addImage(gameoverImg);
  gameover.scale=1;
  gameover.visible=false;

  restart=createSprite(590,250);
  restart.addImage(restartImg);
  restart.scale=1;
  restart.visible=false;
  
  won=createSprite(600,200);
  won.addImage(wonImg);
  won.scale=1;
  won.visible=false;

  g1 = createSprite(25,300); 
  g1.addImage(ghost1Img);
  g1.scale=0.08;
  g1.depth=1;
  
  g2 = createSprite(375,70);
  g2.addImage(ghost2Img);
  g2.scale=0.08;
  g2.depth=1;
  
  g3 = createSprite(250,325);
  g3.addImage(ghost3Img);
  g3.scale=0.08;
  g3.depth=1;

  g4 = createSprite(85,75);
  g4.addImage(ghost4Img);
  g4.scale=0.08;
  g4.depth=1;
 
 b1 = createSprite(50,140,15,5);
 b1.visible=false;
 b2 = createSprite(50,160,15,5) 
 b2.visible=false;
 ww = createSprite(300,20,5,20); 
 wi = createSprite(315,343,50,5)
 wl = createSprite(160,325,5,30); 
 wa = createSprite(70,25,5,30); 
 w0 = createSprite(180,286,30,5);   
 w1 = createSprite(5,10,3,775);
 w2 = createSprite(395,10,3.5,775);  
 w3 = createSprite(200,2,390,3);
 w4 = createSprite(200,397,390,3.5);
 w5 = createSprite(12,198.5,3,385); 
 w6 = createSprite(388,198,3,385);  
 w7 = createSprite(200,7,376,3);  
 w8 = createSprite(200,390,376,3);  
 w9 = createSprite(35,50,3,20);
 w10 = createSprite(71,50,3,20);
 w11 = createSprite(53,40,37,3);
 w12 = createSprite(53,60,37,3);
 w13 = createSprite(35,200,3,220);
 w14 = createSprite(43,200,3,220);
 w15 = createSprite(39,90,11,3);
 w16 = createSprite(39,310,11,3); 
 w17 = createSprite(63,200,3,220);
 w18 = createSprite(71,200,3,220);  
 w19 = createSprite(67,90,11,3);
 w20 = createSprite(67,310,11,3);
 w21 = createSprite(35,350,3,20);
 w22 = createSprite(71,350,3,20);
 w23 = createSprite(53,340,37,3);
 w24 = createSprite(53,360,37,3);
 w25 = createSprite(130,40,60,3);
 w26 = createSprite(100,115,3,150);
 w27 = createSprite(130,190,60,3); 
 w28 = createSprite(160,55,3,30);  
 w29 = createSprite(138,70,45,3);  
 w30 = createSprite(115,117,3,95); 
 w31 = createSprite(130,165,33,3); 
 w32 = createSprite(160,155,3,70); 
 w33 = createSprite(145,143,3,46); 
 w34 = createSprite(153,120,15,3);
 w35 = createSprite(100,265,3,90);  
 w36 = createSprite(130,310,60,3);
 w37 = createSprite(160,265,3,90);
 w38 = createSprite(130,220,60,3); 
 w39 = createSprite(115,265,3,50);  
 w40 = createSprite(130,290,30,3);   
 w41 = createSprite(145,265,3,50); 
 w42 = createSprite(130,240,30,3); 
 w43 = createSprite(100,350,3,20);
 w44 = createSprite(160,350,3,20);
 w45 = createSprite(130,340,63,3);
 w46 = createSprite(130,360,63,3);
 w47 = createSprite(190,365,3,50);
 w48 = createSprite(210,365,3,50);
 w49 = createSprite(200,340,23,3);
 w50 = createSprite(190,300,3,27);  
 w51 = createSprite(275,300,3,27);
 w52 = createSprite(232.5,285,87,3);
 w53 = createSprite(232.5,315,87,3);
 w54 = createSprite(190,170,3,172);
 w55 = createSprite(275,170,3,172); 
 w56 = createSprite(232.5,83,87,3); 
 w57 = createSprite(232.5,257,87,3);
 w58 = createSprite(210,170,3,122); 
 w59 = createSprite(255,170,3,122); 
 w60 = createSprite(232.5,110,47,3); 
 w61 = createSprite(232.5,230,47,3); 
 w62 = createSprite(190,45,3,27); 
 w63 = createSprite(275,45,3,27); 
 w64 = createSprite(232.5,33,87,3);
 w65 = createSprite(232.5,57,87,3);
 w66 = createSprite(235,352.5,3,25); 
 w67 = createSprite(285,352.2,3,25);
 w68 = createSprite(260,340,53,3);  
 w69 = createSprite(260,365,53,3); 
 w70 = createSprite(309,382,3,20);
 w71 = createSprite(320,382,3,20);
 w72 = createSprite(314,372,13.5,3);
 w73 = createSprite(315.5,310,3,25); 
 w74 = createSprite(380,310,3,25);
 w75 = createSprite(326,324,25,3);  
 w76 = createSprite(372,324,20,3); 
 w77 = createSprite(348,299,62,3); 
 w78 = createSprite(350,367.5,20,3); 
 w79 = createSprite(340,345,3,45); 
 w80 = createSprite(360,345,3,45);
 w81 = createSprite(300,45,3,27); 
 w82 = createSprite(385,45,3,27); 
 w83 = createSprite(342.5,33,87,3); 
 w84 = createSprite(342.5,57,87,3); 
 w85 = createSprite(300,110,3,60);
 w86 = createSprite(315,110,3,60); 
 w87 = createSprite(308,80,18,3); 
 w88 = createSprite(308,140,18,3);
 w89 = createSprite(350,110,3,60);
 w90 = createSprite(365,110,3,60); 
 w91 = createSprite(358,80,18,3); 
 w92 = createSprite(358,140,18,3); 
 w93 = createSprite(308,165,18,3);
 w94 = createSprite(358,165,18,3); 
 w95 = createSprite(300,215,3,100); 
 w96 = createSprite(365,215,3,100); 
 w97 = createSprite(332.5,265,65,3); 
 w98 = createSprite(315,205,3,80); 
 w99 = createSprite(350,205,3,80); 
 w100 = createSprite(332.5,245,35,3);
  
 coin = createSprite(50,20,7,7);
 coin2 = createSprite(70,20,7,7);
 coin3 = createSprite(90,20,7,7);
 coin4 = createSprite(110,20,7,7);
 coin5 = createSprite(130,20,7,7);
 coin6 = createSprite(150,20,7,7);
 coin7 = createSprite(170,20,7,7);
 coin8 = createSprite(190,20,7,7);
 coin9 = createSprite(210,20,7,7);
 coin10 = createSprite(230,20,7,7);
 coin11 = createSprite(250,20,7,7);
 coin12 = createSprite(270,20,7,7);
 coin13 = createSprite(290,20,7,7);
 coin14 = createSprite(310,20,7,7);
 coin15 = createSprite(330,20,7,7);
 coin16 = createSprite(350,20,7,7);
 coin17 = createSprite(370,20,7,7);
 coin18 = createSprite(25,40,7,7);
 coin19 = createSprite(25,60,7,7);
 coin20 = createSprite(25,80,7,7);
 coin21 = createSprite(25,100,7,7);
 coin22 = createSprite(25,120,7,7);
 coin23 = createSprite(25,140,7,7);
 coin24 = createSprite(25,160,7,7);
 coin25 = createSprite(25,180,7,7);
 coin26 = createSprite(25,200,7,7);
 coin27 = createSprite(25,220,7,7);
 coin28 = createSprite(25,240,7,7);
 coin29 = createSprite(25,260,7,7);
 coin30 = createSprite(25,280,7,7);
 coin31 = createSprite(25,300,7,7);
 coin32 = createSprite(25,320,7,7);
 coin33 = createSprite(25,340,7,7);
 coin34 = createSprite(25,360,7,7);
 coin35 = createSprite(25,375,7,7);
 coin36 = createSprite(85,40,7,7);
 coin37 = createSprite(85,60,7,7);
 coin38 = createSprite(85,80,7,7);
 coin39 = createSprite(85,100,7,7);
 coin40 = createSprite(85,120,7,7);
 coin41 = createSprite(85,140,7,7);
 coin42 = createSprite(85,160,7,7);
 coin43 = createSprite(85,180,7,7);
 coin44 = createSprite(85,200,7,7);              
 coin45 = createSprite(85,220,7,7);
 coin46 = createSprite(85,240,7,7);
 coin47 = createSprite(85,260,7,7);
 coin48 = createSprite(85,280,7,7);
 coin49 = createSprite(85,300,7,7);
 coin50 = createSprite(85,320,7,7);
 coin51 = createSprite(85,340,7,7);
 coin52 = createSprite(45,75,7,7);
 coin53 = createSprite(65,75,7,7);
 coin54 = createSprite(175,40,7,7);
 coin55 = createSprite(175,60,7,7);
 coin56 = createSprite(175,80,7,7);
 coin57 = createSprite(175,100,7,7);
 coin58 = createSprite(175,120,7,7);
 coin59 = createSprite(175,140,7,7);
 coin60 = createSprite(175,160,7,7);
 coin61 = createSprite(175,180,7,7);
 coin62 = createSprite(175,200,7,7);
 coin63 = createSprite(175,220,7,7);
 coin64 = createSprite(175,240,7,7);
 coin65 = createSprite(175,260,7,7);
 coin66 = createSprite(175,280,7,7);
 coin67 = createSprite(175,300,7,7);
 coin68 = createSprite(175,320,7,7);
 coin69 = createSprite(175,340,7,7);
 coin70 = createSprite(175,360,7,7);
 coin71 = createSprite(175,375,7,7);
 coin72 = createSprite(130,90,7,7);
 coin73 = createSprite(150,100,7,7);
 coin74 = createSprite(130,110,7,7);
 coin75 = createSprite(288,40,7,7);
 coin76 = createSprite(288,60,7,7);
 coin77 = createSprite(288,80,7,7);
 coin78 = createSprite(288,100,7,7)
 coin79 = createSprite(288,120,7,7);
 coin80 = createSprite(288,140,7,7);
 coin81 = createSprite(288,160,7,7);
 coin82 = createSprite(288,180,7,7);
 coin83 = createSprite(288,200,7,7);
 coin84 = createSprite(288,220,7,7);
 coin85 = createSprite(288,240,7,7);
 coin86 = createSprite(288,260,7,7);
 coin87 = createSprite(288,280,7,7);
 coin88 = createSprite(288,300,7,7);
 coin89 = createSprite(288,320,7,7);
 coin90 = createSprite(190,70,7,7);
 coin91 = createSprite(210,70,7,7);
 coin92 = createSprite(230,70,7,7);
 coin93 = createSprite(250,70,7,7);
 coin94 = createSprite(270,70,7,7);
 coin95 = createSprite(310,70,7,7);
 coin96 = createSprite(330,70,7,7);
 coin97 = createSprite(350,70,7,7);
 coin98 = createSprite(370,70,7,7);
 coin99 = createSprite(105,205,7,7);
 coin100 = createSprite(150,205,7,7);
 coin101 = createSprite(150,215,7,7);
 coin102 = createSprite(45,325,7,7);
 coin103 = createSprite(65,325,7,7);
 coin104 = createSprite(100,325,7,7);
 coin105 = createSprite(120,325,7,7);
 coin106 = createSprite(140,325,7,7);
 coin107 = createSprite(157,325,7,7);
 coin108 = createSprite(190,325,7,7);
 coin109 = createSprite(210,325,7,7);
 coin110 = createSprite(230,325,7,7);
 coin111 = createSprite(250,325,7,7);
 coin112 = createSprite(270,325,7,7);
 coin113 = createSprite(45,375,7,7);
 coin114 = createSprite(65,375,7,7);
 coin115 = createSprite(110,375,7,7);
 coin116 = createSprite(130,375,7,7);
 coin117 = createSprite(150,375,7,7);
 coin118 = createSprite(222,375,7,7);
 coin119 = createSprite(242,375,7,7);
 coin120 = createSprite(262,375,7,7);
 coin121 = createSprite(282,375,7,7);
 coin122 = createSprite(300,375,7,7);
 coin123 = createSprite(190,270,7,7);
 coin124 = createSprite(210,270,7,7);
 coin125 = createSprite(230,270,7,7);
 coin126 = createSprite(250,270,7,7);
 coin127 = createSprite(270,270,7,7);
 coin128 = createSprite(333,90,7,7);
 coin129 = createSprite(333,110,7,7);
 coin130 = createSprite(333,130,7,7);
 coin131 = createSprite(333,150,7,7);
 coin132 = createSprite(333,170,7,7);
 coin133 = createSprite(333,190,7,7);
 coin134 = createSprite(377,90,7,7);
 coin135 = createSprite(377,110,7,7);
 coin136 = createSprite(377,130,7,7);
 coin137 = createSprite(377,150,7,7);
 coin138 = createSprite(377,170,7,7);
 coin139 = createSprite(377,190,7,7);
 coin140 = createSprite(377,210,7,7);
 coin141 = createSprite(377,230,7,7);
 coin142 = createSprite(377,250,7,7);
 coin143 = createSprite(377,270,7,7);
 coin144 = createSprite(307,152.5,7,7);
 coin145 = createSprite(355,152.5,7,7);
 coin146 = createSprite(307.5,280,7,7);
 coin147 = createSprite(327.5,280,7,7);
 coin148 = createSprite(347.5,280,7,7);
 coin149 = createSprite(300,335,7,7);
 coin150 = createSprite(330,335,7,7);
 coin151 = createSprite(300,355,7,7);
 coin152 = createSprite(330,355,7,7);
 coin153 = createSprite(335,380,7,7);
 coin154 = createSprite(355,380,7,7);
 coin155 = createSprite(375,380,7,7);
  
ww.shapeColor = "black";  
wi.shapeColor = "black";  
wl.shapeColor = "black";
wa.shapeColor = "black";  
w0.shapeColor = "black";  
w1.shapeColor = "Blue"; 
w2.shapeColor = "Blue";
w3.shapeColor = "Blue";
w4.shapeColor = "Blue";
w5.shapeColor = "Blue";
w6.shapeColor = "Blue";
w7.shapeColor = "Blue";
w8.shapeColor = "Blue";
w9.shapeColor = "Blue";
w10.shapeColor = "Blue";
w11.shapeColor = "Blue";
w12.shapeColor = "Blue";
w13.shapeColor = "Blue";
w14.shapeColor = "Blue";
w15.shapeColor = "Blue";
w16.shapeColor = "Blue";
w17.shapeColor = "Blue";
w18.shapeColor = "Blue";
w19.shapeColor = "Blue";
w20.shapeColor = "Blue";
w21.shapeColor = "Blue";
w22.shapeColor = "Blue";
w23.shapeColor = "Blue";
w24.shapeColor = "Blue";
w25.shapeColor = "Blue";
w26.shapeColor = "Blue";
w27.shapeColor = "Blue";
w28.shapeColor = "Blue";
w29.shapeColor = "Blue";
w30.shapeColor = "Blue";
w31.shapeColor = "Blue";
w32.shapeColor = "Blue";
w33.shapeColor = "Blue";
w34.shapeColor = "blue";
w35.shapeColor = "red";
w36.shapeColor = "red";
w37.shapeColor = "red";
w38.shapeColor = "red";
w39.shapeColor = "red";
w40.shapeColor = "red";
w41.shapeColor = "red";
w42.shapeColor = "red";
w43.shapeColor = "cyan";
w44.shapeColor = "cyan";
w45.shapeColor = "cyan";
w46.shapeColor = "cyan";
w47.shapeColor = "blue";
w48.shapeColor = "blue";
w49.shapeColor = "blue";
w50.shapeColor = "blue";
w51.shapeColor = "Blue";
w52.shapeColor = "Blue";
w53.shapeColor = "Blue";
w54.shapeColor = "Blue";
w55.shapeColor = "Blue";
w56.shapeColor = "Blue";
w57.shapeColor = "Blue";
w58.shapeColor = "blue";
w59.shapeColor = "blue";
w60.shapeColor = "blue";
w61.shapeColor = "blue";
w62.shapeColor = "yellow";
w63.shapeColor = "yellow";
w64.shapeColor = "yellow";
w65.shapeColor = "yellow";
w66.shapeColor = "yellow";
w67.shapeColor = "yellow";
w68.shapeColor = "yellow";
w69.shapeColor = "yellow";
w70.shapeColor = "Blue";
w71.shapeColor = "Blue";
w72.shapeColor = "Blue";
w73.shapeColor = "Blue";
w74.shapeColor = "Blue";
w75.shapeColor = "Blue";
w76.shapeColor = "Blue";
w77.shapeColor = "Blue";
w78.shapeColor = "Blue";
w79.shapeColor = "Blue";
w80.shapeColor = "Blue";
w81.shapeColor = "Blue";
w82.shapeColor = "Blue";
w83.shapeColor = "Blue";
w84.shapeColor = "Blue";
w85.shapeColor = "Blue";
w86.shapeColor = "Blue";
w87.shapeColor = "Blue";
w88.shapeColor = "Blue";
w89.shapeColor = "Blue";
w90.shapeColor = "Blue";
w91.shapeColor = "blue";
w92.shapeColor = "blue";
w93.shapeColor = "red";
w94.shapeColor = "red";
w95.shapeColor = "red";
w96.shapeColor = "red";
w97.shapeColor = "red";
w98.shapeColor = "red";
w99.shapeColor = "red";
w100.shapeColor = "red";

coin.shapeColor="gold";
coin2.shapeColor="gold";
coin3.shapeColor="gold";
coin4.shapeColor="gold";
coin5.shapeColor="gold";
coin6.shapeColor="gold";
coin7.shapeColor="gold";
coin8.shapeColor="gold";
coin9.shapeColor="gold";
coin10.shapeColor="gold";
coin11.shapeColor="gold";
coin12.shapeColor="gold";
coin13.shapeColor="gold";
coin14.shapeColor="gold";
coin15.shapeColor="gold";
coin16.shapeColor="gold";
coin17.shapeColor="gold";
coin18.shapeColor="gold";
coin19.shapeColor="gold";
coin20.shapeColor="gold";
coin21.shapeColor="gold";
coin22.shapeColor="gold";
coin23.shapeColor="gold";
coin24.shapeColor="gold";
coin25.shapeColor="gold";
coin26.shapeColor="gold";
coin27.shapeColor="gold";
coin28.shapeColor="gold";
coin29.shapeColor="gold";
coin30.shapeColor="gold";
coin31.shapeColor="gold";
coin32.shapeColor="gold";
coin33.shapeColor="gold";
coin34.shapeColor="gold";
coin35.shapeColor="gold";
coin36.shapeColor="gold";
coin37.shapeColor="gold";
coin38.shapeColor="gold";
coin39.shapeColor="gold";
coin40.shapeColor="gold";
coin41.shapeColor="gold";
coin42.shapeColor="gold";
coin43.shapeColor="gold";
coin44.shapeColor="gold";
coin45.shapeColor="gold";
coin46.shapeColor="gold";
coin47.shapeColor="gold";
coin48.shapeColor="gold";
coin49.shapeColor="gold";
coin50.shapeColor="gold";
coin51.shapeColor="gold";
coin52.shapeColor="gold";
coin53.shapeColor="gold";
coin54.shapeColor="gold";
coin55.shapeColor="gold";
coin56.shapeColor="gold";
coin57.shapeColor="gold";
coin58.shapeColor="gold";
coin59.shapeColor="gold";
coin60.shapeColor="gold";
coin61.shapeColor="gold";
coin62.shapeColor="gold";
coin63.shapeColor="gold";
coin64.shapeColor="gold";
coin65.shapeColor="gold";
coin66.shapeColor="gold";
coin67.shapeColor="gold";
coin68.shapeColor="gold";
coin69.shapeColor="gold";
coin70.shapeColor="gold";
coin71.shapeColor="gold";
coin72.shapeColor="gold";
coin73.shapeColor="gold";
coin74.shapeColor="gold";
coin75.shapeColor="gold";
coin76.shapeColor="gold";
coin77.shapeColor="gold";
coin78.shapeColor="gold";
coin79.shapeColor="gold";
coin80.shapeColor="gold";
coin81.shapeColor="gold";
coin82.shapeColor="gold";
coin83.shapeColor="gold";
coin84.shapeColor="gold";
coin85.shapeColor="gold";
coin86.shapeColor="gold";
coin87.shapeColor="gold";
coin88.shapeColor="gold";
coin89.shapeColor="gold";
coin90.shapeColor="gold";
coin91.shapeColor="gold";
coin92.shapeColor="gold";
coin93.shapeColor="gold";
coin94.shapeColor="gold";
coin95.shapeColor="gold";
coin96.shapeColor="gold";
coin97.shapeColor="gold";
coin98.shapeColor="gold";
coin99.shapeColor="gold";
coin100.shapeColor="gold";
coin101.shapeColor="gold";
coin102.shapeColor="gold";
coin103.shapeColor="gold";
coin104.shapeColor="gold";
coin105.shapeColor="gold";
coin106.shapeColor="gold";
coin107.shapeColor="gold";
coin108.shapeColor="gold";
coin109.shapeColor="gold";
coin110.shapeColor="gold";
coin111.shapeColor="gold";
coin112.shapeColor="gold";
coin113.shapeColor="gold";
coin114.shapeColor="gold";
coin115.shapeColor="gold";
coin116.shapeColor="gold";
coin117.shapeColor="gold";
coin118.shapeColor="gold";
coin119.shapeColor="gold";
coin120.shapeColor="gold";
coin121.shapeColor="gold";
coin122.shapeColor="gold";
coin123.shapeColor="gold";
coin124.shapeColor="gold";
coin125.shapeColor="gold";
coin126.shapeColor="gold";
coin127.shapeColor="gold";
coin128.shapeColor="gold";
coin129.shapeColor="gold";
coin130.shapeColor="gold";
coin131.shapeColor="gold";
coin132.shapeColor="gold";
coin133.shapeColor="gold";
coin134.shapeColor="gold";
coin135.shapeColor="gold";
coin136.shapeColor="gold";
coin137.shapeColor="gold";
coin138.shapeColor="gold";
coin139.shapeColor="gold";
coin140.shapeColor="gold";
coin141.shapeColor="gold";
coin142.shapeColor="gold";
coin143.shapeColor="gold";
coin144.shapeColor="gold";
coin145.shapeColor="gold";
coin146.shapeColor="gold";
coin147.shapeColor="gold";
coin148.shapeColor="gold";
coin149.shapeColor="gold";
coin150.shapeColor="gold";
coin151.shapeColor="gold";
coin152.shapeColor="gold";
coin153.shapeColor="gold";
coin154.shapeColor="gold";
coin155.shapeColor="gold";


}
  
function draw() {
  background("black");

  if(gameState===PLAY){

    if(mousePressedOver(start)){
      water2.play();
      start.velocityY=10;
      start.lifetime=50;
      g1.velocityY=10;
      g2.velocityX=-10;
      g3.velocityX=-10; 
      g4.velocityY=10;
      b1.destroy();
      b2.destroy();
      logo.destroy();
    }

    if(mousePressedOver(restart)){
      water2.play();
      restart.visible=false;
      gameover.visible=false;
      reset();
    }

    if(keyDown("right")){
      pacman.velocityX=5;
     }  
   
     if(keyDown("left")){
       pacman.velocityX=-5;
     }
   
     if(keyDown("up")){
       pacman.velocityY=-5;
     }
   
     if(keyDown("down")){
       pacman.velocityY=5;
     }
     
     
     if(coin.isTouching(pacman)){
       coin.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin2.isTouching(pacman)){
       coin2.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin3.isTouching(pacman)){
       coin3.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin4.isTouching(pacman)){
       coin4.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin5.isTouching(pacman)){
       coin5.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin6.isTouching(pacman)){
       coin6.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin7.isTouching(pacman)){
       coin7.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin8.isTouching(pacman)){
       coin8.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin9.isTouching(pacman)){
       coin9.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin10.isTouching(pacman)){
       coin10.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin11.isTouching(pacman)){
       coin11.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin12.isTouching(pacman)){
       coin12.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin13.isTouching(pacman)){
       coin13.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin14.isTouching(pacman)){
       coin14.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin15.isTouching(pacman)){
       coin15.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin16.isTouching(pacman)){
       coin16.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin17.isTouching(pacman)){
       coin17.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin18.isTouching(pacman)){
       coin18.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin19.isTouching(pacman)){
       coin19.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin20.isTouching(pacman)){
       coin20.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin21.isTouching(pacman)){
       coin21.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin22.isTouching(pacman)){
       coin22.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin23.isTouching(pacman)){
       coin23.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin24.isTouching(pacman)){
       coin24.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin25.isTouching(pacman)){
       coin25.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin26.isTouching(pacman)){
       coin26.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin27.isTouching(pacman)){
       coin27.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin28.isTouching(pacman)){
       coin28.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin29.isTouching(pacman)){
       coin29.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin30.isTouching(pacman)){
       coin30.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin31.isTouching(pacman)){
       coin31.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin32.isTouching(pacman)){
       coin32.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin33.isTouching(pacman)){
       coin33.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin34.isTouching(pacman)){
       coin34.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin35.isTouching(pacman)){
       coin35.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin36.isTouching(pacman)){
       coin36.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin37.isTouching(pacman)){
       coin37.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin38.isTouching(pacman)){
       coin38.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin39.isTouching(pacman)){
       coin39.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin40.isTouching(pacman)){
       coin40.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin41.isTouching(pacman)){
       coin41.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin42.isTouching(pacman)){
       coin42.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin43.isTouching(pacman)){
       coin43.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin44.isTouching(pacman)){
       coin44.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin45.isTouching(pacman)){
       coin45.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin46.isTouching(pacman)){
       coin46.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin47.isTouching(pacman)){
       coin47.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin48.isTouching(pacman)){
       coin48.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin49.isTouching(pacman)){
       coin49.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin50.isTouching(pacman)){
       coin50.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin51.isTouching(pacman)){
       coin51.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin52.isTouching(pacman)){
       coin52.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin53.isTouching(pacman)){
       coin53.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin54.isTouching(pacman)){
       coin54.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin55.isTouching(pacman)){
       coin55.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin56.isTouching(pacman)){
       coin56.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin57.isTouching(pacman)){
       coin57.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin58.isTouching(pacman)){
       coin58.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin59.isTouching(pacman)){
       coin59.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin60.isTouching(pacman)){
       coin60.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin61.isTouching(pacman)){
       coin61.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin62.isTouching(pacman)){
       coin62.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin63.isTouching(pacman)){
       coin63.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin64.isTouching(pacman)){
       coin64.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin65.isTouching(pacman)){
       coin65.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin66.isTouching(pacman)){
       coin66.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin67.isTouching(pacman)){
       coin67.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin68.isTouching(pacman)){
       coin68.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin69.isTouching(pacman)){
       coin69.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin70.isTouching(pacman)){
       coin70.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin71.isTouching(pacman)){
       coin71.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin72.isTouching(pacman)){
       coin72.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin73.isTouching(pacman)){
       coin73.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin74.isTouching(pacman)){
       coin74.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin75.isTouching(pacman)){
       coin75.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin76.isTouching(pacman)){
       coin76.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin77.isTouching(pacman)){
       coin77.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin78.isTouching(pacman)){
       coin78.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin79.isTouching(pacman)){
       coin79.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin80.isTouching(pacman)){
       coin80.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin81.isTouching(pacman)){
       coin81.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin82.isTouching(pacman)){
       coin82.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin83.isTouching(pacman)){
       coin83.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin84.isTouching(pacman)){
       coin84.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin85.isTouching(pacman)){
       coin85.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin86.isTouching(pacman)){
       coin86.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin87.isTouching(pacman)){
       coin87.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin88.isTouching(pacman)){
       coin88.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin89.isTouching(pacman)){
       coin89.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin90.isTouching(pacman)){
       coin90.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin91.isTouching(pacman)){
       coin91.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin92.isTouching(pacman)){
       coin92.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin93.isTouching(pacman)){
       coin93.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin94.isTouching(pacman)){
       coin94.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin95.isTouching(pacman)){
       coin95.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin96.isTouching(pacman)){
       coin96.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin97.isTouching(pacman)){
       coin97.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin98.isTouching(pacman)){
       coin98.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin99.isTouching(pacman)){
       coin99.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin100.isTouching(pacman)){
       coin100.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin101.isTouching(pacman)){
       coin101.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin102.isTouching(pacman)){
       coin102.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin103.isTouching(pacman)){
       coin103.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin104.isTouching(pacman)){
       coin104.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin105.isTouching(pacman)){
       coin105.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin106.isTouching(pacman)){
       coin106.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin107.isTouching(pacman)){
       coin107.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin108.isTouching(pacman)){
       coin108.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin109.isTouching(pacman)){
       coin109.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin110.isTouching(pacman)){
       coin110.destroy();
       water.play();
       score=score+10;
     }
       
     if(coin111.isTouching(pacman)){
       coin111.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin112.isTouching(pacman)){
       coin112.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin113.isTouching(pacman)){
       coin113.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin114.isTouching(pacman)){
       coin114.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin115.isTouching(pacman)){
       coin115.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin116.isTouching(pacman)){
       coin116.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin117.isTouching(pacman)){
       coin117.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin118.isTouching(pacman)){
       coin118.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin119.isTouching(pacman)){
       coin119.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin120.isTouching(pacman)){
       coin120.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin121.isTouching(pacman)){
       coin121.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin122.isTouching(pacman)){
       coin122.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin123.isTouching(pacman)){
       coin123.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin124.isTouching(pacman)){
       coin124.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin125.isTouching(pacman)){
       coin125.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin126.isTouching(pacman)){
       coin126.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin127.isTouching(pacman)){
       coin127.destroy();
       water.play();
       score=score+10;
     }
     
      if(coin128.isTouching(pacman)){
       coin128.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin129.isTouching(pacman)){
       coin129.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin130.isTouching(pacman)){
       coin130.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin131.isTouching(pacman)){
       coin131.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin132.isTouching(pacman)){
       coin132.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin133.isTouching(pacman)){
       coin133.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin134.isTouching(pacman)){
       coin134.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin135.isTouching(pacman)){
       coin135.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin136.isTouching(pacman)){
       coin136.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin137.isTouching(pacman)){
       coin137.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin138.isTouching(pacman)){
       coin138.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin139.isTouching(pacman)){
       coin139.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin140.isTouching(pacman)){
       coin140.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin141.isTouching(pacman)){
       coin141.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin142.isTouching(pacman)){
       coin142.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin143.isTouching(pacman)){
       coin143.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin144.isTouching(pacman)){
       coin144.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin145.isTouching(pacman)){
       coin145.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin146.isTouching(pacman)){
       coin146.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin147.isTouching(pacman)){
       coin147.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin148.isTouching(pacman)){
       coin148.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin149.isTouching(pacman)){
       coin149.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin150.isTouching(pacman)){
       coin150.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin151.isTouching(pacman)){
       coin151.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin152.isTouching(pacman)){
       coin152.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin153.isTouching(pacman)){
       coin153.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin154.isTouching(pacman)){
       coin154.destroy();
       water.play();
       score=score+10;
     }
     
     if(coin155.isTouching(pacman)){
       coin155.destroy();
       water.play();
       score=score+10;
     }
     
     
     
     if(g1.isTouching(w8)){
       g1.velocityX=10;
     }
     
     if(g1.isTouching(w47)){
       g1.velocityY=-10;
     }
     
     if(g1.isTouching(w7)){
       g1.velocityX=-10;
     }
     
     if(g1.isTouching(w5)){
       g1.velocityY=10;
     }
     
     
     if(g2.isTouching(w28)){
       g2.velocityY=10;
     }
     
     if(g2.isTouching(w0)){
       g2.velocityX=10;
     }
     
     if(g2.isTouching(w6)){
       g2.velocityY=-10;
     }
     
     if(g2.isTouching(w84)){
       g2.velocityX=-10;
     }
     
       if(g3.isTouching(wl)){
       g3.velocityY=-10;
     }
     
     if(g3.isTouching(w7)){
       g3.velocityX=10;
     }
     
     if(g3.isTouching(ww)){
       g3.velocityY=10;
     }
     
     if(g3.isTouching(wi)){
       g3.velocityX=-10;
     }
     
     
     
     
     
     if(g4.isTouching(w8)){
       g4.velocityX=10;
     }
     
     if(g4.isTouching(w47)){
       g4.velocityY=-10;
     }
     
     if(g4.isTouching(w7)){
       g4.velocityX=-10;
     }
     
     if(g4.isTouching(wa)){
       g4.velocityY=10;
     }

     if(pacman.isTouching(g1)){
      g1.velocityY=0;
      g2.velocityY=0;
      g3.velocityY=0;
      g4.velocityY=0;
      g1.velocityX=0;
      g2.velocityX=0;
      g3.velocityX=0;
      g4.velocityX=0;
      pacman.velocityY=0;
      pacman.velocityX=0;
      gameover.visible=true;
      restart.visible=true;
  
    }
    
    if(pacman.isTouching(g2)){
      g1.velocityY=0;
      g2.velocityY=0;
      g3.velocityY=0;
      g4.velocityY=0;
      g1.velocityX=0;
      g2.velocityX=0;
      g3.velocityX=0;
      g4.velocityX=0;
      pacman.velocityY=0;
      pacman.velocityX=0;
      gameover.visible=true;
      restart.visible=true;
    }
    
    if(pacman.isTouching(g3)){
      g1.velocityY=0;
      g2.velocityY=0;
      g3.velocityY=0;
      g4.velocityY=0;
      g1.velocityX=0;
      g2.velocityX=0;
      g3.velocityX=0;
      g4.velocityX=0;
      pacman.velocityY=0;
      pacman.velocityX=0;
      gameover.visible=true;
      restart.visible=true;
    }
    
    if(pacman.isTouching(g4)){
      g1.velocityY=0;
      g2.velocityY=0;
      g3.velocityY=0;
      g4.velocityY=0;
      g1.velocityX=0;
      g2.velocityX=0;
      g3.velocityX=0;
      g4.velocityX=0;
      pacman.velocityY=0;
      pacman.velocityX=0;
      gameover.visible=true;
      restart.visible=true;
    }

    if(score >= 1550){ 
      won.visible=true;
      g1.velocityY=0;
      g2.velocityY=0;
      g3.velocityY=0;
      g4.velocityY=0;
      g1.velocityX=0;
      g2.velocityX=0;
      g3.velocityX=0;
      g4.velocityX=0;
      pacman.velocityY=0;
      pacman.velocityX=0;

    }

   

  }

  else if(gameState === END){}
  

    fill("cyan");
    textSize(40);
    textFont("Score")
    text("Score: "+ score, 525,50);
  
 createEdgeSprites();
  
  pacman.collide(b1);
  pacman.collide(b2);
  pacman.collide(w1);   
  pacman.collide(w2);   
  pacman.collide(w3);   
  pacman.collide(w4);   
  pacman.collide(w5);   
  pacman.collide(w6);   
  pacman.collide(w7);   
  pacman.collide(w8);   
  pacman.collide(w9);   
  pacman.collide(w10);   
  pacman.collide(w11);   
  pacman.collide(w12);   
  pacman.collide(w13);   
  pacman.collide(w14);   
  pacman.collide(w15);   
  pacman.collide(w16);   
  pacman.collide(w17);   
  pacman.collide(w18);   
  pacman.collide(w19);   
  pacman.collide(w20);   
  pacman.collide(w21);   
  pacman.collide(w22);   
  pacman.collide(w23);   
  pacman.collide(w24);   
  pacman.collide(w25);   
  pacman.collide(w26);   
  pacman.collide(w27);   
  pacman.collide(w28);   
  pacman.collide(w29);   
  pacman.collide(w30);   
  pacman.collide(w31);   
  pacman.collide(w32);   
  pacman.collide(w33);   
  pacman.collide(w34);   
  pacman.collide(w35);   
  pacman.collide(w36);   
  pacman.collide(w37);   
  pacman.collide(w38);   
  pacman.collide(w39);   
  pacman.collide(w40);   
  pacman.collide(w41);   
  pacman.collide(w42);   
  pacman.collide(w43);   
  pacman.collide(w44);   
  pacman.collide(w45);   
  pacman.collide(w46);   
  pacman.collide(w47);   
  pacman.collide(w48);   
  pacman.collide(w49);   
  pacman.collide(w50);   
  pacman.collide(w51);   
  pacman.collide(w52);   
  pacman.collide(w53);   
  pacman.collide(w54);   
  pacman.collide(w55);   
  pacman.collide(w56);   
  pacman.collide(w57);   
  pacman.collide(w58);   
  pacman.collide(w59);   
  pacman.collide(w60);   
  pacman.collide(w61);   
  pacman.collide(w62);   
  pacman.collide(w63);   
  pacman.collide(w64);   
  pacman.collide(w65);   
  pacman.collide(w66);   
  pacman.collide(w67);   
  pacman.collide(w68);   
  pacman.collide(w69);   
  pacman.collide(w70);   
  pacman.collide(w71);   
  pacman.collide(w72);   
  pacman.collide(w73);   
  pacman.collide(w74);   
  pacman.collide(w75);   
  pacman.collide(w76);   
  pacman.collide(w77);   
  pacman.collide(w78);   
  pacman.collide(w79);   
  pacman.collide(w80);   
  pacman.collide(w81);   
  pacman.collide(w82);   
  pacman.collide(w83);   
  pacman.collide(w84);   
  pacman.collide(w85);   
  pacman.collide(w86);   
  pacman.collide(w87);   
  pacman.collide(w88);   
  pacman.collide(w89);   
  pacman.collide(w90);   
  pacman.collide(w91);   
  pacman.collide(w92);   
  pacman.collide(w93);   
  pacman.collide(w94);
  pacman.collide(w95);   
  pacman.collide(w96);   
  pacman.collide(w97);   
  pacman.collide(w98);   
  pacman.collide(w99);   
  pacman.collide(w100);
  
  g1.bounceOff(w1);   
  g1.bounceOff(w2);   
  g1.bounceOff(w3);   
  g1.bounceOff(w4);   
  g1.collide(w5);   
  g1.bounceOff(w6);   
  g1.collide(w7);   
  g1.bounceOff(w8);   
  g1.bounceOff(w9);   
  g1.bounceOff(w10);   
  g1.bounceOff(w11);   
  g1.bounceOff(w12);   
  g1.bounceOff(w13);   
  g1.bounceOff(w14);   
  g1.bounceOff(w15);   
  g1.bounceOff(w16);   
  g1.bounceOff(w17);   
  g1.bounceOff(w18);   
  g1.bounceOff(w19);   
  g1.bounceOff(w20);   
  g1.bounceOff(w21);   
  g1.bounceOff(w22);   
  g1.bounceOff(w23);   
  g1.bounceOff(w24);   
  g1.bounceOff(w25);   
  g1.bounceOff(w26);   
  g1.bounceOff(w27);   
  g1.bounceOff(w28);   
  g1.bounceOff(w29);   
  g1.bounceOff(w30);   
  g1.bounceOff(w31);   
  g1.bounceOff(w32);   
  g1.bounceOff(w33);   
  g1.bounceOff(w34);   
  g1.bounceOff(w35);   
  g1.bounceOff(w36);   
  g1.bounceOff(w37);   
  g1.bounceOff(w38);   
  g1.bounceOff(w39);   
  g1.bounceOff(w40);   
  g1.bounceOff(w41);   
  g1.bounceOff(w42);   
  g1.bounceOff(w43);   
  g1.bounceOff(w44);   
  g1.bounceOff(w45);   
  g1.bounceOff(w46);   
  g1.collide(w47);   
  g1.bounceOff(w48);   
  g1.bounceOff(w49);   
  g1.bounceOff(w50);   
  g1.bounceOff(w51);   
  g1.bounceOff(w52);   
  g1.bounceOff(w53);   
  g1.bounceOff(w54);   
  g1.bounceOff(w55);   
  g1.bounceOff(w56);   
  g1.bounceOff(w57);   
  g1.bounceOff(w58);   
  g1.bounceOff(w59);   
  g1.bounceOff(w60);   
  g1.bounceOff(w61);   
  g1.bounceOff(w62);   
  g1.bounceOff(w63);   
  g1.bounceOff(w64);   
  g1.bounceOff(w65);   
  g1.bounceOff(w66);   
  g1.bounceOff(w67);   
  g1.bounceOff(w68);   
  g1.bounceOff(w69);   
  g1.bounceOff(w70);   
  g1.bounceOff(w71);   
  g1.bounceOff(w72);   
  g1.bounceOff(w73);   
  g1.bounceOff(w74);   
  g1.bounceOff(w75);   
  g1.bounceOff(w76);   
  g1.bounceOff(w77);   
  g1.bounceOff(w78);   
  g1.bounceOff(w79);   
  g1.bounceOff(w80);   
  g1.bounceOff(w81);   
  g1.bounceOff(w82);   
  g1.bounceOff(w83);   
  g1.bounceOff(w84);   
  g1.bounceOff(w85);   
  g1.bounceOff(w86);   
  g1.bounceOff(w87);   
  g1.bounceOff(w88);   
  g1.bounceOff(w89);   
  g1.bounceOff(w90);   
  g1.bounceOff(w91);   
  g1.bounceOff(w92);   
  g1.bounceOff(w93);   
  g1.bounceOff(w94);
  g1.bounceOff(w95);   
  g1.bounceOff(w96);   
  g1.bounceOff(w97);   
  g1.bounceOff(w98);   
  g1.bounceOff(w99);   
  g1.bounceOff(w100);
  
  g2.collide(w0);
  g2.bounceOff(w1);   
  g2.bounceOff(w2);   
  g2.bounceOff(w3);   
  g2.bounceOff(w4);   
  g2.bounceOff(w5);   
  g2.collide(w6);   
  g2.bounceOff(w7);   
  g2.bounceOff(w8);   
  g2.bounceOff(w9);   
  g2.bounceOff(w10);   
  g2.bounceOff(w11);   
  g2.bounceOff(w12);   
  g2.bounceOff(w13);   
  g2.bounceOff(w14);   
  g2.bounceOff(w15);   
  g2.bounceOff(w16);   
  g2.bounceOff(w17);   
  g2.bounceOff(w18);   
  g2.bounceOff(w19);   
  g2.bounceOff(w20);   
  g2.bounceOff(w21);   
  g2.bounceOff(w22);   
  g2.bounceOff(w23);   
  g2.bounceOff(w24);   
  g2.bounceOff(w25);   
  g2.bounceOff(w26);   
  g2.bounceOff(w27);   
  g2.collide(w28);   
  g2.bounceOff(w29);   
  g2.bounceOff(w30);   
  g2.bounceOff(w31);   
  g2.bounceOff(w32);   
  g2.bounceOff(w33);   
  g2.bounceOff(w34);   
  g2.bounceOff(w35);   
  g2.bounceOff(w36);   
  g2.bounceOff(w37);   
  g2.bounceOff(w38);   
  g2.bounceOff(w39);   
  g2.bounceOff(w40);   
  g2.bounceOff(w41);   
  g2.bounceOff(w42);   
  g2.bounceOff(w43);   
  g2.bounceOff(w44);   
  g2.bounceOff(w45);   
  g2.bounceOff(w46);   
  g2.bounceOff(w47);   
  g2.bounceOff(w48);   
  g2.bounceOff(w49);   
  g2.bounceOff(w50);   
  g2.bounceOff(w51);   
  g2.bounceOff(w52);   
  g2.bounceOff(w53);   
  g2.bounceOff(w54);   
  g2.bounceOff(w55);   
  g2.bounceOff(w56);   
  g2.bounceOff(w57);   
  g2.bounceOff(w58);   
  g2.bounceOff(w59);   
  g2.bounceOff(w60);   
  g2.bounceOff(w61);   
  g2.bounceOff(w62);   
  g2.bounceOff(w63);   
  g2.bounceOff(w64);   
  g2.bounceOff(w65);   
  g2.bounceOff(w66);   
  g2.bounceOff(w67);   
  g2.bounceOff(w68);   
  g2.bounceOff(w69);   
  g2.bounceOff(w70);   
  g2.bounceOff(w71);   
  g2.bounceOff(w72);   
  g2.bounceOff(w73);   
  g2.bounceOff(w74);   
  g2.bounceOff(w75);   
  g2.bounceOff(w76);   
  g2.bounceOff(w77);   
  g2.bounceOff(w78);   
  g2.bounceOff(w79);   
  g2.bounceOff(w80);   
  g2.bounceOff(w81);   
  g2.bounceOff(w82);   
  g2.bounceOff(w83);   
  g2.collide(w84);   
  g2.bounceOff(w85);   
  g2.bounceOff(w86);   
  g2.bounceOff(w87);   
  g2.bounceOff(w88);   
  g2.bounceOff(w89);   
  g2.bounceOff(w90);   
  g2.bounceOff(w91);   
  g2.bounceOff(w92);   
  g2.bounceOff(w93);   
  g2.bounceOff(w94);
  g2.bounceOff(w95);   
  g2.bounceOff(w96);   
  g2.bounceOff(w97);   
  g2.bounceOff(w98);   
  g2.bounceOff(w99);   
  g2.bounceOff(w100);
  
  g3.collide(ww);
  g3.collide(wi);
  g3.collide(wl);
  g3.bounceOff(w1);   
  g3.bounceOff(w2);   
  g3.bounceOff(w3);   
  g3.bounceOff(w4);   
  g3.bounceOff(w5);   
  g3.bounceOff(w6);   
  g3.collide(w7);   
  g3.bounceOff(w8);   
  g3.bounceOff(w9);   
  g3.bounceOff(w10);   
  g3.bounceOff(w11);   
  g3.bounceOff(w12);   
  g3.bounceOff(w13);   
  g3.bounceOff(w14);   
  g3.bounceOff(w15);   
  g3.bounceOff(w16);   
  g3.bounceOff(w17);   
  g3.bounceOff(w18);   
  g3.bounceOff(w19);   
  g3.bounceOff(w20);   
  g3.bounceOff(w21);   
  g3.bounceOff(w22);   
  g3.bounceOff(w23);   
  g3.bounceOff(w24);   
  g3.bounceOff(w25);   
  g3.bounceOff(w26);   
  g3.bounceOff(w27);   
  g3.bounceOff(w28);   
  g3.bounceOff(w29);   
  g3.bounceOff(w30);   
  g3.bounceOff(w31);   
  g3.bounceOff(w32);   
  g3.bounceOff(w33);   
  g3.bounceOff(w34);   
  g3.bounceOff(w35);   
  g3.bounceOff(w36);   
  g3.bounceOff(w37);   
  g3.bounceOff(w38);   
  g3.bounceOff(w39);   
  g3.bounceOff(w40);   
  g3.bounceOff(w41);   
  g3.bounceOff(w42);   
  g3.bounceOff(w43);   
  g3.bounceOff(w44);   
  g3.bounceOff(w45);   
  g3.bounceOff(w46);   
  g3.bounceOff(w47);   
  g3.bounceOff(w48);   
  g3.bounceOff(w49);   
  g3.bounceOff(w50);   
  g3.bounceOff(w51);   
  g3.bounceOff(w52);   
  g3.bounceOff(w53);   
  g3.bounceOff(w54);   
  g3.bounceOff(w55);   
  g3.bounceOff(w56);   
  g3.bounceOff(w57);   
  g3.bounceOff(w58);   
  g3.bounceOff(w59);   
  g3.bounceOff(w60);   
  g3.bounceOff(w61);   
  g3.bounceOff(w62);   
  g3.bounceOff(w63);   
  g3.bounceOff(w64);   
  g3.bounceOff(w65);   
  g3.bounceOff(w66);   
  g3.bounceOff(w67);   
  g3.bounceOff(w68);   
  g3.bounceOff(w69);   
  g3.bounceOff(w70);   
  g3.bounceOff(w71);   
  g3.bounceOff(w72);   
  g3.bounceOff(w73);   
  g3.bounceOff(w74);   
  g3.bounceOff(w75);   
  g3.bounceOff(w76);   
  g3.bounceOff(w77);   
  g3.bounceOff(w78);   
  g3.bounceOff(w79);   
  g3.bounceOff(w80);   
  g3.bounceOff(w81);   
  g3.bounceOff(w82);   
  g3.bounceOff(w83);   
  g3.bounceOff(w84);   
  g3.bounceOff(w85);   
  g3.bounceOff(w86);   
  g3.bounceOff(w87);   
  g3.bounceOff(w88);   
  g3.bounceOff(w89);   
  g3.bounceOff(w90);   
  g3.bounceOff(w91);   
  g3.bounceOff(w92);   
  g3.bounceOff(w93);   
  g3.bounceOff(w94);
  g3.bounceOff(w95);   
  g3.bounceOff(w96);   
  g3.bounceOff(w97);   
  g3.bounceOff(w98);   
  g3.bounceOff(w99);   
  g3.bounceOff(w100);
  
  g4.collide(wa);
  g4.bounceOff(w1);   
  g4.bounceOff(w2);   
  g4.bounceOff(w3);   
  g4.bounceOff(w4);   
  g4.bounceOff(w5);   
  g4.bounceOff(w6);   
  g4.collide(w7);   
  g4.collide(w8);   
  g4.bounceOff(w9);   
  g4.bounceOff(w10);   
  g4.bounceOff(w11);   
  g4.bounceOff(w12);   
  g4.bounceOff(w13);   
  g4.bounceOff(w14);   
  g4.bounceOff(w15);   
  g4.bounceOff(w16);   
  g4.bounceOff(w17);   
  g4.bounceOff(w18);   
  g4.bounceOff(w19);   
  g4.bounceOff(w20);   
  g4.bounceOff(w21);   
  g4.bounceOff(w22);   
  g4.bounceOff(w23);   
  g4.bounceOff(w24);   
  g4.bounceOff(w25);   
  g4.bounceOff(w26);   
  g4.bounceOff(w27);   
  g4.bounceOff(w28);   
  g4.bounceOff(w29);   
  g4.bounceOff(w30);   
  g4.bounceOff(w31);   
  g4.bounceOff(w32);   
  g4.bounceOff(w33);   
  g4.bounceOff(w34);   
  g4.bounceOff(w35);   
  g4.bounceOff(w36);   
  g4.bounceOff(w37);   
  g4.bounceOff(w38);   
  g4.bounceOff(w39);   
  g4.bounceOff(w40);   
  g4.bounceOff(w41);   
  g4.bounceOff(w42);   
  g4.bounceOff(w43);   
  g4.bounceOff(w44);   
  g4.bounceOff(w45);   
  g4.bounceOff(w46);   
  g4.collide(w47);   
  g4.bounceOff(w48);   
  g4.bounceOff(w49);   
  g4.bounceOff(w50);   
  g4.bounceOff(w51);   
  g4.bounceOff(w52);   
  g4.bounceOff(w53);   
  g4.bounceOff(w54);   
  g4.bounceOff(w55);   
  g4.bounceOff(w56);   
  g4.bounceOff(w57);   
  g4.bounceOff(w58);   
  g4.bounceOff(w59);   
  g4.bounceOff(w60);   
  g4.bounceOff(w61);   
  g4.bounceOff(w62);   
  g4.bounceOff(w63);   
  g4.bounceOff(w64);   
  g4.bounceOff(w65);   
  g4.bounceOff(w66);   
  g4.bounceOff(w67);   
  g4.bounceOff(w68);   
  g4.bounceOff(w69);   
  g4.bounceOff(w70);   
  g4.bounceOff(w71);   
  g4.bounceOff(w72);   
  g4.bounceOff(w73);   
  g4.bounceOff(w74);   
  g4.bounceOff(w75);   
  g4.bounceOff(w76);   
  g4.bounceOff(w77);   
  g4.bounceOff(w78);   
  g4.bounceOff(w79);   
  g4.bounceOff(w80);   
  g4.bounceOff(w81);   
  g4.bounceOff(w82);   
  g4.bounceOff(w83);   
  g4.bounceOff(w84);   
  g4.bounceOff(w85);   
  g4.bounceOff(w86);   
  g4.bounceOff(w87);   
  g4.bounceOff(w88);   
  g4.bounceOff(w89);   
  g4.bounceOff(w90);   
  g4.bounceOff(w91);   
  g4.bounceOff(w92);   
  g4.bounceOff(w93);   
  g4.bounceOff(w94);
  g4.bounceOff(w95);   
  g4.bounceOff(w96);   
  g4.bounceOff(w97);   
  g4.bounceOff(w98);   
  g4.bounceOff(w99);   
  g4.bounceOff(w100);
 
    drawSprites();

}

function reset(){
  gameState = PLAY;
  gameover.visible=false;
  restart.visible=false;
  g1.velocityY=10;
  g2.velocityX=-10;
  g3.velocityX=-10; 
  g4.velocityY=10;
  pacman.x = 50;
  pacman.y = 150;
  g1.x = 25;
  g1.y = 300;
  g2.x = 375;
  g2.y = 70;
  g3.x = 250;
  g3.y = 325;
  g4.x = 85;
  g4.y = 75; 
  
}

