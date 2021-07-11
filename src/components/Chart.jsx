import React, { useRef, useEffect, useState } from "react";

import * as d3 from 'd3'
export default function Graph({ progress }) {
  var canvasRef = useRef(null);
  var percent = Math.floor(progress * 100);
  var myChart = useRef(null);
  var [roadData, setRoadData] = useState(null)
  var [rideData, setRideData] = useState(null)
  var [ctx, setCtx] = useState(null)
// Set a projection for the map. Projection = transform a lat/long on a position on the 2d map.


  useEffect(() => {
    console.log('data')
    var canvas = canvasRef.current
    // Actual width and height. No idea if clienWidth would be a better option..?
    canvas.width = window.innerWidth - 50
    canvas.height = canvas.width*.25
    var width = canvas.offsetWidth
    var height = canvas.offsetHeight
    // select the canvas element created in the html.
    var projection = d3.geoAlbers()
    .center([0, 33.777])
    .rotate([84.299605, 0])
    .scale(750000)
    .translate([width/2, height/4]);
// Create a path generator.

// Get the 'context'
setCtx( canvas.getContext('2d'));
// geographic path generator for given projection and canvas context
const pathGenerator = d3.geoPath(projection, ctx);
console.log(pathGenerator)
// Draw a background
// ctx.fillStyle = '#ddd';
// ctx.fillRect(0, 0, width, height);

// Load external data and boot
    d3.json("/wp-content/uploads/2021/07/dekalb_cropped_simple.geojson").then( function(data){
      // initialize the path
      setRoadData(data)
      
      ctx.beginPath();

      // Got the positions of the path
      pathGenerator(data);

      // Fill the paths
      
      // Add stroke
      ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
      ctx.stroke()

    })
 
  }, []);
  useEffect(()=>{
    var canvas = canvasRef.current
    
    canvas.width = window.innerWidth - 50
    canvas.height = canvas.width*.4
    var width = canvas.offsetWidth
    var height = canvas.offsetHeight
    var projection = d3.geoAlbers()
    .center([0, 33.777])
    .rotate([84.299605, 0])
    .scale(750000)
    .translate([width/2, 200]);
    
    const pathGenerator = d3.geoPath(projection, ctx);
    
    function animate(){
      ctx.clearRect(0,0, width, height)
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
    animate()}
  }, [progress])
  
  return <canvas style={{position:'static', left:'0px', top:'0px'}} width='100' ref={canvasRef} />;
}
