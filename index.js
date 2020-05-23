select(".test").click(function(){select(".test").html("lola")});
wait(3).then(function(){select(".test").remove()});