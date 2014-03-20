<?php

  $v = $_GET['data'];



if(v == "monday")
{
echo {"monday": {
        "title": "Magic Monday",
        "text": "On Magic Monday, all the food disappears.",
        "image": "/images/special.jpg",
        "color": "red"
    }};
}

if(v  == "tuesday")
{
   

  echo({"tuesday": {
        "title": "Twofer Tuesday",
        "text": "Two vegetables for the price of one!.",
        "image": "/images/special.jpg",
        "color": "green"
    }});
}

if(v  == "friday")
{
    
  echo ({"friday": {
        "title": "20% Off",
        "text": "All meals 20% off. Yeah, on our busiest day.",
        "image": "/images/special.jpg",
        "color": "cyan"
    }});

}




?>