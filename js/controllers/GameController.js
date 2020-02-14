'use strict';
var gameApp = angular.module('gameApp', []);
gameApp.controller("GameController", function ($scope, $timeout, $interval, $http) {
 
  
 
let buttons = ["btn0", "btn1", "btn2", "btn3", "btn4","btn5", "btn6", "btn7", "btn8", "btn9","btn10", "btn11", "btn12", "btn13", "btn14","btn15", "btn16", "btn17", "btn18", "btn19","btn20", "btn21", "btn22", "btn23", "btn24",];
let buttons01 = ["btn00", "btn01", "btn02", "btn03", "btn04","btn05","btn06", "btn07", "btn08", "btn09",
"btn010", "btn011", "btn012", "btn013", "btn014","btn015","btn016", "btn017", "btn018", "btn019",
"btn020", "btn021", "btn022", "btn023", "btn024","btn025","btn026", "btn027", "btn028", "btn029",
"btn030", "btn031", "btn032", "btn033", "btn034","btn035","btn036", "btn037", "btn038", "btn039",
"btn040", "btn041", "btn042", "btn043", "btn044","btn045","btn046", "btn047", "btn048", "btn049",
"btn050", "btn051", "btn052", "btn053", "btn054","btn055","btn056", "btn057", "btn058", "btn059",
"btn060", "btn061", "btn062", "btn063", "btn064","btn065","btn066", "btn067", "btn068", "btn069",
"btn070", "btn071", "btn072", "btn073", "btn074","btn075","btn076", "btn077", "btn078", "btn079",
"btn080", "btn081", "btn082", "btn083", "btn084","btn085","btn086", "btn087", "btn088", "btn089",
"btn090", "btn091", "btn092", "btn093", "btn094","btn095","btn096", "btn097", "btn098", "btn099"];
let buttons02 =["btn000", "btn001", "btn002", "btn003", "btn004","btn005","btn006", "btn007", "btn008", "btn009","btn0010","btn0011", "btn0012", "btn0013", "btn0014",
"btn0015", "btn0016", "btn0017", "btn0018", "btn0019","btn0020","btn0021", "btn0022", "btn0023", "btn0024","btn0025","btn0026", "btn0027", "btn0028", "btn0029",
"btn0030", "btn0031", "btn0032", "btn0033", "btn0034","btn0035","btn0036", "btn0037", "btn0038", "btn0039","btn0040","btn0041", "btn0042", "btn0043", "btn0044",
"btn0045", "btn0046", "btn0047", "btn0048", "btn0049","btn0050","btn0051", "btn0052", "btn0053", "btn0054","btn0055","btn0056", "btn0057", "btn0058", "btn0059",
"btn0060", "btn0061", "btn0062", "btn0063", "btn0064","btn0065","btn0066", "btn0067", "btn0068", "btn0069","btn0070","btn0071", "btn0072", "btn0073", "btn0074",
"btn0075", "btn0076", "btn0077", "btn0078", "btn0079","btn0080","btn0081", "btn0082", "btn0083", "btn0084","btn0085","btn0086", "btn0087", "btn0088", "btn0089",
"btn0090", "btn0091", "btn0092", "btn0093", "btn0094","btn0095","btn0096", "btn0097", "btn0098", "btn0099","btn00100","btn00101", "btn00102", "btn00103", "btn00104",
"btn0105", "btn0106", "btn0107", "btn0108", "btn0109","btn0110","btn0111", "btn0112", "btn0113", "btn0114","btn0115","btn0116", "btn0117", "btn0118", "btn0119",
"btn0120", "btn0121", "btn0122", "btn0123", "btn0124","btn0125","btn0126", "btn0127", "btn0128", "btn0129","btn0130","btn0131", "btn0132", "btn0133", "btn0134",
"btn0135", "btn0136", "btn0137", "btn0138", "btn0139","btn0140","btn0141", "btn0142", "btn0143", "btn0144","btn0145","btn0146", "btn0147", "btn0148", "btn0149",
"btn0150", "btn0151", "btn0152", "btn0153", "btn0154","btn0155","btn0156", "btn0157", "btn0158", "btn0159","btn0160","btn0161", "btn0162", "btn0163", "btn0164",
"btn0165", "btn0166", "btn0167", "btn0168", "btn0169","btn0170","btn0171", "btn0172", "btn0173", "btn0174","btn0175","btn0176", "btn0177", "btn0178", "btn0179",
"btn0180", "btn0181", "btn0182", "btn0183", "btn0184","btn0185","btn0186", "btn0187", "btn0188", "btn0189","btn0190","btn0191", "btn0192", "btn0193", "btn0194",
"btn0195", "btn0196", "btn0197", "btn0198", "btn0199","btn0200","btn0201", "btn0202", "btn0203", "btn0204","btn0205","btn0206", "btn0207", "btn0208", "btn0209",
"btn0210", "btn0211", "btn0212", "btn0213", "btn0214","btn0215","btn0216", "btn0217", "btn0218", "btn0219","btn0220","btn0221", "btn0222", "btn0223", "btn0224"];
let AIbuttons = [];
let PlayerButtons = [];
let GameMode = "Easy";
let howManyTimes00 = 25;
let randomId00 = 25;
let timedelay00 = 2000;
var buttons00;
let win_length00 = 12;

let delays =[];
let winner_current;
let win_time;
let firstTime = true;

  let currenId;
  let currentBtnId;
  let howManyTimes = 25;
  let i = 0;

  let play = false;
  let currentBtnIdpushAI = true;
  let clickedButtonId = "";
   
  //Main game loop
  function Loop(){
    $interval(function(){
      // do wahetever you need here
      fillButton0();
      console.log('running');
  },timedelay00, howManyTimes00);
  }
  
  





//Function for button filling by color
function fillButton0(){
  currenId = Math.floor(Math.random() * randomId00);
  currentBtnId = buttons00[currenId];
  
  console.log(currentBtnId);
  
  angular.element(document.getElementById(currentBtnId)).css('background-color','blue');
  //
  buttons00.splice(buttons00.indexOf(currentBtnId), 1);
  AIbuttons.push(currentBtnId);
  if(buttons00.length < 1){
    if(PlayerButtons.length > win_length00){
      document.getElementById("winner").innerHTML = "Player won!";
      
      var x = document.getElementById("first_name").value;
     
      winner_current = x; 
      
    }else{
      document.getElementById("winner").innerHTML = "AI won!";
      
      winner_current = "Computer";
    }
    var currentdate = new Date();
    win_time = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    sendJSON();
    document.getElementById("playButton").innerText = 'PLAY AGAIN';
       
  } 
  randomId00--;
}

//refresh page function
function refreshPage() { 
  location.reload(); 
}


//function for in-game buttons processing
$scope.reply_click = function (event)
  {
    if(play){
     // alert(event.target.id);      
      if(currentBtnId == event.target.id){
        
        angular.element(document.getElementById(currentBtnId)).css('background-color','green');
        
        PlayerButtons.push(currentBtnId);
      }
    }  
    
  }

  //function for Game Mode choosing
  $scope.reply_click1 = function (event)
  {
    //alert(clicked_id);
    switch (event.target.id) {
      case "select0":
        document.getElementById("gameselector").innerText = 'Easy mode';
       
        angular.element("#game_0").css('display','');
        
        angular.element("#game_1").css('display','none');
        
        angular.element("#game_2").css('display','none');
        GameMode = "Easy";
        break;
      case "select1":
        document.getElementById("gameselector").innerText = 'Normal mode';
        document.getElementById("game_0").style.display = 'none';
        document.getElementById("game_1").style.display = '';
        document.getElementById("game_2").style.display = 'none';
        GameMode = "Normal";
        break;
      case "select2":
        document.getElementById("gameselector").innerText = 'Hard mode';
        document.getElementById("game_0").style.display = 'none';
        document.getElementById("game_1").style.display = 'none';
        document.getElementById("game_2").style.display = '';
        GameMode = "Hard";
        break;
      default:
        document.getElementById("gameselector").innerText = 'Pick game mode';
        document.getElementById("game_0").style.display = '';
        document.getElementById("game_1").style.display = 'none';
        document.getElementById("game_2").style.display = 'none';
        GameMode = "Easy";
    }    
  }
  /*
*/
  //Function for game playing
  $scope.playGame = function (){
   // alert("game started!");
   //check the first time game launch, if not first time - refresh the page
    if(firstTime == false){
      refreshPage();       
    }
  
  //Initial settings depends on game mode
    switch(GameMode){
      case "Easy":
        howManyTimes00 = 25;
        randomId00 = 25;
        //timedelay00 = 2000;
        timedelay00 = delays[0];
        buttons00 = buttons;
        win_length00 = 12;
        break;
      case "Normal":
        howManyTimes00 = 100;
        randomId00 = 100;
        //timedelay00 = 1000;
        timedelay00 = delays[1];
        buttons00 = buttons01;
        win_length00 = 50;
        break;
      case "Hard":
        howManyTimes00 = 225;
        randomId00 = 225;
        //timedelay00 = 900;
        timedelay00 = delays[2];
        buttons00 = buttons02;
        win_length00 = 113;
        break;
      default:
        howManyTimes00 = 25;
        randomId00 = 25;
        //timedelay00 = 2000;
        timedelay00 = delays[0];
        buttons00 = buttons;
        win_length00 = 12;

    }
    //launch game loop
    Loop();
    play = true;
    firstTime = false;
  }
  
  
  //function for Winners results sending to back end
  function sendJSON(){                
    let result = document.getElementById('test');             
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "https://starnavi-frontend-test-task.herokuapp.com/winners"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 

            // Print received data from server 
           // result.innerHTML = this.responseText; 
            result.innerHTML = "Result sent!";
        } 
    }; 

    // Converting JSON data to string     
    var data = JSON.stringify({ "winner": winner_current, "date": win_time }); 
    // Sending data with the request 
    xhr.send(data); 
} 
  
 
 


//get the initial game settings from back end
 $.get('https://starnavi-frontend-test-task.herokuapp.com/game-settings',function(data){
  //console.log(data);
 var k;
 var j = 0;
 var resp = data;
        for(k in resp)
        {
          console.log(resp[k].field);
          console.log(resp[k].delay);
          delays[j] = resp[k].delay;
          j++;         
        }       
},'json');



//get the winners info from back end
$http.get("https://starnavi-frontend-test-task.herokuapp.com/winners").then(function (response) {
  $scope.myData = response.data;
  console.log(response.data);
});


  //hide the certain game fields by default  
  $scope.GameMode = "Pickup Game Mode";
  document.getElementById("game_1").style.display = 'none';
  document.getElementById("game_2").style.display = 'none';
  //start the game by the click "PLAY" button
  //document.getElementById("playButton").onclick = playGame;
  



});



  



          

        

