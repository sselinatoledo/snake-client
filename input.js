const { quit, moves, messages} = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === quit) {
    process.exit();
  }
  for (const move in moves) {
    if (key === move) {
      connection.write(moves[move]);
    }
  }
  for (const message in messages) {
    if (key === message) {
      connection.write(messages[message]);
    }
  }
};
module.exports = { setupInput };