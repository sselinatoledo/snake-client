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
  if (key === "\u0003") {
    process.exit();
  }
  const moves = {
    "w": "Move: up",
    "a": "Move: left",
    "s": "Move: down",
    "d": "Move: right",
  };
  for (const move in moves) {
    if (key === move) {
      connection.write(moves[move]);
    }
  }
  const messages = {
    "1": "Say: Hi there!",
    "2": "Say: Let's play!",
    "3": "Say: Good game!"
  };
  for (const message in messages) {
    if (key === message) {
      connection.write(messages[message]);
    }
  }
};
module.exports = { setupInput };