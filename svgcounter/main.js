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

var scoreContainer = d3.select("#score")
                       .append("svg")
                       .attr("width", 200)
                       .attr("height", 100);

var circle = scoreContainer
                .append("ellipse")
                .attr("cx", 100)
                .attr("cy", 50)
                .attr("rx", 100)
                .attr("ry", 50)
                .attr("fill", "#7777DD")

var text = scoreContainer
                .append("text")
                .attr("x", 100)
                .attr("y", 70)
                .attr("text-anchor", "middle")
                .attr("fill", "#ffff00")
                .attr("font-family", "sans-serif")
                .attr("font-size", "60px")
                .text("100");

var running = true;

function setHeight(percent) {
    var newheight = percent * 5;
    var newy = 500 - newheight;
    c.attr("height", newheight);
    c.attr("y", newy);
    pink.attr("y", newy);
    text.text(percent);
}

// setInterval(decHeight, 50);

function startIt(current, target, callback) {
    setTimeout(function () {
        if (current >= target) {
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

/*start(5, function(){
 console.log("NICE ONE.");
 });
 */
