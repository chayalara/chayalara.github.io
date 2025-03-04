function showRandomVanguard() {
    const vanguards = [
        { src: "images/hulk.jpg", caption: "Bruce Banner (Hulk)" },
        { src: "images/captainamerica.jpg", caption: "Captain America" },
        { src: "images/strange.jpg", caption: "Doctor Strange" },
        { src: "images/groot.jpg", caption: "Groot" },
        { src: "images/magneto.jpg", caption: "Magneto" },
        { src: "images/peni.jpg", caption: "Peni Parker" },
        { src: "images/thething.jpg", caption: "The Thing" },
        { src: "images/thor.jpg", caption: "Thor" },
        { src: "images/venom.jpg", caption: "Venom" }
    ];

    const randomVanguard = vanguards[Math.floor(Math.random() * vanguards.length)];

    // Replace the placeholder with the random character image
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("character-image").src = randomVanguard.src;
    document.getElementById("character-caption").textContent = randomVanguard.caption;

    // Show the character image and caption
    document.getElementById("character-image").style.display = "block";
    document.getElementById("character-caption").style.display = "block";
}

function showRandomDuelist() {
    const duelists = [
        { src: "images/blackpanther.jpg", caption: "Black Panther" },
        { src: "images/blackwidow.jpg", caption: "Black Widow" },
        { src: "images/hawkeye.jpg", caption: "Hawkeye" },
        { src: "images/hela.jpg", caption: "Hela" },
        { src: "images/humantorch.jpg", caption: "Human Torch" },
        { src: "images/ironfist.jpg", caption: "Iron Fist" },
        { src: "images/ironman.jpg", caption: "Iron Man" },
        { src: "images/magik.jpg", caption: "Magik" },
        { src: "images/mrfantastic.jpg", caption: "Mister Fantastic" },
        { src: "images/moonknight.jpg", caption: "Moon Knight" },
        { src: "images/namor.jpg", caption: "Namor" },
        { src: "images/psylock.jpg", caption: "Psylocke" },
        { src: "images/wanda.jpg", caption: "Scarlet Witch" }, // Added Scarlet Witch
        { src: "images/spiderman.jpg", caption: "Spider-Man" },
        { src: "images/squirrelgirl.jpg", caption: "Squirrel Girl" },
        { src: "images/starlord.jpg", caption: "Star-Lord" },
        { src: "images/storm.jpg", caption: "Storm" },
        { src: "images/punisher.jpg", caption: "The Punisher" },
        { src: "images/bucky.jpg", caption: "Winter Soldier" },
        { src: "images/wolverine.jpg", caption: "Wolverine" }
    ];

    const randomDuelist = duelists[Math.floor(Math.random() * duelists.length)];

    // Replace the placeholder with the random character image
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("character-image").src = randomDuelist.src;
    document.getElementById("character-caption").textContent = randomDuelist.caption;

    // Show the character image and caption
    document.getElementById("character-image").style.display = "block";
    document.getElementById("character-caption").style.display = "block";
}

function showRandomStrategist() {
    const strategists = [
        { src: "images/adamwarlock.jpg", caption: "Adam Warlock" },
        { src: "images/cloakanddagger.jpg", caption: "Cloak & Dagger" },
        { src: "images/theinvisiblewoman.jpg", caption: "Invisible Woman" },
        { src: "images/jeff.jpg", caption: "Jeff the Land Shark" },
        { src: "images/loki.jpg", caption: "Loki" },
        { src: "images/luna.jpg", caption: "Luna Snow" },
        { src: "images/mantis.jpg", caption: "Mantis" },
        { src: "images/rocket.jpg", caption: "Rocket Raccoon" }
    ];

    const randomStrategist = strategists[Math.floor(Math.random() * strategists.length)];

    // Replace the placeholder with the random character image
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("character-image").src = randomStrategist.src;
    document.getElementById("character-caption").textContent = randomStrategist.caption;

    // Show the character image and caption
    document.getElementById("character-image").style.display = "block";
    document.getElementById("character-caption").style.display = "block";
}

function showRandomAll() {
    // Combine all characters into a single array
    const allCharacters = [
        { src: "images/hulk.jpg", caption: "Bruce Banner (Hulk)" },
        { src: "images/captainamerica.jpg", caption: "Captain America" },
        { src: "images/strange.jpg", caption: "Doctor Strange" },
        { src: "images/groot.jpg", caption: "Groot" },
        { src: "images/magneto.jpg", caption: "Magneto" },
        { src: "images/peni.jpg", caption: "Peni Parker" },
        { src: "images/thething.jpg", caption: "The Thing" },
        { src: "images/thor.jpg", caption: "Thor" },
        { src: "images/venom.jpg", caption: "Venom" },
        { src: "images/blackpanther.jpg", caption: "Black Panther" },
        { src: "images/blackwidow.jpg", caption: "Black Widow" },
        { src: "images/hawkeye.jpg", caption: "Hawkeye" },
        { src: "images/hela.jpg", caption: "Hela" },
        { src: "images/humantorch.jpg", caption: "Human Torch" },
        { src: "images/ironfist.jpg", caption: "Iron Fist" },
        { src: "images/ironman.jpg", caption: "Iron Man" },
        { src: "images/magik.jpg", caption: "Magik" },
        { src: "images/mrfantastic.jpg", caption: "Mister Fantastic" },
        { src: "images/moonknight.jpg", caption: "Moon Knight" },
        { src: "images/namor.jpg", caption: "Namor" },
        { src: "images/psylock.jpg", caption: "Psylocke" },
        { src: "images/wanda.jpg", caption: "Scarlet Witch" }, // Added Scarlet Witch
        { src: "images/spiderman.jpg", caption: "Spider-Man" },
        { src: "images/squirrelgirl.jpg", caption: "Squirrel Girl" },
        { src: "images/starlord.jpg", caption: "Star-Lord" },
        { src: "images/storm.jpg", caption: "Storm" },
        { src: "images/punisher.jpg", caption: "The Punisher" },
        { src: "images/bucky.jpg", caption: "Winter Soldier" },
        { src: "images/wolverine.jpg", caption: "Wolverine" },
        { src: "images/adamwarlock.jpg", caption: "Adam Warlock" },
        { src: "images/cloakanddagger.jpg", caption: "Cloak & Dagger" },
        { src: "images/theinvisiblewoman.jpg", caption: "Invisible Woman" },
        { src: "images/jeff.jpg", caption: "Jeff the Land Shark" },
        { src: "images/loki.jpg", caption: "Loki" },
        { src: "images/luna.jpg", caption: "Luna Snow" },
        { src: "images/mantis.jpg", caption: "Mantis" },
        { src: "images/rocket.jpg", caption: "Rocket Raccoon" }
    ];

    const randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];

    // Replace the placeholder with the random character image
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("character-image").src = randomCharacter.src;
    document.getElementById("character-caption").textContent = randomCharacter.caption;

    // Show the character image and caption
    document.getElementById("character-image").style.display = "block";
    document.getElementById("character-caption").style.display = "block";
}
