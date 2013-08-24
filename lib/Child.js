var Child;

module.exports = Child = function() {
	this.intervalDelay = 2*1000;
	this.interval = null;
	this.pid = process.pid;
};

Child.prototype.start = function() {
	this.interval = setInterval(this.sendMessageToMaster.bind(this),this.intervalDelay);
	this.sendMessageToMaster();
};

Child.prototype.sendMessageToMaster = function() {
	var uptime = process.uptime();
	var message = 'child process interval ['+this.pid+'], uptime '+uptime+'s';
	process.send({
		custom: message
	});
};

var c = new Child();
c.start();

process.on('disconnect',function() {
	process.kill();
});