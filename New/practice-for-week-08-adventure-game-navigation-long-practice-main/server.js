const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
function homeRedirect () {
  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
}
  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if(req.method === "GET" && req.url === "/") {
      let htmlPage = fs.readFileSync("./views/new-player.html", "utf-8");
      let roomList = world.availableRoomsToString();
      const resBody = htmlPage
        .replace(/#{availableRooms}/g, roomList);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(resBody);
    }
    // Phase 2: POST /player
    if(req.method === "POST" && req.url === "/player") {
      const {name, roomId} = req.body;
      player = new Player(name, world.rooms[roomId]);
      res.statusCode = 302;
      res.setHeader("Location", `./rooms/${roomId}`);
      return res.end();
    }


    // Phase 3: GET /rooms/:roomId
    let splitUrl = req.url.split('/');
    if(req.method === "GET" && splitUrl.length === 3 && req.url.startsWith('/rooms/')) {
      if(!player) {
        return homeRedirect();
      }
      let currentRoomId = splitUrl[2];

      if(currentRoomId != player.currentRoom.id) {
        res.statusCode = 302;
        res.setHeader("Location", `/rooms/${player.currentRoom.id}`);
        return res.end();
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      
      let currentRoom = world.rooms[currentRoomId];
      let htmlPage = fs.readFileSync("./views/room.html", "utf-8");
      const resBody = htmlPage
        .replace(/#{roomName}/g, currentRoom.name)
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{roomItems}/g, currentRoom.itemsToString())
        .replace(/#{exits}/g, currentRoom.exitsToString());

    
        return res.end(resBody);
    }
    // Phase 4: GET /rooms/:roomId/:direction

    if(req.method === "GET" && splitUrl.length === 4 && req.url.startsWith('/rooms/')) {
      if(!player) {
        return homeRedirect();
      }
      let currentRoomId = splitUrl[2];
      let direction = splitUrl[3][0];
      if(currentRoomId != player.currentRoom.id) {
        res.statusCode = 302;
        res.setHeader("Location", `/rooms/${player.currentRoom.id}`);
        return res.end();
      }

      player.move(direction);
      res.statusCode = 302;
      res.setHeader("Location", `/rooms/${player.currentRoom.id}`);
      return res.end();
    }
    // Phase 5: POST /items/:itemId/:action
    if(req.method === "POST" && splitUrl.length === 4 && req.url.startsWith('/items/')) {
      
    }
    // Phase 6: Redirect if no matching route handlers
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
