color1 = "#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);
color2 = "#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);
$("body").css("background-image", "linear-gradient(" + color1 + "," + color2 + ")");


var app = new Vue({
  el: ".root",
  data: {
    title: "bg",
    input: "",
    input2: "",
    version: "2.00",
    r: 0,
    g: 0,
    b: 0,
    alpha: 1,
    colorvalue: "",
  },

  methods: {

    updateColor() {
      $(".showColor").css("background-color", "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.alpha + ")")
      this.colorvalue = "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.alpha + ")"
    },

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
    reverseinputs() {
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
    this.r = Math.floor(Math.random() * 255)
    this.g = Math.floor(Math.random() * 255)
    this.b = Math.floor(Math.random() * 255)

    this.colorvalue = "rgba(" + this.r + "," + this.g + "," + this.b + "," + 1 + ")"
    $(".showColor").css("background-color", this.colorvalue)
  }
});