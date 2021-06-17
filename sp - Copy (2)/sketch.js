var bg1,clickhere,o,oo,s1,ch,s33,bg4,bg2,c3,gs,sate,sb,co1,c1,sun,s,bg2,bg3,il1,gg,g
var wa1,w2,wa2,aa,j1,jg1,ene1,swb1,a1,d2,d3,a2,a3,a4,a5,a6
var j,jj,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15,j16,j17,j18,j19,j20,j21,j22,j23,j24,j25,j26,j27,j28,j29,j30,j31,j32,j33,j34,j35
var fun=0,funn=0,gamestate=0
var t,tt,sbb,o1,oo1,g1,wa,swb,ene,gg1,pb,qg,q,w1,q1,qg1,pb1,td,e1,s22,q2,qg2,ssp,j,jg,score=0,fww,fw
function preload(){
  d=loadImage("g1.png");swbb=loadImage("mm.png")
  d2=loadImage("g2.png")
  d3=loadImage("g3.png")

fww=loadImage("freeze.png");wa1=loadImage("fwater.jpg")
swb=loadImage("sb.png");ene=loadImage("e.png")
swb1=loadImage("sb1.png");ene1=loadImage("e1.png");wa=loadImage("water.gif")
bg1=loadImage("mp1.jpg");bg3=loadImage("bggg.png")
bg4=loadImage("hh.png");ch=loadImage("ssp.png")
bg2=loadImage("l.png");sbi=loadImage("c/Idle (1).png")
ssp=loadAnimation("s1.png","s2.png","s3.png","s4.png","s3.png","s2.png","s1.png")
sb=loadAnimation("c/Run (1).png","c/Run (2).png","c/Run (3).png","c/Run (4).png","c/Run (5).png","c/Run (6).png")
c1=loadImage("i1.png");c2=loadImage("i2.png")
c3=loadImage("ikm.png");s2=loadImage("ki.png")
s22=loadImage("hc1.png");s3=loadImage("bgii.jpg")
sbb=loadAnimation("c/Jump (1).png","c/Jump (2).png","c/Jump (3).png","c/Jump (4).png","c/Jump (5).png","c/Jump (6).png","c/Jump (8).png","c/Jump (7).png","c/Jump (9).png","c/Jump (10).png")
sbb1=loadAnimation("w1.png","w2.png","w3.png");bb1=loadAnimation("pb1.png","pb2.png","pb3.png")
}
function setup (){
createCanvas(1000,600)
a1=createSprite(640,400,30,30)
a1.addImage(d)
a1.scale=0.3
a1.visible=false
a2=createSprite(760,350,30,30)
a2.addImage(d3)
a2.scale=0.3
a2.visible=false
a3=createSprite(930,290,30,30)
a3.addImage(d2)
a3.scale=0.3
a3.visible=false
a4=createSprite(1110,350,30,30)
a4.addImage(d3)
a4.scale=0.3
a4.visible=false
a5=createSprite(1270,400,30,30)
a5.addImage(d)
a5.scale=0.3
a5.visible=false
a6=createSprite(2300,300,30,30)
a6.addImage(d3)
a6.scale=0.3
a6.visible=false
a7=createSprite(2500,200,30,30)
a7.addImage(d)
a7.scale=0.3
a7.visible=false
a8=createSprite(5080,380,30,30)
a8.addImage(d2)
a8.scale=0.3
a8.visible=false
a9=createSprite(5160,330,30,30)
a9.addImage(d3)
a9.scale=0.3
a9.visible=false

a10=createSprite(1000,290,30,30)
a10.addImage(d)
a10.scale=0.3
a10.visible=false
a11=createSprite(1300,220,30,30)
a11.addImage(d3)
a11.scale=0.3
a11.visible=false
a12=createSprite(1350,220,30,30)
a12.addImage(d)
a12.scale=0.3
a12.visible=false
a13=createSprite(2050,430,30,30)
a13.addImage(d2)
a13.scale=0.3
a13.visible=false
a14=createSprite(2700,230,30,30)
a14.addImage(d3)
a14.scale=0.3
a14.visible=false
a15=createSprite(3400,230,30,30)
a15.addImage(d)
a15.scale=0.3
a15.visible=false
a16=createSprite(4200,290,30,30)
a16.addImage(d3)
a16.scale=0.3
a16.visible=false
a17=createSprite(4450,230,30,30)
a17.addImage(d2)
a17.scale=0.3
a17.visible=false
z=createSprite(615,210,30,30)
z.addImage(d)
z.scale=0.3
z.visible=false
z1=createSprite(750,280,30,30)
z1.addImage(d2)
z1.scale=0.3
z1.visible=false
z2=createSprite(890,370,30,30)
z2.addImage(d3)
z2.scale=0.3
z2.visible=false
z3=createSprite(1030,460,30,30)
z3.addImage(d)
z3.scale=0.3
z3.visible=false
z4=createSprite(1150,370,30,30)
z4.addImage(d3)
z4.scale=0.3
z4.visible=false
z5=createSprite(1250,280,30,30)
z5.addImage(d2)
z5.scale=0.3
z5.visible=false
z6=createSprite(1390,210,30,30)
z6.addImage(d)
z6.scale=0.3
z6.visible=false
z7=createSprite(2520,280,30,30)
z7.addImage(d2)
z7.scale=0.3
z7.visible=false
z8=createSprite(2820,280,30,30)
z8.addImage(d3)
z8.scale=0.3
z8.visible=false
z9=createSprite(3650,230,30,30)
z9.addImage(d)
z9.scale=0.3
z9.visible=false



















jg=new Group()
jg1=new Group()
gs=createSprite(2000,530,100,100)
gs.visible=false
gs=createSprite(3500,490,6500,20)
gs.visible=false
gs2=createSprite(0,520,7600,20)
gs2.visible=false
aa=createSprite(4170,520,1000,20)
aa.visible=false
w1=createSprite(4170,500,500,50)
w1.addImage(wa)
w1.scale=0.8
w1.visible=false
wa2=createSprite(4170,580,1000,50)
wa2.addImage(wa1)
wa2.scale=1.2
wa2.visible=false
fw=createSprite(3800,300,50,50)
fw.addImage(fww)
fw.scale=0.2
fw.visible=false
clickhere=createSprite(width-200,height-100,50,50)
clickhere.addImage(ch)
clickhere.scale=0.5
clickhere.visible=false
s=createSprite(350,450,50,50)
s.addAnimation("stop",sbi)
s.addAnimation("jump",sbb)
s.addAnimation("run",sb)
s.scale=0.2
s.visible=false
s1=createSprite(200,250,50,50)
s1.addAnimation("stop",sbi)
s1.addAnimation("jump",sbb)
s1.addAnimation("run",sb)
s1.scale=0.2
s1.visible=false
co1=createSprite(500,200,50,50)
co1.addImage(c1)
co1.scale=0.8
co1.visible=false
il1=createSprite(250,250,50,50)
il1.addImage(c2)
il1.scale=0.8
il1.visible=false
il2=createSprite(750,270,50,50)
il2.addImage(c3)
il2.scale=0.8
il2.visible=false
gg=new Group()
oo=new Group()
oo1=new Group()
tt=new Group()
gg1=new Group()
qg=new Group()
qg1=new Group()
qg2=new Group()
mgs1()
cg1()
cg2()
mgs()
makeGroundSprites()
}
function draw (){
if(gamestate==0){ 
 background(225)
 ///jg.destroyEach()
 //jg1.destroyEach()
 clickhere.visible=true
if(mousePressedOver(clickhere)){
gamestate=1
}
drawSprites ();
image(bg1,0,0,width,height)
fill("black")
textSize(50)      
textFont("algerian")
text("CASITA TRAIL",250,300)
drawSprites ();
}
if(gamestate==1){
  //jg.destroyEach()
  //jg1.destroyEach()
 background(225)
 image(s3,0,0,width,height)

 clickhere.visible=false
 co1.visible=true
 il1.visible=true
 il2.visible=true

 if(mousePressedOver(co1)){
    gamestate=2
    }
    if(mousePressedOver(il2)){
      gamestate=4
      }
    if(mousePressedOver(il1)){
      gamestate=3
      }
 drawSprites ();
}
if(gamestate==2){
background(225)
image(bg2,0,0,6500,height) 
a10.visible=true
a11.visible=true
a12.visible=true
a13.visible=true  
a14.visible=true
a15.visible=true
a16.visible=true
a17.visible=true
co1.visible=false
//a3.visible=true
il1.visible=false
il2.visible=false
s.visible=true  
clickhere.visible=false
s.velocityX=0
image(swb,camera.position.x-100,50,270,50)
if(funn!=0) { 
image(ene,camera.position.x-65,55,(funn/2)*50,32)}

image(swbb,camera.position.x-400,50,270,60)
if(score!=0)
image(ene1,camera.position.x-325,67,(score/10)*40,25)
if(keyDown("left")){
s.changeAnimation("run")
s.velocityX=-8 }
if(keyDown("right")){
s.changeAnimation("run")
s.velocityX=10  }
if(s.collide(qg1,callback2)){
score+=1}  
if(s.collide(gg1)){
score+=1 }   
if(keyDown("space")){
s.changeAnimation("jump")
s.velocityY=-10}
if(s.x<5500)
camera.position.x=s.x+400
s.velocityY+=0.5
s.collide(gs);
s.collide(gg)
s.collide(gg1)
if( s.collide(a10,callback2)){
  funn+=1
    } 
if( s.collide(a11,callback2)){
  funn+=1
    } 
if( s.collide(a12,callback2)){
  funn+=1
    } 
if( s.collide(a13,callback2)){
  funn+=1
    } 
if( s.collide(a14,callback2)){
  funn+=1
    } 
if( s.collide(a15,callback2)){
  funn+=1
    } 
if( s.collide(a16,callback2)){
  funn+=1
    } 
if( s.collide(a17,callback2)){
  funn+=1
    }  

if (frameCount % 130 == 0){
td()}
if(s.x<5500)
camera.position.x=s.x+430 
drawSprites()
fill("black") 
//text(s.x+","+s.y,s.x,s.y-100)
//text(mouseX+","+mouseY,mouseX,mouseY)
}
if(gamestate==3){
background(225)
image(bg3,0,0,6500,height) 
jg.visible=true
a1.visible=true
a6.visible=true
a8.visible=true
a7.visible=true
a9.visible=true
a3.visible=true
a4.visible=true
a5.visible=true
a2.visible=true
fw.visible=true
co1.visible=false
w1.visible=true
il1.visible=false
s.visible=true
clickhere.visible=false
il2.visible=false
s.velocityX=0
image(swb,camera.position.x-400,40,270,50)
if(funn!=0) { 
image(ene,camera.position.x-365,45,(funn/2)*50,32)}


image(swbb,camera.position.x-400,120,270,60)
if(score!=0) { 
image(ene1,camera.position.x-325,140,(score/10)*60,25)}


if(keyDown("left")){
    s.changeAnimation("run")
    s.velocityX=-7    
    }
    if(keyDown("right")){
    s.changeAnimation("run")
    s.velocityX=7    
     }
    
    s.velocityY+=0.5
  if (s.collide(gs2)){ 
    if(keyDown("space")){
      s.changeAnimation("jump")
       s.velocityY=-15   
      
    }
  }
  
  
   if( s.collide(oo)){
    if(keyDown("space")){
      s.changeAnimation("jump")
       s.velocityY=-15    
      
    }   
   }
    //s.collide(oo1);
    
    if( s.overlap(a1,callback2)){
      funn+=1
        } 
    if( s.collide(a2,callback2)){
      funn+=1
        } 
    if( s.collide(a3,callback2)){
      funn+=1
        } 
    if( s.collide(a4,callback2)){
      funn+=1
        } 
    if( s.collide(a5,callback2)){
      funn+=1
        } 
    if( s.collide(a6,callback2)){
      funn+=1
        } 
    if( s.collide(a7,callback2)){
      funn+=1
        } 
    if( s.collide(a8,callback2)){
      funn+=1
        } 
    if( s.collide(a9,callback2)){
      funn+=1
        }  
   
  if(s.collide(qg,callback2)){
    score+=1
      }  
      if(s.collide(oo1)){
        score+=1
          }    

      
 if(s.overlap(fw,callback2)){
wa2.visible=true
w1.visible=false
fun+=1
     }
  if(fun!=0)  {
    s.collide(aa)
    w1.visible=false 
  } 
     

   // s.collide(qg);
    if (frameCount % 150 == 0){
      pb()
     }
  
    fill("black")
    // text(s.x+","+s.y,s.x,s.y-100)
   //text(mouseX+","+mouseY,mouseX,mouseY)
    if(s.x<5500)
    camera.position.x=s.x+430
      drawSprites()
}
if(gamestate==4){
      background(225)
      image(bg4,0,0,6500,height)
      z.visible=true
      z1.visible=true
      z2.visible=true
      z3.visible=true
      z4.visible=true   
      z5.visible=true  
      z6.visible=true  
      z7.visible=true  
      z8.visible=true  
      z9.visible=true  
      il2.visible=false
     co1.visible=false
    il1.visible=false
      s1.visible=true
    clickhere.visible=false
    image(swbb,camera.position.x-400,50,270,60)
    if(score!=0)
    image(ene1,camera.position.x-325,67,(score/10)*300,25)
    image(swb1,camera.position.x-100,50,350,65)
if(funn!=0) { 
image(ene1,camera.position.x-20,67,(funn/2)*50,32)}

      
     s1.velocityX=0
  if(keyDown("left")){
      s1.changeAnimation("run")
      s1.velocityX=-7    
      }
      if(keyDown("right")){
      s1.changeAnimation("run")
      s1.velocityX=7    
       }
      
      s1.velocityY+=0.5
     
      if (frameCount % 90 == 0){
        pb1()
          }
      if(s1.collide(tt)){
        if(keyDown("space")){
          s1.changeAnimation("jump") 
           s1.velocityY=-15 
         
        }
      }
      if(s1.collide(qg2,callback2)){
        score+=1
          } 
          if( s1.collide(z,callback2)){
            funn+=1
              } 
          if( s1.collide(z1,callback2)){
            funn+=1
              } 
          if( s1.collide(z2,callback2)){
            funn+=1
              } 
          if( s1.collide(z3,callback2)){
            funn+=1
              } 
          if( s1.collide(z4,callback2)){
            funn+=1
              } 
          if( s1.collide(z5,callback2)){
            funn+=1
              } 
          if( s1.collide(z6,callback2)){
            funn+=1
              } 
          if( s1.collide(z7,callback2)){
            funn+=1
              } 
          if( s1.collide(z8,callback2)){
            funn+=1
              } 
          if( s1.collide(z9,callback2)){
            funn+=1
              }  
         
      
      //s1.collide(qg2);
      textSize(20)
      fill("black")
  //text(s1.x+","+s1.y,s1.x,s1.y-100)
      if(s1.x<5600)
      camera.position.x=s1.x+400
        drawSprites()
}
}
function callback2(s1, s2) {
  s2.remove();
}
function callback(s1, s2) {
  s1.remove();
}
function pb() {
  q=createSprite(3200,470,30,30)
 q.addAnimation("run",sbb1)
 q.scale=0.5
 q.lifetime=250
 q.velocityX = -5;
  qg.add(q)
}
function pb1() {
  q2=createSprite(5200,430,30,30)
 q2.addImage(s22)
 q2.scale=0.3
 q2.lifetime=160
 q2.velocityX = -5;
  qg2.add(q2)
}
function td() {
  e1=createSprite(3200,450,30,30)
 e1.addImage(s2)
 e1.scale=0.3
 e1.lifetime=160
 e1.velocityX = -5;
  qg1.add(e1)
}

