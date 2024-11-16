//i looked at the code for dr. whalen's, there were 17 materials, 26 places, 4 light sources, and 22 inhabitants. pretty sure i accidentally put more
//i made it unique by making the entire thing about toontown. it all makes sense for toontown fans.
let quatrain = '';
let grammar=tracery.createGrammar(
{
   "material":[
    "GAGS",
    "GLOVES",
    "GEARS",
    "JELLYBEANS",
    "PARTIES",
    "PIES",
    "CAKES",
    "SAFES",
    "GRAND PIANOS",
    "LAFF",
    "TNT",
    "TRAP",
    "LURE",
    "TOON-UP",
    "THROW",
    "SQUIRT",
    "SOUND",
    "DROP",
    "WATER GUNS",
    "THUNDER CLOUD",
    "GEYSERS",
    "WEDDING CAKES",
    "TOONTANICS"],
    "place":[
      "IN TOONTOWN CENTRAL",
      "AT DONALD'S DOCK",
      "AT GOOFY'S SPEEDWAY",
      "IN YE OL TOONTOWN",
      "AT THE ESTATES",
      "IN DONALD'S DREAMLAND",
      "AT THE BRRRRGH",
      "IN MINNIE'S MELODYLAND",
      "AT DAISY'S GARDEN",
      "IN ACORN ACRES",
      "AT CASHBOT HQ",
      "AT LAWBOT HQ",
      "AT SELLBOT HQ",
      "AT BOSSBOT HQ",
      "IN THE BLIZZARD WIZZARD",
      "AT BOARDBOT HQ",
      "IN TOONSELTOWN",
      "IN TOONTOWN",
      "AT THE SELLBOT FACTORY",
      "AT THE COIN MINT",
      "AT THE DOLLAR MINT",
      "AT THE BULLION MINT"],
    "light_source":[
      "NATURAL LIGHT", 
      "STREET LAMPS",
      "CAR LIGHTS",
      "CANDLES"],
    "inhabitants":[
      "DOGS",
      "CATS",
      "DOODLES",
      "COGS",
      "RABBITS",
      "RACCOONS",
      "HORSES",
      "MICE",
      "DUCKS",
      "MONKEYS",
      "PIGS",
      "DEER",
      "BEAVERS",
      "ALLIGATORS",
      "CROCODILES",
      "FOXES",
      "BATS",
      "KIWIS",
      "KOALAS",
      "ARMADILLOS",
      "TURKEYS",
      "COG BOSSES"],

  "origin": "A HOUSE OF #material#\n\t#place#\n\t\tUSING #light_source#\n\t\t\tINHABITED BY #inhabitants#"
}
);



function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
frameRate(.5); //this does the refresh thing 

 

  for (let y = 70; y < height; y += 150) { //repeat repeat repeat

    quatrain=grammar.flatten("#origin#"); //this is the thing that makes the poem exist
    textFont('Courier New'); 
    textSize(20);
    text(quatrain, 50, y); //come on in
    
}
}