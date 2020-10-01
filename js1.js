
var dino1hungry = 0;
var dino2hungry = 0;
var dino3hungry = 0;
var dino4hungry = 0;


window.setInterval(function () {
    //random_no();
    dino1hungry += 1;
    console.log(dino1hungry);
    if (dino1hungry > 15) {
        console.log("Dino is hungry!");
        $('#random_no_container5').html("Hungry");
        $('#random_no_container5').css("opacity", 1);
    }
}, 1000);


window.setInterval(function () {
    //random_no();
    dino2hungry += 1;
    console.log(dino2hungry);
    if (dino2hungry > 35) {
        console.log("Dino is hungry!");
        $('#random_no_container2').html("Hungry");
        $('#random_no_container2').css("opacity", 1);
    }
}, 1000);

window.setInterval(function () {
    //random_no();
    dino3hungry += 1;
    console.log(dino3hungry);
    if (dino3hungry > 30) {
        console.log("Dino is hungry!");
        $('#random_no_container3').html("Hungry");
        $('#random_no_container3').css("opacity", 1);
    }
}, 1000);

window.setInterval(function () {
    //random_no();
    dino4hungry += 1;
    console.log(dino4hungry);
    if (dino4hungry > 25) {
        console.log("Dino is hungry!");
        $('#random_no_container4').html("Hungry");
        $('#random_no_container4').css("opacity", 1);
    }
}, 1000);





function myFunction1() {

    if (dino1hungry >= 15) {

        //Show the fed notification
        var text = ["Feeding animal", "Animal is fed"];
        var popup = document.getElementById("myPopup1");
        var counter = 1;
        popup.innerHTML = text[counter];
        popup.classList.toggle("show");

        //Hide the hungry notification
        $('#random_no_container5').css("opacity", 0);

        //Reset thehungry counter
        dino1hungry = 0;

        window.setTimeout(function () {
            console.log(popup);
            popup.classList.toggle("show");
        }, 2500);

    }

}

function myFunction2() {

    if (dino2hungry >= 55) {

        //Show the fed notification
        var text = ["Feeding animal", "Animal is fed"];
        var popup = document.getElementById("myPopup2");
        var counter = 1;
        popup.innerHTML = text[counter];
        popup.classList.toggle("show");

        //Hide the hungry notification
        $('#random_no_container3').css("opacity", 0);

        //Reset thehungry counter
        dino2hungry = 0;

        window.setTimeout(function () {
            console.log(popup);
            popup.classList.toggle("show");
        }, 2500);
    }
}


function myFunction3() {

    if (dino3hungry >= 40) {

        //Show the fed notification
        var text = ["Feeding animal", "Animal is fed"];
        var popup = document.getElementById("myPopup3");
        var counter = 1;
        popup.innerHTML = text[counter];
        popup.classList.toggle("show");

        //Hide the hungry notification
        $('#random_no_container2').css("opacity", 0);

        //Reset thehungry counter
        dino3hungry = 0;

        window.setTimeout(function () {
            console.log(popup);
            popup.classList.toggle("show");
        }, 2500);
    }
}


function myFunction4() {

    if (dino4hungry >= 25) {

        //Show the fed notification
        var text = ["Feeding animal", "Animal is fed"];
        var popup = document.getElementById("myPopup4");
        var counter = 1;
        popup.innerHTML = text[counter];
        popup.classList.toggle("show");

        //Hide the hungry notification
        $('#random_no_container4').css("opacity", 0);

        //Reset thehungry counter
        dino4hungry = 0;

        window.setTimeout(function () {
            console.log(popup);
            popup.classList.toggle("show");
        }, 2500);
    }
}




var image_tracker = 'orange';
var y = 'test1';

function change1() {
    var x = document.getElementById("buttontext1").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext1").innerHTML = "Off";
        y = "test2";
    } else {
        document.getElementById("buttontext1").innerHTML = "On";
        y = "test";
    }

    var image = document.getElementById('circle1');
    if (image_tracker == 'orange') {
        image.src = 'dino11.gif';
        image_tracker = 'blue';
    } else {
        image.src = "dino1.gif";
        image_tracker = 'orange';
    }
}

function change2() {
    var x = document.getElementById("buttontext2").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext2").innerHTML = "Off";
        y = "test2";
    } else {
        document.getElementById("buttontext2").innerHTML = "On";
        y = "test";
    }
    var image = document.getElementById('circle2');
    if (image_tracker == 'orange') {
        image.src = 'dino22.gif';
        image_tracker = 'blue';
    } else {
        image.src = 'dino2.gif';
        image_tracker = 'orange';
    }
}

function change3() {
    var x = document.getElementById("buttontext3").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext3").innerHTML = "Off";
        y = "test2";
    } else {
        document.getElementById("buttontext3").innerHTML = "On";
        y = "test";
    }
    var image = document.getElementById('circle3');
    if (image_tracker == 'orange') {
        image.src = 'dino33.gif';
        image_tracker = 'blue';
    } else {
        image.src = "dino3.gif";
        image_tracker = 'orange';
    }
}

function change4() {
    var x = document.getElementById("buttontext4").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext4").innerHTML = "Off";
        y = "test2";
    } else {
        document.getElementById("buttontext4").innerHTML = "On";
        y = "test";
    }
    var image = document.getElementById('circle4');
    if (image_tracker == 'orange') {
        image.src = 'dino44.gif';
        image_tracker = 'blue';
    } else {
        image.src = "dino4.gif";
        image_tracker = 'orange';
    }
}

function change5() {
    var x = document.getElementById("buttontext5");
    var a = document.getElementById("buttontext4");
    var b = document.getElementById("buttontext3");
    var c = document.getElementById("buttontext2");
    var d = document.getElementById("buttontext1");

    if (y == "test") {
        x.innerHTML = "All off";
        a.innerHTML = "Off";
        b.innerHTML = "Off";
        c.innerHTML = "Off";
        d.innerHTML = "Off";

        y = "test2";
    } else {
        x.innerHTML = "All on";
        a.innerHTML = "On";
        b.innerHTML = "On";
        c.innerHTML = "On";
        d.innerHTML = "On";
        y = "test";
    }

    var image = document.getElementById('circle1');
    var image2 = document.getElementById('circle2');
    var image3 = document.getElementById('circle3');
    var image4 = document.getElementById('circle4');

    if (image_tracker == 'orange') {
        image.src = 'dino11.gif';
        image2.src = 'dino22.gif';
        image3.src = 'dino33.gif';
        image4.src = 'dino44.gif';
        image_tracker = 'blue';
    } else {
        image.src = "dino1.gif";
        image2.src = 'dino2.gif';
        image3.src = 'dino3.gif';
        image4.src = 'dino4.gif';
        image_tracker = 'orange';
    }
}

