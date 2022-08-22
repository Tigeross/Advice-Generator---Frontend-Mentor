//take advice ID from 	https://api.adviceslip.com/advice
//get advice from API

var advice = "";
var adviceID = "";
var adviceURL = "https://api.adviceslip.com/advice";

function changeImageOnResize() {
    var width = window.innerWidth;
    if (width < 500) {
        $(".divider").attr("src", "images/pattern-divider-mobile.svg");
    }
    else {
        $(".divider").attr("src", "images/pattern-divider-desktop.svg");
    }
}

function getAdvice() {
    $.ajax({
        url: adviceURL,
        success: function(data) {
            data = JSON.parse(data);
            advice = data.slip.advice;
            adviceID = data.slip.id;
            $("#advice").attr("adviceID", adviceID);
            $("#advice").text(`"${advice}"`);
            $("#adviceID").text(`ADVICE #${adviceID}`);
        }
    });
}

getAdvice();
changeImageOnResize();

$(window).resize(function() {
    changeImageOnResize();
});

$("#newAdvice").click(function() {
    getAdvice();
});
