var playerInfo = {
    name: window.prompt("What is your robot's name?");
    health: 100,
    attack: 10,
    money: 10
};
    

// check to see if the value of the playerHealth variable is greater than 0
if (playerInfo.health > 0) {
    console.log("Your player is still alive!");
    break;
}
var playerInfo.money = 10;

var playerInfo.attack = 10;
//Game States
//"WIN" - Player robot defeated all enemy-robots
//   *Fight all enemy-robots
//   *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1 ));
    return value;
};

var enemyInfo = [

{
name: "Roborto",
attack: 12
},
{
name: "Amy Android",
attack: 13
},
{
name: "Robo Trumble",
attack: 14
}];
var enemyHealth = 50;

console.log(enemyInfo.length)
for (var i = 0; i < enemyInfo.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyName[i] + "is at" + i + "index");
}
for (var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyNames);
}
// function to start a new game
var startGame = function () {
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    // other logic remains the same...

    for (var i = 0; i < enemyNames.lenth; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

            var pickedEnemyName = enemyNames[i];

          // generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerInfo.attack);

enemyHealth = Math.max(0, enemyHealth - damage);

            fight(pickedEnemyName);

            //if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyNames.length - 1) {
                 // ask if player wants to use the store before next round
var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

  // if yes, take them to the store() function
    if (storeConfirm) {
    shop();
}
            }
        }
        else {
            window.alert("You have lost you robot in battle! Game Over!");
            break;
        }
    }
    // play again
    startGame();
};
//function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }
};
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
startGame();
} 
else {
window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

var fight = function (enemyInfo.name) {
    // repeat and execute as long as th enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        fight(enemyNames[i]);
        //if the enemy-robot's health is zero or less, exit from yhe fight loop.
    }
// Alert players that they are starting the round
    if (playerHealth > 0) {
        // let player know what round they are in,  remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
        // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = Math.max(0, playerInfo.money - 10);
    console.log("playerInfo.money", playerInfo.money);
    break;
        }
          // if no (false), ask question again by running fight() again
    else {
    fight();
    }
window.alert(playerInfo.name + " has chosen to skip the fight!");
    }
    else {
window.alert("You need to choose a valid option. Try again!");
    };
        // ask player if they'd like to fight or run 
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.max(0, enemyHealth - playerInfo.attack);
        console.log(
            playerInfo.name + " attacked " + enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            // if the enemy-robot has health points, continue to fight
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }


        // remove player's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerInfo.health - damage);
        console.log(
            enemyInfo.name + " attacked " + playerInfo.name + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerHealth + " health left.");
        }
}:
        fight(enemyRobot);

    // start the game when the page loads
    startGame();
     // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();

    var shop = function () {
        // ask player what they would like to do
        var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL":// new case
    case "refill":
    if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

    // increase health and decrease money
    playerInfo.health = playerInfo.health + 20;
    playerInfo.money = playerInfo.money - 7;
}
else {
    window.alert("You don't have enough money!");
}

    break;
    case "UPGRADE": // new case
    case "upgrade":
if (playerMoney >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");

   // increase attack and decrease money
    playerInfo.attack = playerInfo.attack + 6;
    playerInfo.money = playerInfo.money - 7;
}
else {
    window.alert("You don't have enough money!");
}

    break;
    case "LEAVE": //new case
    case "leave":
    window.alert("Leaving the store.");
    break;
default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
}
    };