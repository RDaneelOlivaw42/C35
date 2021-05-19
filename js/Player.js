class Player{
    constructor(){

    }

    //reads playerCount from database
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
           playerCount = data.val();

        })
    }

    //updates playerCount on database
    updateCount(Count){
         database.ref('/').update({
             playerCount: Count
         })

    }

    //adds names as value to players on database
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
           name: name
        })
        
    }
}