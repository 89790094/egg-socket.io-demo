module.exports = {
    keys: 'xueand',
    mongoose: {
        url: 'mongodb://jwt:token@192.168.3.10:27017/egg_jwt',
        options: {
            server: {
                auto_reconnect: true,
                poolSize: 10
            }
        }
    },
    redis: {
        client: {
            host: '192.168.3.10',
            port: '6379',
            family: 'IPv4',
            password: 'sa',
            db: 0
        }
    },
    io: {
        namespace: {
            '/': {
                connectionMiddleware: ['conn'],
                packetMiddleware: ['handle']
            },
            '/chat': {
                connectionMiddleware: ['conn'],
                packetMiddleware: ['handle']
            }
        }
    }
}