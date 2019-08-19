
    jQuery(document).ready(function() {
  //  Apply css border of (1px solid green) to all elements containing attribute name ‘marlabs’
      jQuery("p[name*='marlabs']").css("border", "1px solid green");

    //Apply css border of (1px solid green) elements containing attribute name ONLY ‘marlabs’
      jQuery("p[name~='marlabs']").css("border", "3px solid green");

    //Apply css border of (1px solid green) to all elements starting with attribute name ‘marlabs’
      jQuery("p[name^='marlabs']").css("border", "1px solid green");

    //Apply css border of (1px solid green) to all elements exactly ending with attribute name ‘marlabs’
      jQuery("p[name$='marlabs']").css("border", "1px solid green");

    //Apply css border of (1px solid green) to all elements containing WORD ‘marlabs’
      jQuery("p[name!='marlabs']").css("border", "1px solid green");

    //Apply css border of (1px solid green) to the last element in div
      jQuery( "div p:last-child" ).css("border", "1px solid green");
});






    jQuery(document).ready(function(){
      jQuery("#abc").on("click",function(){
        // console.log($(this).text("hello world"));
        console.log("Hello world");
      });
    });
    //
    jQuery(document).ready(function(){
      jQuery("#abc").one("click",function(){
        console.log("hi");
      });
    });
    //
    //
      jQuery(document).ready(function(){
        jQuery("input").select(function(){
          jQuery("input").after(" Text marked!");
    });
      jQuery("#xyz").click(function(){
        jQuery("input").trigger("select");
    });
  });
    //

    jQuery(document).ready(function(){
      jQuery("#target").scroll(function(){
      //  console.log($(this).text("jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation"));
      $("#log").append("<div>Handler for .scroll()</div>");
      });
    });

    jQuery(window).resize(function() {
      jQuery("#log").append("<div>Handler for .resize() </div>");
    });
      jQuery(window).resize(function() {
        jQuery("body").prepend("<div>" + $(window).width() + "</div>");
    });

    jQuery(document).ready(function(){
      jQuery("#aim").hover(function(){
          jQuery(this).css("background-color","blue");
      }, function(){
          jQuery(this).css("background-color","pink");
      });
    });

    jQuery(document).ready(function(){
      jQuery("#abc").dblclick(function(){
          jQuery(this).text("hello");
      });
    });


    jQuery(document).ready(function(){
      jQuery(document).keydown('button',function(){
        console.log("hello keydown");
      });
    });

    jQuery(document).ready(function(){
      jQuery(document).keyup(function(){
        console.log("hello keyup");
      });
    });

    jQuery(document).ready(function(){
      jQuery(document).keypress(function(){
        console.log("hello keypress");
      });
    });






      jQuery.ajax({
      type: 'GET',
      url: "https://pokeapi.co/api/v2/pokemon/ditto/",
      dataType: 'json', // added data type
      success: function(data) {
          console.log(data);
      },
      statusCode: {
        200: function(){
          console.log('Success');
        }
      }
//
          for (x of data.game_indices)
          {
              result.push(x.version.name);
          }
          console.log(result);
    });
