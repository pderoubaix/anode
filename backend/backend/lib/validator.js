var Filter = require('validator').Filter;

Filter.prototype.removeNumbers = function() {
    this.modify(this.str.replace(/[0-9]+/g, ''));
    return this.str;
}

Filter.prototype.replaceBlank = function() {
    this.modify(this.str.replace(/ +/g, '_'));
    return this.str;
}

Filter.prototype.removeSymbol = function() {
    this.modify(this.str.replace(/[^A-Za-z0-9\\._-]/g,''));
    return this.str;
}

module.exports=Filter;