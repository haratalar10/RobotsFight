function fight(robot1, robot2, tactics) {
  let currentRobot = robot1;
  let opponentRobot = robot2;
  let gameOver = false;

  while (!gameOver) {
    const currentTactic = currentRobot.tactics.shift();
    const damage = tactics[currentTactic];
    opponentRobot.health -= damage;

    if (opponentRobot.health <= 0) {
      return `${currentRobot.name} has won the fight.`;
    }

    [currentRobot, opponentRobot] = [opponentRobot, currentRobot];

    if (currentRobot.tactics.length === 0 && opponentRobot.tactics.length === 0) {
      gameOver = true;
    }
  }

  if (robot1.health === robot2.health) {
    return "The fight was a draw.";
  } else {
    const winner = (robot1.health > robot2.health) ? robot1.name : robot2.name;
    return `${winner} has won the fight.`;
  }
}

// Example usage:
const robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
};

const robot2 = {
  "name": "Missile Bob",
  "health": 100,
  "speed": 21,
  "tactics": ["missile", "missile", "missile", "missile"]
};

const tactics = {
  "punch": 20,
  "laser": 30,
  "missile": 35
};

console.log(fight(robot1, robot2, tactics)); // Output: "Missile Bob has won the fight."
