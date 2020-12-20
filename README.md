# Minecraft ddos bot

## Configuration

Edit the .env to set environment variables to the script.

| Variable               | type      | default value   | required |
|------------------------|-----------|-----------------|----------|
| `SERVER_URL`           | `string`  | `localhost`     | false    |
| `SERVER_PORT`          | `string`  | `25565`         | false    |
| `INSTANCES_PER_RUNNER` | `integer` | `1`             | false    |

## How to use it

### Docker way

Be sure you have already `docker` and `docker-compose` on  your computer before launching these commands.

For a single instance of the bot, simply run 
```shell script
docker-compose up -d node
```

For a multiple instance of the bot (eg. 10), simply run 
```shell script
docker-compose up -d node && docker-compose scale node=10
```

### Local way

To run locally, just run
```shell script
node index.js
```
