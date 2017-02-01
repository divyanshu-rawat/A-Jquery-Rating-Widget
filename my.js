
    var index,access_element,jquery_object;

    $(function(){


        $("#update-max-value").click(function(){

            $object=$("#max-value").val();
            
            $("#rating-container").attr("max-value",$object);
            
            $("#rating-container").empty();
            
            for (i=0; i<$object ;i++) 
            { 
                $("#rating-container").append("<div class='rating-circle'></div>");
            }
        
        });
    
         $("#rating-container").on("mouseover","div.rating-circle",function(){
        
          $(this).removeClass("rating-chosen");
        
          $(this).prevAll().removeClass("rating-chosen");
        
          $(this).nextAll().removeClass("rating-chosen");
        
          $(this).addClass("rating-hover");
        
          $(this).prevAll().addClass("rating-hover");
        });
        
          $("#rating-container").on("mouseout","div.rating-circle",function(){
        
          $(this).removeClass("rating-hover"); 
        
          $(this).prevAll().removeClass("rating-hover");
        
          $(jquery_object).addClass("rating-chosen");      
        
          $(jquery_object).prevAll().addClass("rating-chosen");
        });
        
            $("#rating-container").on("click","div.rating-circle",function(){
        
            index=$(this).index();
        
            access_element=$("#rating-container").children().get(index);
        
            jquery_object=$(access_element);
        
            $(jquery_object).addClass("rating-chosen");
        
            $(jquery_object).prevAll().addClass("rating-chosen");
        
            $(jquery_object).nextAll().removeClass("rating-chosen");
        
        });
    });
    
    $("#save-rating").click(function(){
  
                   var person={value:( index +1), maxValue:document.getElementById("rating-container").getAttribute("max-value")};
        
                   $.post("http://jquery-edx.azurewebsites.net/api/Rating",person).done(function(message){
        
                   $("#output").text(message.message);       
        
                }); 
  

              }); 