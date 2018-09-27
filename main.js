var app = new Vue({
  el: ".root",
  data: {
    title: "bg",
    input: "",
    input2: ""
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
          .toString(16)
          .slice(2, 8);
      this.input = color;
    },
    randomizeInput2() {
      color =
        "#" +
        Math.random()
          .toString(16)
          .slice(2, 8);
      this.input2 = color;
    },

    toggleform() {
        $(".block").slideToggle(500)
    }
    
  }
});
