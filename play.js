// establishes a connection with the game server
const {connect} = require("./client")

const conn = connect();
    
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

    console.log("Connecting ...");