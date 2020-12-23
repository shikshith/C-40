class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //add the rank property for the player to inform us which player reached the end first
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  //read the value of cars at end from the database
  getCarsAtEnd(){
    var rankRef = database.ref('carsAtEnd')
    rankRef.on("value",(data)=>{
      this.rank= data.val();

    })
  }
  //write a new value for cars at end in the database
  //since this is a common function for all the objects, make it static
  static updateCarsAtEnd(rank){
    database.ref('/').update({
        carsAtEnd : rank
    })
  }
}
