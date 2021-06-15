const WinstonLogStash = require('winston3-logstash-transport');

export default (context, inject) => {
    inject('req', context.req);
    context.$req = context.req;

    // let pipes = process.winstonLog['_readableState'].pipes;
    // if (!Array.isArray(pipes) || pipes.length === 1) {
    //     process.winstonLog.add(new WinstonLogStash({
    //         mode: 'tcp',
    //         host: '172.31.34.224',
    //         port: 28777
    //     }));
    // }
}
