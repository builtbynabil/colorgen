color1 = "#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);
color2 = "#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);
$("body").css("background-image", "linear-gradient(" + color1 + "," + color2 + ")");

console.log(color1);


var app = new Vue({
  el: ".root",
  data: {
    title: "bg",
    input: "",
    input2: "",
    version: "1.22"
  },

  methods: {
    applyBackground() {
      if (this.input2 == "") {
        $("body").css("background", this.input);
      } else {
        $("body").css(
          "background-image",
          "linear-gradient(" + this.input + "," + this.input2 + ")"
        );
      }
    },

    randomizeInput() {
      color =
        "#" +
        Math.random()
        .toString(16 + Math.random() * 0.9)
        .slice(2, 8);
      this.input = color;
    },
    randomizeInput2() {
      color =
        "#" +
        Math.random()
        .toString(16 + Math.random() * 0.9)
        .slice(2, 8);
      this.input2 = color;
    },

    toggleform() {
      $(".block").slideToggle(500)
    },
    randomizeBackground() {
      color1 = "#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);
      color2 = "#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);
      $("body").css("background-image", "linear-gradient(" + color1 + "," + color2 + ")");

      this.input = color1
      this.input2 = color2
      
    },
    reverseinputs(){
      firstinput = this.input
      this.input = this.input2
      this.input2 = firstinput

      if (this.input2 == "") {
        $("body").css("background", this.input);
      } else {
        $("body").css(
          "background-image",
          "linear-gradient(" + this.input + "," + this.input2 + ")"
        );
      }

    },
  },

  created() {
    this.input = color1
    this.input2 = color2
  }
});