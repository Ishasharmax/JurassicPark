$(document).ready(function () {
    $("#play-animation").click(function () {
        $("#animated4").css("animation-play-state", "running");
    });
    $("#stop-animation").click(function () {
        $("#animated4").css("animation-play-state", "paused");
    });
});

$(document).ready(function () {
    $("#play-animation2").click(function () {
        $("#animated3").css("animation-play-state", "running");
    });
    $("#stop-animation2").click(function () {
        $("#animated3").css("animation-play-state", "paused");
    });
});

$(document).ready(function () {
    $("#play-animation3").click(function () {
        $("#animated2").css("animation-play-state", "running");
    });
    $("#stop-animation3").click(function () {
        $("#animated2").css("animation-play-state", "paused");
    });
});

$(document).ready(function () {
    $("#play-animation4").click(function () {
        $("#animated1").css("animation-play-state", "running");
    });
    $("#stop-animation4").click(function () {
        $("#animated1").css("animation-play-state", "paused");
    });
});
