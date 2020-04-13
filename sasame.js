//LEXICAL SASAME

/* THE SEED */
//Let's plant a seed that grows into a tree that can feed everyone!
var sasame = 'Sasame'; //Oh look! A cute, empty little seed.

//A seed needs water, soil, light, carbon dioxide (CO2), and a little luck!
/* THE LUCK */
//or a way to introduce some randomness
function randInt(min, max, positive) {
  let num;
  if (positive === false) {
    num = Math.floor(Math.random() * max) - min;
    num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  } else {
    num = Math.floor(Math.random() * max) + min;
  }
  return num;
}
/* THE CO2 */
//A tree gets most of its mass from carbon dioxide!
var CO2 = ' '; //it's not much.
/* THE SOIL */
//Soil contains trace minerals. Never know what we'll need!
var fertilizer = `
  \`\\\n\t1234567890-=qwertyuiop[]
  \asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+
  QWERYUIOP{}|ASDGHJKL:"ZXCVBNM<>?'
  `;
var soil = fertilizer;
const potSize = 10000;
var doc = '';
/* THE WATER */
//The water solubulizes the soil
//it's also a raw material like CO2
var H2O = function(){
  //A particle should be no bigger than a word
  //if wordsize is x
  var p = '0.' + randInt(0, 9);
  p = parseFloat(p, 10);
  //So this way we get words of different sizes
  var rar = randInt(0, soil.length);
  var r2 = randInt(1, 20*p);
  var ret = soil.substr(rar, r2);
  return ret;
};
/* THE LIGHT! */
//Something needs to give Sasame the energy to photosynthesize all this stuff
//That something is the user activity that will cause the following:
function photosynthesize(){
  var water = H2O();
  sasame += CO2 + water;
  //lose half as waste
  var waste = CO2 + water;
  waste = waste.substr(0, waste.length);
  soil += waste;
  //And our degradation into the environment
  var rar = randInt(0, sasame.length);
  var r2 = randInt(0, sasame.length);
  //lose about 1%
  soil += sasame.substr(rar, sasame.length*0.01);
}
function removeSubStr(str, startIndex, count) {
    return str.substr(0, startIndex) + str.substr(startIndex + count);
}

var counter = 0;
$(document).on('click', '#add_soil', function(){
  //or should say if environment is changing
  //only do half the time
  if(counter % 2 == 0){
    doc += $('#soil_input').val();
    var rar = randInt(0, doc.length);
    var r2 = randInt(0, doc.length);
    soil += doc.substr(rar, r2);
    // if(counter % 3 == 0){
    //   soil = removeSubStr(soil, 0, r2); //constantly drain soil
    // }
    console.log(doc);
    //essentially means eat new food or change environment
    if(counter == 0 || counter % 50 == 0){
      console.log('refreshed soil');
      startFetch(100, 500);
    }
  }
  photosynthesize();
  //Keep climbing the tree! The fruit's up there!
  if(sasame.length > potSize/2){
    sasame = removeSubStr(sasame, 0, sasame.length/2);
  }
  //hard refresh soil
  if(soil.length > potSize){
    soil = doc + fertilizer;
  }
  $('#lexical_sasame').text(sasame);
  ++counter;
});

var interval = setInterval(function(){
  $('#add_soil').click();
  // $('#soil_input').val('');
}, 100);
$(document).on('click', '#stop', function(){
  clearInterval(interval)
});

 
    var tempscript = null, minchars, maxchars, attempts;

    function startFetch(minimumCharacters, maximumCharacters, isRetry) {
      if (tempscript) return; // a fetch is already in progress
      if (!isRetry) {
        attempts = 0;
        minchars = minimumCharacters; // save params in case retry needed
        maxchars = maximumCharacters;
      }
      tempscript = document.createElement("script");
      tempscript.type = "text/javascript";
      tempscript.id = "tempscript";
      tempscript.src = "http://en.wikipedia.org/w/api.php"
        + "?action=query&generator=random&prop=extracts"
        + "&exchars="+maxchars+"&format=json&callback=onFetchComplete&requestid="
        + Math.floor(Math.random()*999999).toString();
      document.body.appendChild(tempscript);
      // onFetchComplete invoked when finished
    }

    function onFetchComplete(data) {
      document.body.removeChild(tempscript);
      tempscript = null
      var s = getFirstProp(data.query.pages).extract;
      s = htmlDecode(stripTags(s));
      if (s.length > minchars || attempts++ > 5) {
        doc = s;
      } else {
        startFetch(0, 0, true); // retry
      }
    }

    function getFirstProp(obj) {
      for (var i in obj) return obj[i];
    }

    // This next bit borrowed from Prototype / hacked together
    // You may want to replace with something more robust
    function stripTags(s) {
      return s.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "");
    }
    function htmlDecode(input){
      var e = document.createElement("div");
      e.innerHTML = input;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }


//GRAPHICAL SASAME


//Organization function
//find opening and closing tags and separate them into chunks
//then remove tags from the chunks
//to get pieces of sensible data
function organize(information){
  var open = '@sasame';
  var close = 'sasame@';
  var split = '@sasame@';
  var skipping = false;
  var numOpen = 0;
  var numClosed = 0;
  var chunks = [];
  //first organize line by line
  var lines = information.split('\n');
  var count = 0;
  var finished = false;
  var readLines = function(lines, callback){
    for(var i = 0; i < lines.length; ++i){
      if(line == open && !skipping){
        //we need to skip to the closing tag and get everything in between
        skipping = true;
        skipStart = i + 1; //don't include tag
      }
      if(skipping){
        if(line == closed){
          //found the closing tag!
          skipping = false;
          skipEnd = i; //slice doesn't include tag
          //get all the lines in between
          chunks.push(lines.slice(skipStart, skipEnd));
          //start again in smaller data
          return readLines(lines.slice(skipStart, skipEnd));
        }
      }
    }
    //if we stop running into tags eventually we'll just pass the for loop
    callback();
  }
  readLines(lines, function(){
    //and now we split by words!
    chunks.foreach(function(chunk){
      chunks.push(chunk.split(split));
    });
    return chunks;
  });
}

//Reorganization function
//create a random rearrangement of chunks
function reorganize(chunks, repeats=false){
  var returnList = [];
  var length = randInt(1, chunks.length);
  var rar;
  var rarList;
  var iterationComplete = false;
  for(var i = 0; i < length; ++i){
    iterationComplete = false;
    while(!iterationComplete){
      rar = randInt(0, chunks.length - 1);
      //only repeat randoms if allowed
      if(!rarList.includes(rar) || repeats){
        rarList.push(rar);
        returnList.push(chunks[rar]);
        iterationComplete = true;
      }
    }
  }
}

//NOTE: Passages in Sasame are already organized (into passages)
//So you only need to reorganize them.
