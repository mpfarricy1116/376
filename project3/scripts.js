function area() {
    var length = parseInt(document.getElementById("length").value);
    var width = parseInt(document.getElementById("width").value);

    var result = length * width;

    document.getElementById("result").innerHTML = result;
  }

  function pythag() {
      var a = parseInt(document.getElementById("a").value);
      var b = parseInt(document.getElementById("b").value);

      var result = (a*a) * (b*b);

      document.getElementById("result1").innerHTML = result;
    }

    function volume() {
        var l = parseInt(document.getElementById("length").value);
        var w = parseInt(document.getElementById("width").value);
        var h = parseInt(document.getElementById("height").value);

        var result = length * width * height

        document.getElementById("result2").innerHTML = result;
      }
