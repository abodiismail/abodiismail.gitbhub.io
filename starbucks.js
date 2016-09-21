 var count = 0;

      (function(){
      // do some stuff
      count+= 23;
      $(".page-content").html(count);
      setTimeout(arguments.callee, 500);
      })();
      
      	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-83286205-2', 'auto');
	  ga('send', 'pageview');
