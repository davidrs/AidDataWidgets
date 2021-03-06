// Creates a PNG from an SVG
var imageMaker = function(fileName){
    var html = d3.select("svg")
          .attr("version", 1.1)
          .attr("xmlns", "http://www.w3.org/2000/svg")
          .node().parentNode.innerHTML;
   
    //console.log(html);
    var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
    var img = '<img src="'+imgsrc+'">'; 
    d3.select("#svgdataurl").html(img);
   
   
    var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d");
 
    var image = new Image;
    image.src = imgsrc;
    image.onload = function() {
    context.drawImage(image, 0, 0);
 
    var canvasdata = canvas.toDataURL("image/png");
 
    //Put image on the page.
    // var pngimg = '<img src="'+canvasdata+'">'; 
    // d3.select("#pngdataurl").html(pngimg);

    var a = document.createElement("a");
    a.download = fileName + ".png";
    a.href = canvasdata;
    a.click();
  };
}
