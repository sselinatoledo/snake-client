const IP = "10.0.2.15";
const PORT = 50541;
const success = "Successfully connected to game server";
const players = "Name: SLT";
const quit = "\u0003";
const moves = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
};
const messages = {
  "1": "Say: Hi there!",
  "2": "Say: Let's play!",
  "3": "Say: Good game!"
};

module.exports = {
  IP,
  PORT,
  success,
  players,
  quit,
  moves,
  messages
};