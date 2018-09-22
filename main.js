$("html").css("height", 1000 + "px")
$("body").css("height", 1000 + "px")

var app = new Vue({

    el: ".root",
    data: {
        "color1": "",
        "color2": "",
    },

    methods:{
        updatecolor(){
            
            if(this.color2){
                console.log("color 2 is here");
                $("body").css("background-image", "linear-gradient(" + this.color1 + "," + this.color2 + ")")
            }else{
                console.log("color 2 is not filled");
                $("body").css("background-color", app.color1)

            }

        },

        randomcolor1(){
            this.color1 = "#" + Math.random().toString(16).slice(2, 8);
        },

        randomcolor2(){
            this.color2 = "#" + Math.random().toString(16).slice(2, 8);
        },

        closeinstructions(){
            $("#instructions").fadeOut(600);
        },

        hideformdiv(){
            $(".colorform").toggle(600);

        }
    }
    
})

