var options = [];
var container = document.getElementById("container");
var quests = document.getElementById("quests");
var questsCounter = 0, correct = 0;
var optionsIterator;

function loadQuests(){
  quests.innerHTML = Questions[questsCounter].text;
  for(optionsIterator = 0; optionsIterator < 4; ++optionsIterator){
    options[optionsIterator].innerHTML = Questions[questsCounter].options[optionsIterator];
   }                                                               
}
function proceedAnswer(event){
  var index = event.target.index;
  if(Questions[questsCounter].correct == index){
    correct++;
  }
  questsCounter++;
  if(questsCounter == Questions .length){
    document.body.innerHTML = "<p>ответов верно"+ correct +"/"+ Questions.length +"</p>";
  }
  else {
    
    loadQuests();   
  }   
}
for(optionsIterator = 0; optionsIterator < 4; ++optionsIterator){
  
  var option = document.createElement("div");
  option.classList.add("panel", "panel--option");
  option.index = optionsIterator;
  option.addEventListener("click", proceedAnswer);
  container.appendChild(option);
  options.push(option);
  
}
loadQuests();


