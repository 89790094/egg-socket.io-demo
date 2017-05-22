module.exports = app => {
    return function* (){
        let message = this.args[0];
        console.log(message);
        //console.log( message + ' : ' + process.pid);
        //this.socket.emit('res',`${message}`);
    };
};