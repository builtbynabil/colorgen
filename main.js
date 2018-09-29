

var app = new Vue({
  el: ".root",
  data: {
    title: "bg",
    input: "",
    input2: "",
    version: "2.20",
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

    applyToInput(){
      this.input = this.colorvalue
      this.applyBackground()
    },

    applyToInput2(){
      this.input2 = this.colorvalue
      this.applyBackground()
    },

    applyBackground() {
        $("body").css(
          "background-image",
          "linear-gradient(" + this.input + "," + this.input2 + ")")
    },

    toggleform() {
      $(".block").slideToggle(500)
    },

    randomizeBackground() {
      this.input = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + this.alpha + ")"
      this.input2 = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + this.alpha + ")"

      $("body").css("background-image", "linear-gradient(" + this.input + "," + this.input2 + ")");

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
    this.input = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + this.alpha + ")"
    this.input2 = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + this.alpha + ")"

    this.r = Math.floor(Math.random() * 255)
    this.g = Math.floor(Math.random() * 255)
    this.b = Math.floor(Math.random() * 255)

    this.colorvalue = "rgba(" + this.r + "," + this.g  + "," + this.b + "," + this.alpha + ")"
    this.updateColor();
    
    $("body").css("background-image", "linear-gradient(" + this.input + "," + this.input2 + ")");
    
  }
});