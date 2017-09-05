// Fix this so it outputs "Brad", you are not allowed to define any new functions

const Brad = {
    name: "Brad",
    sayName: function(){
        console.log(this.name);
    },
    sayMyNameDelay: function(){
        setTimeout(this.sayName.bind(this), 1000)
    }
}

Brad.sayMyNameDelay();
