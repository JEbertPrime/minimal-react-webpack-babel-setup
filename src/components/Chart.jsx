import React, { useRef, useEffect, useState } from "react";

import * as d3 from 'd3'
export default function Graph({ progress, windowWidth }) {
  var canvasRef = useRef(null);
  var percent = Math.floor(progress * 100);
  var myChart = useRef(null);
  var [scale, setScale] = useState(400000)
  var [roadData, setRoadData] = useState(null)
  var [rideData, setRideData] = useState(null)
  var [locations, setLocations] = useState(null)
  var [ctx, setCtx] = useState(null)
  var colorScale =d3.scaleSequential(d3.interpolateInferno)
  .domain([.12,0])
  
// Set a projection for the map. Projection = transform a lat/long on a position on the 2d map.


  useEffect(() => {
    var canvas = canvasRef.current
    // Actual width and height. No idea if clienWidth would be a better option..?
    canvas.width = window.innerWidth 
    canvas.height = canvas.parentNode.offsetHeight
    var width = canvas.offsetWidth
    var height = canvas.offsetHeight
    // select the canvas element created in the html.
    var projection = d3.geoAlbers()
    .center([0, 33.777])
    .rotate([84.299605, 0])
    .scale(400000)
    .translate([width/2, height/4]);
// Create a path generator.

// Get the 'context'
setCtx( canvas.getContext('2d'));
// geographic path generator for given projection and canvas context
const pathGenerator = d3.geoPath(projection, ctx);
var customBase = document.createElement('custom');
	 locations = d3.select(customBase); // replacement of SVG// Draw a background
  setLocations(locations)
// ctx.fillStyle = '#ddd';
// ctx.fillRect(0, 0, width, height);

// Load external data and boot
    Promise.all([d3.json("/wp-content/themes/licenseplate-2021/assets/data/simpler.geojson"), d3.json('/wp-content/themes/licenseplate-2021/assets/data/ride_collection_5s.geojson')]).then( function([roads, ride]){
      // initialize the path
      setRoadData(roads)
      
      setRideData(ride)
      var elements = locations.selectAll("points.arc");
      elements.each(function(d) {
      var node = d3.select(this);
      
      ctx.beginPath();
      ctx.arc(node.attr("x"), node.attr("y"), node.attr("radius"), 0, 2 * Math.PI);
      ctx.fillStyle = node.attr("fillStyle");
      ctx.fill();
      ctx.closePath();
    })
      ctx.beginPath();
      
      // Got the positions of the path
      pathGenerator(roads);

      // Fill the paths
      
      // Add stroke
      ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
      ctx.stroke()

    })
 
  }, []);
  useEffect(()=>{
    var canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = canvas.parentNode.offsetHeight
    var width = canvas.offsetWidth
    var height = canvas.offsetHeight
    var projection = d3.geoAlbers()
    .center([0, 33.76])
    .rotate([84.299605, 0])
    .scale(scale * (width/900))
    .translate([width/2, 200]);
    
    const pathGenerator = d3.geoPath(projection, ctx);
    var dataBinding
    if(rideData){
       dataBinding = locations.selectAll("points.arc")
      .remove()
      dataBinding = locations.selectAll("points.arc")
        .data(rideData.features.slice(0, progress*rideData.features.length/100 ))
          .enter()
          .append("points")
          .classed("arc", true)
          .attr("x", function({geometry: {coordinates}}) {return projection(coordinates)[0]})
          .attr("y", function({geometry: {coordinates}}) {return projection(coordinates)[1]})
          .attr("radius", 4)
          .attr("fillStyle", ({properties:{relDif}})=>colorScale(relDif))
      }
    function animate(){
      
      ctx.clearRect(0,0, width, height)
      var elements = locations.selectAll("points.arc");
      elements.each(function(d) {
      var node = d3.select(this);
      
      ctx.beginPath();
      ctx.arc(node.attr("x"), node.attr("y"), node.attr("radius"), 0, 2 * Math.PI);
      ctx.fillStyle = node.attr("fillStyle");
      ctx.fill();
      ctx.closePath();
    })
  
      ctx.beginPath();
      ctx.rect(width/2 - progress*width, 0, progress*width*2, height);
      ctx.clip();
          ctx.beginPath();
    
          // Got the positions of the path
          pathGenerator(roadData);
    
          // Fill the paths
          
          // Add stroke
          ctx.strokeStyle = "rgba(140, 140, 140,.8)";
          ctx.stroke()
    }
    if(ctx){
    animate()
  }
  }, [progress, windowWidth, scale])
  
  return (
    <>
  <canvas style={{position:'static', left:'0px', top:'0px'}} width='100' ref={canvasRef} />
  </>
  )
  ;
}
