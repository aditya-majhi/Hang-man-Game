var fruit = ["APPLE" , "ORANGE" , "BANANA"];
var vegetables = ["POTATO" , "CARROT" , "BEANS"];
var category = [fruit , vegetables] ;
var catstring = ["fruit" , "vegetables"];
var randcat ;
var item ;
var chance = 6;
var len ;
var answerarr;
var dash;

$(".enter .start button").click(function(){
    $(".hangman h1").text("Hang-man Game");
    randitem();
    dash = "-".repeat(Number(len));
    $(".start button").hide(); 
    $(".total span").text("6");
    $(".remaining span").text("6")
    $(".category span").text(randcat);
    $(".letters span").text(len);
    answerarr = new Array(Number(len));
    answerarr.fill("-");
    $(".answer h2").text(dash);
});

$(".middle button").click(function(){
    var element = this.innerHTML ;
    var answer = "";
    var rep = 0;
    for(i = 0 ; i < Number(len) ; i++){
        if(element === item[i]){
            answerarr[i] = String(element);
            rep++;
        }
    }
    for(i = 0 ; i < Number(len) ; i++){
        answer = answer + answerarr[i].toString();
    }
    if(rep === 0){
        chance--;
        $(".remaining span").text(chance.toString());
        chance = Number(chance);
        $(this).css("background-color" , "red");
        check(chance);
    }
    else{
        $(this).css("background-color" , "green");
        $(".answer h2").text(answer);
    }
    win(answer);
})

function randitem(){
    var num1 = Math.floor(Math.random() * 2);
    var num2 = Math.floor(Math.random() * 3);
    randcat = catstring[num1];
    item = category[num1][num2];
    len = (item.length).toString();
}

function check(chance){
    if(chance === 0){
        reset();
        $(".hangman h1").text("Restart..");
    }
}

function win(answer){
    if(item === answer){
        reset();
        $(".hangman h1").text("Winner!!!");
    }
}

function reset(){
    chance = 6;
    answerarr = [];
    $(".start button").show();
    $(".middle button").css("background-color" , "white"); 
}