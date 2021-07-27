class MENU{
    constructor(){
        this.title=createElement('h1');
        this.b1=createButton("Start");
        this.radioMess = createElement('h2');
        this.b2=createButton("Skip to GameState2");
        
    }
   
    hide(){
        this.b1.hide();
        this.title.hide();
        this.b2.hide();
      }

    display(){
        this.title.html('Self-Designed Game')
        this.title.position(600,100);
        this.b1.position(700,700);
        this.b2.position(1000,500);
        
     this.b1.mousePressed(()=>{
     this.b1.hide();
     this.b2.hide();
     this.title.hide();
     this.radioMess.html('--static--this is --static-- 3 crewmates dead. I --static-- one alive. --static-- supply left for me to surv --static-- days.Out of the 5 vials brought, one --static-- left. Sending my crashed location --static-- if anyone can hear me, come help me with the --static-- We might be still able to stop this if we can use the vials perfectly. --static-- over and out.')
     this.radioMess.position(10,0);
     gameState=1;

    })

    this.b2.mousePressed(()=>{
        this.b1.hide();
        this.b2.hide();
        this.title.hide();
        gameState=2;
    })
    }
}