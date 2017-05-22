# egg-socket.io
## install
* package.json
```
"dependencies": {
    "egg": "^1.3.0",
    "egg-bin": "^3.3.2",
    "egg-mongoose": "^1.1.1",
    "egg-redis": "^1.0.1",
    "egg-socket.io": "^1.2.2",
    "socket.io-client": "^2.0.1"
  }
```
* config.default.js
```
io: {
        namespace: {
            '/': {
                connectionMiddleware: ['conn'],
                packetMiddleware: ['handle']
            },
            '/index': {
                connectionMiddleware: ['conn'],
                packetMiddleware: ['handle']
            }
        }
    }
```
* plugin.js
```
io: {
        enable: true,
        package: 'egg-socket.io',
    }
```
