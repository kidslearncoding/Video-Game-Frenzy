// Variables: Creating a variable to store player score
var playerScore = 0;

// Function to log current score
function logPlayerScore() {
    console.log(`Current player score: ${playerScore}`);
}

// Practice calling function
logPlayerScore();



// Conditionals: Updating player score based on game events
function updateScore(event) {
    if (event === "enemyDefeated") {
        playerScore += 100;
    } else if (event === "coinCollected") {
        playerScore += 50;
    } else {
        console.log("No score change");
    }

    console.log(`Player score after event '${event}': ${playerScore}`);
}

// Practice calling function with different events
updateScore("enemyDefeated");
updateScore("coinCollected");



// For Loops: Loop through an array of game levels and log them
var gameLevels = ["Forest", "Desert", "Ice World", "Volcano"];

function logGameLevels() {
    for (var i = 0; i < gameLevels.length; i++) {
        console.log(`Level ${i + 1}: ${gameLevels[i]}`);
    }
}

// Practice calling function
logGameLevels();



// Arrays: Storing and managing a collection of power-ups
var powerUps = ["Speed Boost", "Shield", "Extra Life"];

// Function to log available power-ups
function logPowerUps() {
    console.log("Available power-ups:", powerUps);
}

// Practice calling function
logPowerUps();



// Adding a new power-up to the array
function addPowerUp(newPowerUp) {
    powerUps.push(newPowerUp);
    console.log(`After adding '${newPowerUp}', available power-ups are now:`, powerUps);
}

// Practice calling function
addPowerUp("Invisibility");



// Removing the last power-up from the array
function removeLastPowerUp() {
    powerUps.pop();
    console.log("After removing the last power-up, available power-ups are now:", powerUps);
}

// Practice calling function
removeLastPowerUp();



// Using a for loop to apply each power-up
function usePowerUps() {
    for (var i = 0; i < powerUps.length; i++) {
        console.log(`Using ${powerUps[i]}...`);
        // Here you might simulate what happens when a power-up is used
    }
    console.log("All power-ups used.");
}

// Practice calling function
usePowerUps();



// Demonstrating a conditional within a loop: finding a specific power-up
function findPowerUp(searchPowerUp) {
    var found = false;
    for (var i = 0; i < powerUps.length; i++) {
        if (powerUps[i] === searchPowerUp) {
            console.log(`${searchPowerUp} found at index ${i}.`);
            found = true;
            break; // Stops the loop once the power-up is found
        }
    }
    if (!found) {
        console.log(`${searchPowerUp} not found.`);
    }
}

// Practice calling function
findPowerUp("Shield");



function checkHighScore(currentScore) {
    const highScore = 100; // Example high score

    if (currentScore > highScore) {
        console.log("Congratulations! You've set a new high score!");
    } else {
        console.log("Try again to beat the high score!");
    }
}

// Practice calling function with different scores
checkHighScore(150); // Should congratulate the player
checkHighScore(50); // Should encourage to beat the high score





var playerName = "Hero"; // Initialize player name

function displayPlayerInfo() {
    console.log(`Player Name: ${playerName}, Score: ${playerScore}`);
}

// Practice calling function
displayPlayerInfo();



// Introduction to for loops
function levelUp(times) {
    for (var i = 0; i < times; i++) {
        playerScore += 10; // Increase player score by 10 for each level up
    }
    console.log(`Player leveled up ${times} times. New score: ${playerScore}`);
}

// Practice calling function
levelUp(3);



var inventory = ["sword", "shield", "potion"];

function displayInventory() {
    console.log("Player Inventory:");
    for (var i = 0; i < inventory.length; i++) {
        console.log(`${i + 1}. ${inventory[i]}`);
    }
}

// Practice calling function
displayInventory();



function addItemWand(item) {
    inventory.push(item);
    console.log(`Added ${item} to inventory.`);
}

// Practice calling function
addItemWand("magic wand");



function canEnterLevel(requiredScore, requiredItem) {
    if (playerScore >= requiredScore && inventory.includes(requiredItem)) {
        console.log("You can enter the level!");
    } else {
        console.log("You cannot enter the level. Increase your score or find the required item.");
    }
}

// Practice calling function
canEnterLevel(50, "magic wand");



function calculateTotalDamage() {
    var totalDamage = 0;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i] === "sword") {
            totalDamage += 30;
        } else if (inventory[i] === "magic wand") {
            totalDamage += 50;
        } else {
            totalDamage += 10; // Default damage for other items
        }
    }
    console.log(`Total damage with current inventory: ${totalDamage}`);
}

// Practice calling function
calculateTotalDamage();