
// Number to Hex Converter
function toHex(num){
    var hex = parseInt(num).toString(16).toUpperCase();
    if (hex.length < 2) {
      hex = "0"+hex;
    }

    return hex;
}
function RgbToHsl(r,g,b) {
    this.r = r/255;
    this.g = g/255;
    this.b = b/255;

    this.min = Math.min(this.r,this.g,this.b);
    this.max = Math.max(this.r,this.g,this.b);

    // Luminace
    this.luminace = (this.max + this.min)/2 * 100;

    // Saturation
    if (this.min == this.max) {
      this.saturation = 0;
    } else {
      if (this.luminace < 0.5) {
          this.saturation = (this.max-this.min)/(this.max+this.min) * 100;
      } else {
          this.saturation = (this.max-this.min)/(2.0-this.max-this.min) * 100;
      }
    }

    //Hue
    this.hue = 0;
    if (this.saturation != 0) {
      if (this.r == this.max) {
          this.hue = ((this.g-this.b)/(this.max-this.min)) * 60;
      }
      if (this.g == this.max) {
          this.hue = (2.0 + (this.b-this.r)/(this.max-this.min)) * 60;
      }
      if (this.b == this.max) {
          this.hue = (4.0 + (this.r-this.g)/(this.max-this.min)) * 60;
      }
      if (this.hue < 0) {
          this.hue = this.hue + 360;
      }
    }

}


function HslToRgb(h, s, l) {
  var h = h/360;
  var s = s/100;
  var l = l/100;

  if (s != 0) {
      if (l < 0.5) {
          var tmpOne = l * (1 + s);
      } else {
          var tmpOne = l + s - l * s;
      }
  var tmpTwo = 2 * l - tmpOne;

  function test(x) {
      if (x < 0 || x > 1) {
        if (x < 0) return x += 1;
        if (x > 1) return x -= 1;
      } else {
          return x;
      }
  }

  var tmpRed = test(h + 1/3);
  var tmpGreen = test(h);
  var tmpBlue = test(h - 1/3);

  function colorOut(tmp) {
      if ((6 * tmp) < 1) {
        return tmpTwo + (tmpOne - tmpTwo) * 6 * tmp;
      } else if ((2 * tmp) < 1) {
        return tmpOne;
      } else if ((3 * tmp) < 2) {
        return tmpTwo + (tmpOne - tmpTwo) * (1/1.5 - tmp) * 6;
      } else {
        return tmpTwo;
    }
}


  this.r = colorOut(tmpRed) * 255;
  this.g = colorOut(tmpGreen) * 255;
  this.b = colorOut(tmpBlue) * 255;

  } else {
      this.r = l * 255;
      this.g = l * 255;
      this.b = l * 255;
  }


}















































//
