var barContainer = d3.select("#countdown")
                     .append("svg")
                     .attr("width", 200)
                     .attr("height", 500);

var c = barContainer.append("rect")
                    .attr("width", 200)
                    .attr("height", 500)
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("fill", "#BBB");

var pink = barContainer.append("rect")
            .attr("width", 200)
            .attr("height", 5)
            .attr("x", 0)
            .attr("y", 0)
            .attr("fill", "#ff7700");

var score = d3.select("#score");

var running = true;

function setHeight(percent) {
    var newheight = percent * 5;
    var newy = 500 - newheight;
    c.attr("height", newheight);
    c.attr("y", newy);
    pink.attr("y", newy);
    score.text(percent);
}

// setInterval(decHeight, 50);

function startIt(current, target, callback) {
    setTimeout(function() {
        if(current >= target) {
            setHeight(current);
            startIt(--current, target, callback);
        } else {
            callback();
        }
    }, 75);
}

function start(target, callback) {
    startIt(100, target, callback);
}

start(5, function(){
    console.log("NICE ONE.");
});

