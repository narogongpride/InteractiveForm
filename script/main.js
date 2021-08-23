import Convert from "./script/Convert";

const main = () => {
  function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  function select() {
    document.getElementById("num1").value = "";
    document.getElementById("result").value = "";
  }

  const convert = new Convert();
  function conv() {
    if (document.getElementById("from").value == "cel") {
      const res = convert.fromCelcius(
        document.getElementById("to").value,
        parseInt(document.getElementById("num1").value)
      );
      document.getElementById("result").value = res;
    }
    if (document.getElementById("from").value == "rea") {
      const res = convert.fromReamur(
        document.getElementById("to").value,
        parseInt(document.getElementById("num1").value)
      );
      document.getElementById("result").value = res;
    }
    if (document.getElementById("from").value == "far") {
      const res = convert.fromFarenheit(
        document.getElementById("to").value,
        parseInt(document.getElementById("num1").value)
      );
      document.getElementById("result").value = res;
    }
  }
  function change() {
    document.body.style.backgroundColor =
      document.getElementById("color").value;
  }
};