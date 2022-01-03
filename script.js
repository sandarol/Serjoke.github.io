$(document).ready(function () {



    $var = 0;
    $back = 0;

    $("#back").click(function () {


        if ($back == 100) {
            $back = $var;
            $var = 1;
            $var = $var * 100
            $str = $var.toString();

            $("#blocknews").show();



            $("#hor").animate({
                marginLeft: "-" + $str + "vw"
            }, 300);


            $("#1").hide();
            $("#blocksostav").hide();
            $("#blockhistory").hide();
            $("#blockcontakt").hide();

            

            $("#burger").fadeOut(300);
            $("#v").css("transform", "scale(1, 1)");
            $("#back").css("margin-top", "40px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            };
        } else if ($back == 200) {
            $back = $var;
            $var = 2;
            $var = $var * 100
            $str = $var.toString();

            $("#blocksostav").show();


            $("#hor").animate({
                marginLeft: "-" + $str + "vw"
            }, 300);


            $("#1").hide();
            $("#blocknews").hide();
            $("#blockhistory").hide();
            $("#blockcontakt").hide();
    

            $("#burger").fadeOut(300);
            $("#v").css("transform", "scale(1, 1)");
            $("#back").css("margin-top", "40px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            }

        } else if ($back == 0) {
            $back = $var;
            $var = 0;

            $var = $var * 100
            $str = $var.toString();



            $("#1").show();



            $("#hor").animate({
                marginLeft: "-" + $str + "vw"
            }, 300);


            $("#blocknews").hide();
            $("#blocksostav").hide();
            $("#blockhistory").hide();
            $("#blockcontakt").hide();
            


            $("#burger").fadeOut(300);
            $("#v").css("transform", "scale(1, 1)");
            $("#back").css("margin-top", "40px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            }
            
        } else if ($back == 300) {
            $back = $var;
            $var = 3;

            $var = $var * 100
            $str = $var.toString();



            $("#blockhistory").show();



            $("#hor").animate({
                marginLeft: "-" + $str + "vw"
            }, 300);


            $("#blocknews").hide();
            $("#blocksostav").hide();
            $("#1").hide();
            $("#blockcontakt").hide();

            


            $("#burger").fadeOut(300);
            $("#v").css("transform", "scale(1, 1)");
            $("#back").css("margin-top", "40px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            }
        } 

        else if ($back == 400) {
            $back = $var;
            $var = 4;

            $var = $var * 100
            $str = $var.toString();


            $("#blockcontakt").show();



            $("#hor").animate({
                marginLeft: "-" + $str + "vw"
            }, 300);


            $("#blocknews").hide();
            $("#blocksostav").hide();
            $("#1").hide();
            $("#blockhistory").hide();
            


            $("#burger").fadeOut(300);
            $("#v").css("transform", "scale(1, 1)");
            $("#back").css("margin-top", "40px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            }
        } 

        
        
        else {
            alert("иди в жопу");

        }







    });






    //новости


    $("#n, #novosti").click(function () {
        $("#back").fadeIn(200);
        $back = $var;
        $var = 1;
        $var = $var * 100
        $str = $var.toString();

        $("#blocknews").show();



        $("#hor").animate({
            marginLeft: "-" + $str + "vw"
        }, 300);


        $("#1").hide();
        $("#blocksostav").hide();
        $("#blockcontakt").hide();
        $("#blockhistory").hide();
        
        

        $("#burger").fadeOut(300);
        $("#v").css("transform", "scale(1, 1)");
        $("#back").css("margin-top", "40px");
        if (device.mobile()) {
            $("#back").css("margin-top", "60px");
        };
    })



    //состав

    $("#s, #sostav").click(function () {
        $("#back").fadeIn(200);
        $back = $var;
        $var = 2;
        $var = $var * 100
        $str = $var.toString();

        $("#blocksostav").show();


        $("#hor").animate({
            marginLeft: "-" + $str + "vw"
        }, 300);


        $("#1").hide();
        $("#blocknews").hide();
        $("#blockhistory").hide();
        $("#blockcontakt").hide();

        
        

        $("#burger").fadeOut(300);
        $("#v").css("transform", "scale(1, 1)");
        $("#back").css("margin-top", "40px");
        if (device.mobile()) {
            $("#back").css("margin-top", "60px");
        }
    })




    //главная
    $("#g").click(function () {
        $("#back").fadeIn(200);
        $back = $var;
        $var = 0;

        $var = $var * 100
        $str = $var.toString();



        $("#1").show();



        $("#hor").animate({
            marginLeft: "-" + $str + "vw"
        }, 300);


        $("#blocknews").hide();
        $("#blocksostav").hide();
        $("#blockhistory").hide();
        $("#blockcontakt").hide();

        
        

        $("#burger").fadeOut(300);
        $("#v").css("transform", "scale(1, 1)");
        $("#back").css("margin-top", "40px");
        if (device.mobile()) {
            $("#back").css("margin-top", "60px");
        }
    }) 
    
    
    //история
    $("#h, #hist").click(function () {
        $("#back").fadeIn(200);
        $back = $var;
        $var = 3;

        $var = $var * 100
        $str = $var.toString();



        $("#blockhistory").show();



        $("#hor").animate({
            marginLeft: "-" + $str + "vw"
        }, 300);


        $("#blocknews").hide();
        $("#blocksostav").hide();
        $("#1").hide();
        $("#blockcontakt").hide();

        

        $("#burger").fadeOut(300);
        $("#v").css("transform", "scale(1, 1)");
        $("#back").css("margin-top", "40px");
        if (device.mobile()) {
            $("#back").css("margin-top", "60px");
        }
    })


    
    //контакты
    $("#k, #kont").click(function () {
        $("#back").fadeIn(200);
        $back = $var;
        $var = 4;

        $var = $var * 100
        $str = $var.toString();



        $("#blockcontakt").show();



        $("#hor").animate({
            marginLeft: "-" + $str + "vw"
        }, 300);


        $("#blocknews").hide();
        $("#blocksostav").hide();
        $("#1").hide();
        $("#blockhistory").hide();


        $("#burger").fadeOut(300);
        $("#v").css("transform", "scale(1, 1)");
        $("#back").css("margin-top", "40px");
        if (device.mobile()) {
            $("#back").css("margin-top", "60px");
        }
    })





    $("#novosti").mouseover(function () {
        $("#novosti").animate({
            padding: 10,
            letterSpacing: 15,
        }, 50)
    })


    $("#novosti").mouseleave(function () {
        $("#novosti").animate({
            padding: 0,
            letterSpacing: 5
        }, 50)
    })

    $("#sostav").mouseover(function () {
        $("#sostav").animate({
            padding: 10,
            letterSpacing: 15,
        }, 50)
    })


    $("#sostav").mouseleave(function () {
        $("#sostav").animate({
            padding: 0,
            letterSpacing: 5
        }, 50)
    })

    $("#hist").mouseover(function () {
        $("#hist").animate({
            padding: 10,
            letterSpacing: 15,
        }, 50)
    })


    $("#hist").mouseleave(function () {
        $("#hist").animate({
            padding: 0,
            letterSpacing: 5
        }, 50)
    })

    $("#kont").mouseover(function () {
        $("#kont").animate({
            padding: 10,
            letterSpacing: 15,
        }, 50)
    })


    $("#kont").mouseleave(function () {
        $("#kont").animate({
            padding: 0,
            letterSpacing: 5
        }, 50)
    })



    $("li").mouseover(function () {
        $(this).animate({
            fontSize: 25
        }, 100)
    })


    $("li").mouseleave(function () {
        $(this).animate({
            fontSize: 20
        }, 100)
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height() / 4) {
            $(".info").fadeIn(300);
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height() + ($(window).height() / 4)) {
            $("#sost").fadeIn(300);
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height() + $(window).height() + ($(window).height() / 4)) {
            $("#history").fadeIn(500);
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > (3 * $(window).height()) + ($(window).height() / 4)) {
            $("#kontacts").fadeIn(500);
        }
    });


    $("#burger").hide();
    if (device.mobile() && device.landscape()) {
        $("#vis").css("display", "block");
    }

    $(window).resize(function () {
        if (device.mobile() && device.landscape()) {
            $("#vis").css("display", "block");
            $("body").css("overflow", "hidden");
        } else {
            $("#vis").css("display", "none");
            $("body").css("overflow", "inherit");
        }
    })
    $("#v").click(function () {
        if ($("#burger").is(":hidden")) {
            $("#burger").toggle(300);
            $("#back").css("margin-top", "100px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            }
            $("#v").css("transform", "scale(1, -1)");
            if ($("body").width() < 767) {
                $("body").css("overflow", "hidden");
            }
        } else {
            $("#burger").toggle(300);
            $("#back").css("margin-top", "40px");
            if (device.mobile()) {
                $("#back").css("margin-top", "60px");
            }
            $("#v").css("transform", "scale(1, 1)");
            if ($("body").width() < 767) {
                $("body").css("overflow", "inherit");
            }

        };


    })
});
