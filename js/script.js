$(document).ready(function(){

  //WHAT WE DO PART



  // Design
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });

    // Development

    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
// Product management

  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });


  // PORTFOLIO

  // Black studio
  
  $(document).ready(function(){
    $("#item1").mouseover(function(){
      $("#shadow").show();
    }).mouseout(function(){
      $("#shadow").hide();
    });
  });

  // Onterio Security

  $(document).ready(function(){
    $("#item2").mouseover(function(){
      $("#shadow2").show();
    }).mouseout(function(){
      $("#shadow2").hide();
    });
  });

  // Pyramids

  $(document).ready(function(){
    $("#item3").mouseover(function(){
      $("#shadow3").show();
    }).mouseout(function(){
      $("#shadow3").hide();
    });
  });

  // Jim Carry

  $(document).ready(function(){
    $("#item4").mouseover(function(){
      $("#shadow4").show();
    }).mouseout(function(){
      $("#shadow4").hide();
    });
  });
  
  // Have a nice Day

  $(document).ready(function(){
    $("#item5").mouseover(function(){
      $("#shadow5").show();
    }).mouseout(function(){
      $("#shadow5").hide();
    });

  // Calculator
  
    $("#item6").mouseover(function(){
      $("#shadow6").show();
    }).mouseout(function(){
      $("#shadow6").hide();
    });

  // Burned

    $("#item7").mouseover(function(){
      $("#shadow7").show();
    }).mouseout(function(){
      $("#shadow7").hide();
    });

  // Giraffe restuarant

    $("#item8").mouseover(function(){
      $("#shadow8").show();
    }).mouseout(function(){
      $("#shadow8").hide();
    });
  });
  

// alert message after filling form

  $(document).ready(function(){
    $("form#form34A").submit(function(event){
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert ( "Hi" + " " + name + ", we have received your message. Thank you for reaching out.");
      }
      else {
        alert("Input field blank, Please enter your name and email!");
      }
      
    });
  
  });
  