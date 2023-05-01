const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: "10.0.2.15",
        port: 50541,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    // event handler for incoming data
    conn.on("data", (data) => {
        console.log("Server says:", data);
    });

    // event handler for when the connection is first established
    conn.on("connect", () => {
        console.log("Connected to server!");
    });

    return conn;
};

console.log("Connecting ...");
connect();
