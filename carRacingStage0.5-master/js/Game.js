class Game {
  constructor(){}
  //Read gameState from database
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
//Update gameState in your database
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }


play(){
form.hide()
textSize(30)
text("GO",250,200);
Player.getPlayerInfo()

if(allPlayers !== undefined)
{
var y = 130;

for (var plr in allPlayers){

  if (plr === "player"+player.index){
    fill ( " red")
  }
  else{
    fill("black")
  }
y = y+ 30;
textSize (20)
text (allPlayers[plr].name + " :" + allPlayers[plr].distance, 100, y)

}
}

if (keyIsDown(UP_ARROW) && player.index !== null){
player.distance = player.distance +30;
player.update();

}


}

}