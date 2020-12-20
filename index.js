require('dotenv').config();
const mineflayer = require('mineflayer');
const autoVersionForge = require('minecraft-protocol-forge').autoVersionForge;
const INSTANCES_PER_RUNNER = 'INSTANCES_PER_RUNNER';
const SERVER_PORT = 'SERVER_PORT';
const SERVER_URL = 'SERVER_URL';

getConfig = key =>  {
  process.env[key] ?? ''
}

const configuration = {
  [INSTANCES_PER_RUNNER]: getConfig(INSTANCES_PER_RUNNER),
  [SERVER_PORT]: getConfig(SERVER_PORT),
  [SERVER_URL]: getConfig(SERVER_URL),
  parseInt: (key, defaultValue = 1) =>
    parseInt(configuration[INSTANCES_PER_RUNNER] || '0') || defaultValue,
}

function create_UUID() {
  let dt = new Date().getTime();
  return 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c === 'x' ? r :(r&0x3|0x8)).toString(16);
  });
}

for (let i = 0; i < configuration.parseInt(INSTANCES_PER_RUNNER); i++) {
  const bot = mineflayer.createBot({
    host: getConfig(SERVER_URL) || 'localhost',
    username: `${create_UUID()}`,
    port: configuration.parseInt(SERVER_PORT, 25565)
  })

  autoVersionForge(bot._client, {});
}
