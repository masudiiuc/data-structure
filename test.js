var myObject = {
    foo: 'bar',
    func : function () {
        var self = this;
        console.log('self.foo', self.foo);
        console.log('this.foo', this.foo);

        var a = function () {
            console.log('22self.foo', self.foo);
            console.log('22this.foo', this.foo);
        }   
        a();

        (function () {
            console.log('self.foo', self.foo);
            console.log('this.foo', this.foo);
        })();
    }
};

//myObject.func();


var myObject2 = {
    foo2: 'bar help',
    func : function (param) {
        var self = this;
        console.log('self.foo', self.foo);
        console.log('this.foo', this.foo);
        console.log('this.foo2', this.foo2);

        var a = function () {
            console.log('22self.foo', self.foo);
            console.log('22this.foo', this.foo);
        }   
        a();

        (function () {
            console.log('self.foo', self.foo);
            console.log('this.foo', this.foo);
        })();
    }
};

//myObject2.func.call(myObject, 'helloWorld');

function a () {
    'use strict';
    x = 12;
    x++;
    var x;
    console.log('x', x);
}
a();



/**
 * SAML - login communication
 * JWT - 
 * oAuth 
 * 
 * SOLID Principiles (important)
 */