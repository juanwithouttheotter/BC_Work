// 1. Explain the on click code below.

// 2. When the page loads does the anonymous function get executed?

// 3. When does the anonymous function get executed?

//will run func on click
$("#boomButton").on("click", function() {
  alert("boom");
});


// will still run on click, running function in context.
const func = () => {
    alert("boom")
}

$("#boomButton").on("click", func);

//will run func immediately. 

$("#boomButton").on("click", func());
