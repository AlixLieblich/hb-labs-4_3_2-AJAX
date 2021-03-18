"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', (res) => {
        $('#fortune-text').text(res);

        // Make a get request to the server at the url /fortune which will respond with
        // the variable res (a random fortune form the list FORTUNES from server.py) 
        // shown in the #fortune-text <div>.
    });
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) =>{

        $('#weather-info').html(res.forecast);
        // Go to the html at the id '#weather-info' (from index.html) and show 
        // the forecast from the WEATHER dictionary (in server.py) in #weather-info <div>.
    
    });
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formInputs = $('#order-form').serialize();
        // 'qty': $('#qty-field').val(), 
        // 'melon': $('#melon-type-field').val()
    
        // if (res.code === 'ERROR') {
                print in red
        }
     

    $.post('/order-melons.json', formInputs, (res) => {
        $('#order-status').addClass('order-error').html("<p>" + res.msg + "</p>")
        // alert(res.msg);

    });

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


