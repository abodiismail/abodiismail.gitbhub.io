 var count = 0;

      (function(){
      // do some stuff
      count+= 23;
      $(".page-content").html(count);
      setTimeout(arguments.callee, 500);
      })();

   