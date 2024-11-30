
const divisions=[
  {
    id:1,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:2,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:3,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:4,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:5,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:6,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:7,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:8,
    isPlayed:false,
    playedBy:' '
  },
  {
    id:9,
    isPlayed:false,
    playedBy:' '
  }
];

let player1Turn=true;
let player2Turn=false;
let player1Score=0;
let player2Score=0;


const gridDiv=document.querySelector('.js-grid-div');

let gridDivHTML='';

divisions.forEach((division)=>{
  gridDivHTML +=`<div class="div${division.id} js-div-${division.id}"></div>`;
});

console.log(gridDivHTML);

gridDiv.innerHTML=gridDivHTML;



document.querySelector('.js-player1-score').innerHTML=player1Score;

document.querySelector('.js-player2-score').innerHTML=player2Score;

play();



function play(){
  divisions.forEach((division)=>{
    let div=document.querySelector(`.js-div-${division.id}`);
      div.addEventListener('click',()=>{
        if(division.isPlayed){
          return;
        } 
        if(player1Turn){
          div.innerHTML=`<img class="x-icon" src="images/X-icon.jpg">`;
          division.playedBy='player1';
          division.isPlayed=true;
          player1Turn=false;
          player2Turn=true;
        }else if(player2Turn){
          div.innerHTML=`<img class="o-icon" src="images/O-icon.jpg">`;
          division.playedBy='player2';
          division.isPlayed=true;
          player2Turn=false;
          player1Turn=true;
        }
      });
    });

    document.querySelector('.js-done-button').addEventListener('click',()=>{
      divisions.forEach((div1)=>{
        divisions.forEach((div2)=>{
          if((div1.id>=div2.id)){
            return;
          }
          divisions.forEach((div3)=>{
            if(div2.id>=div3.id){
              return;
            }
            if((div1.id===1&&div2.id===2&&div3.id===3)||(div1.id===1&&div2.id===4&&div3.id===7)||(div1.id===1&&div2.id===5&&div3.id===9)||(div1.id===2&&div2.id===5&&div3.id===8)||(div1.id===3&&div2.id===6&&div3.id===9)||(div1.id===7&&div2.id===8&&div3.id===9)||(div1.id===3&&div2.id===5&&div3.id===7)){
              if(div1.playedBy===div2.playedBy&&div2.playedBy===div3.playedBy&&div1.playedBy!==' '){
                if(div1.playedBy==='player1'){
                  player1Score++;
                }else{
                  player2Score++;
                }
              }
            }
          });
        });
      });
        
        document.querySelector('.js-player1-score').innerHTML=player1Score;
  
        document.querySelector('.js-player2-score').innerHTML=player2Score;

        gridDiv.innerHTML=gridDivHTML;
      divisions.forEach((div)=>{
        div.isPlayed=false;
        div.playedBy=' ';
      });
      player1Turn=true;
      player2Turn=false;
      play();
    });
  
}

  

  document.querySelector('.js-reset-button').addEventListener('click',()=>{
    divisions.forEach((div)=>{
      div.isPlayed=false;
      div.playedBy=' ';
    });
    player1Turn=true;
    player2Turn=false;
    player1Score=0;
    player2Score=0;
    document.querySelector('.js-player1-score').innerHTML=player1Score;
    document.querySelector('.js-player2-score').innerHTML=player2Score;
  });









