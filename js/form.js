class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME !!!");
        title.position(130,20);

        var input=createInput("NAME");
        input.position(130,160);

        var button=createButton("PLAY");
    
        button.position(250,200);
        button.mousePressed(function(){
       input.hide();
       button.hide();
       var name=input.value();
       var greeting=createElement('h3');
        greeting.html("HELLO!"+name);
        greeting.position(150,150);
        });
    }
}