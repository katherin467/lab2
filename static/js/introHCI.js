$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
    });
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
	// prevent page from reloading
	e.preventDefault();
	// this refers to the object that triggered event
	$(this).css("background-color", "#7fff00");
}