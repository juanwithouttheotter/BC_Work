const dog = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function(){
        if (this.raining === true){
            console.log(this.noise);
        }
    }
}

const cat = {
    raining: true,
    noise: 'Meow!',
    makeNoise: function(){
        if (this.raining === true){
            console.log(this.noise);
        }
    }
}
 

    dog.makeNoise();
    cat.makeNoise();



const massHysteria = () => {
    if (cat.raining === true && dog.raining === true){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}


massHysteria();
