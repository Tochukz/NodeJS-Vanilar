const net = require("net");

const readlineSync = require("readline-sync");
const colors = require("colors");

const HOST = '127.0.0.1';
const PORT = 9000;


let client = null;

function OpenConnection() {
    if (client) {
        console.info('--Connection is already open'.red);
        setTimeout(() =>{
          menu();
        }, 0);
        return;
    }

    client = new net.Socket();
    
    // Handling events
    client.on('error', (err) => {
        client.destroy();
        client = null;
        console.info('ERROR: Connection could not be opened. Message: %s'.red, err.message);
        setTimeout(() => {
            menu();
        }, 0);
    });

    client.on('data', (data) => {
        console.info("Received: %s".cyan, data);
        setTimeout(() => {
            menu();
        }, 0);
    });

    // Connecting to the server
    client.connect(PORT, HOST, () => {
        console.info('Connection opened successfully!'.green);
        setTimeout(() => {
            menu();
        }, 0);

    });
}

function SendData(data) {
    if (!client) {
       console.info('--Connection is not open or is closed--'.red);
       setTimeout(() => {
           menu();
       }, 0);
       return
    }
    //client.write(data, [,encoding][,callback])
    client.write(data); 
}

function CloseConnection() {
    if (!client) {
        console.info('--Connection is not open or is closed--'.red);
        setTimeout(() => {
            menu(); 
        }, 0);
        return
     }
     client.destroy();
     client = null;
     console.info('COnnection closed successfully!'.yellow);
     setTimeout(() => {
        menu();
    }, 0);
}

function menu() {
    const lineRead = readlineSync.question("\nEnter option (1-Open, 2-Send, 3-Close, 4-Quite):") ;
    switch(lineRead) {
        case "1":
            // console.info('Option 1 selected');
            // setTimeout(() => {
            //     menu();
            // }, 0);
            OpenConnection();
            break;
        case "2":
            // console.info('Option 2 selected');
            // setTimeout(() => {
            //     menu();
            // }, 0);
            const data = readLineSync.question("Enter data to send");
            SendData(data);
            break;
        case "3":
            // console.info('Option 3 selected');
            // setTimeout(() => {
            //     menu();
            // }, 0);
            CloseConnection();
            break;
        case "4":
            //console.info('Option 4 selected');
            return;
        default: 
            setTimeout(() => {
                menu();
            }, 0);
            break;
    }
}
// To make the function call aynchronious, we wrap it in setTimeout
// This could be done more efficently using process.nextTick()
setTimeout(() => {
    menu();
}, 0);
