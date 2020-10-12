function invoke() {
   
    //chatbox
    var div = document.createElement("div");
    div.setAttribute("class", "chatbox");
    div.setAttribute("id", "chatbox");
    div.setAttribute("style", "display:none" )
    document.getElementById("body").appendChild(div);

    //label
    var t = document.createElement("pre");
    t.innerText = "                         COVID Buddy                  X";
   
    t.setAttribute("onclick", "closeForm()");
    div.appendChild(t);

    

    //chatlogs
    var div1 = document.createElement("div");
    div1.setAttribute("class", "chatlogs");
    div1.setAttribute("id", "chatlogs");
    document.getElementById("chatbox").appendChild(div1);

    //chat-form
    var div0 = document.createElement("div");
    div0.setAttribute("class", "chat-form");
    div0.setAttribute("id", "chat-form");
    document.getElementById("chatbox").appendChild(div0);

    //textarea
    var div01 = document.createElement("textarea");
    div01.setAttribute("id", "input");
    document.getElementById("chat-form").appendChild(div01);

    //button
    var b2 = document.createElement("button");
    b2.setAttribute("id", "team1");
    b2.setAttribute("class", "b2");
    b2.setAttribute("onclick", "getinput()");
    b2.innerText = "Send";
    document.getElementById("chat-form").appendChild(b2);

    

    

    
}
var questions = ["hi", "how are you", "name","how is life","TCS helpline"];
var answers = ["hi buddy", "good", "CatalyST 2.0", "well,good","1800-209-3111"];
function getinput() {
    
    var text = document.getElementById("input").value;
    document.getElementById("input").value = "";
    var y = -1;
    for (var i = 0; i < questions.length; i++)
    {
        if (questions[i] == text)
        {
            y = i;
        }
    }
    var output = "";
    if (y == -1) {
        output = "say relavant";
    }
    else {
        output = answers[y];

    }
    //chatfriends
    var div2 = document.createElement("div");
    div2.setAttribute("class", "chat friend");
    div2.setAttribute("id", "chat friend");
    document.getElementById("chatlogs").appendChild(div2);
    //user-photo
    var div3 = document.createElement("div");
    div3.setAttribute("class", "user-photo");
    div3.setAttribute("id", "user-photo");
    div2.appendChild(div3);
    //img
    var div4 = document.createElement("img");
    div4.setAttribute("src", "sainsbury_logo.jpeg");
    div3.appendChild(div4);
    //chat-message
    var div5 = document.createElement("p");
    div5.setAttribute("class", "chat-message");
    div5.setAttribute("id", "chat-message");
    div5.innerHTML = text;
    div2.appendChild(div5);

    //self
    setTimeout(function () { //chatfriends
        var div2 = document.createElement("div");
        div2.setAttribute("class", "chat self");
        div2.setAttribute("id", "chat self");
        document.getElementById("chatlogs").appendChild(div2);
        //user-photo
        var div3 = document.createElement("div");
        div3.setAttribute("class", "user-photo");
        div3.setAttribute("id", "user-photo");
        div2.appendChild(div3);
        //img
        var div4 = document.createElement("img");
        div4.setAttribute("src", "bot.jpeg");
        div3.appendChild(div4);
        //chat-message
        var div5 = document.createElement("p");
        div5.setAttribute("class", "chat-message");
        div5.setAttribute("id", "chat-message");
        div5.innerHTML = output;
        div2.appendChild(div5);
 }, 2000);
    




}
function openForm() {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("open/close").setAttribute("onclick", "closeForm()");
    document.getElementById("open/close").style.display = "none";

}

function closeForm() {
    document.getElementById("open/close").style.display = "block";
    document.getElementById("chatbox").style.display = "none";

    document.getElementById("open/close").setAttribute("onclick", "openForm()");
    document.getElementById("open/close").innerText = "chat";
}