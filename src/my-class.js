function display(a, b) {
  console.log("sData value is %s ", this.sData);
}

//display.call();

function data() {
  this.sData = "hi";
  //console.log("sData value is %s ", this.sData);
  debugger;
  display.apply(null, [1, "sd"]); // display(1, "sd")
  display.call(this, 1, "sd");
}

//display.call(this);
data.call();
//data()
