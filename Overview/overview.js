
   function myPublish() {
        $("#publishProgress").toggle();
    }


function myReviews() {
        $("#reviewsProgress").toggle();
    }

function myBoosting() {
        $("#boostingProgress").toggle();
    }


function updateBlue(checkbox1, circle, myclass0, myclass33,myclass66,myclass100, colorPercent) {
    var blue1 =  $(checkbox1+"1").prop('checked');
    var blue2 =  $(checkbox1+"2").prop('checked');
    var blue3 =  $(checkbox1+"3").prop('checked');

    var blues = [blue1,blue2, blue3];
    var count = 0;

    for (var i = 0; i < blues.length; i++) {


        if (blues[i] === true) {
             count ++;

        }

    }
    if (count === 0) {
        $(circle).removeClass();
        $(circle).addClass(myclass0);
        $(colorPercent).text("0%")
    }
    if (count === 1) {
        $(circle).removeClass();
        $(circle).addClass(myclass33);
        $(colorPercent).text("33%")
    }
    if (count === 2) {
        $(circle).removeClass();
        $(circle).addClass(myclass66);
        $(colorPercent).text("66%")

    }
    if (count === 3) {
        $(circle).removeClass();
        $(circle).addClass(myclass100);
        $(colorPercent).text("100%")
    }
}




