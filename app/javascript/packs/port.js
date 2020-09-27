import Vue from 'vue/dist/vue.esm.js'

var app = new Vue({
  el: ".slides",
  data: {
  index: 0,
  },
  mounted() {
    const images = document.getElementsByClassName('slideshow');
    this.slideshow(images);
    setInterval(() => {
      this.index = this.index < images.length - 1 ? this.index + 1 : 0;
      this.slideshow(images);
    }, 3000);
  },
  methods: {
    slideshow(images) {
      const current = images[this.index];
      const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
      current.classList.add('fadein');
      current.classList.remove('fadeout');
      prev.classList.remove('fadein');
      prev.classList.add('fadeout');
    }
  }
  
});

var app = new Vue({
  el: ".slides",
  data: {
  index: 0,
  },
  mounted() {
    const text = document.getElementsByClassName('caption');
    this.slideshow(text);
    setInterval(() => {
      this.index = this.index < text.length - 1 ? this.index + 1 : 0;
      this.slideshow(text);
    }, 3000);
  },
  methods: {
    slideshow(text) {
      const current = text[this.index];
      const prev = text[this.index - 1] ? text[this.index - 1] : text[text.length - 1];
      current.classList.add('fadein');
      current.classList.remove('fadeout');
      prev.classList.remove('fadein');
      prev.classList.add('fadeout');
    }
  }
  
});

const vm = new Vue ({
  el: "#skill",
  data: function() {
    return {
      show: false
    }
  },
  methods: {
    display_switch: function() {
      this.show = !this.show
    }
  }
})