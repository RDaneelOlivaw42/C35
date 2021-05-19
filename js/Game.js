class Game{
    constructor(){

    }

    //retrieves gameState from database
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    //updates gameState on database
    update(state){
        database.ref('/').Update({
            gameState: state
        });
    }

    //displays form
    start(){
        if( gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}