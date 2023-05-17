import { $window, $document, $body } from '../utils/globals.js';

var map

function loadAjax(filePath) {
    return $.ajax({
        'async': false,
        'global': false,
        'url': filePath
    }).responseJSON;
}

function loadMarkersList( marker, idx ) {
    var category = marker.category
    var name = marker.name || 'Venue Name'


    $('.widget-map .list-markers')
        .append('<li>' + '<h6>' + marker.name + '</h6><p>'+ marker.address +'</p><a href="' + marker.link + '">View website</a><h5><i class="pin-icon"><img src="' + marker.icon + '" alt="" /></i><span>' + marker.distance + ' mi</span></h5>' + '</li>')
    
}

//Init Map
function initMap() {
    $('[id^="map"]').each(function(){
        var $map = $(this);

        if ( !$map.length ) {
            return;
        }
        
        var mapData       = loadAjax($map.data('source'));
        var markers       = [];
        var markersLength = mapData.markers.length;

        map    = new google.maps.Map($map.get(0), mapData.map);
        var bounds = new google.maps.LatLngBounds();

        $('.widget-map .list-markers').empty()
        $('.widget-map .list-checkboxes input').each(function(){
            $(this).prop('checked', true)
        })

        for (var i = 0; i < mapData.markers.length; i++) {
            loadMarkersList( mapData.markers[i], i )

            var marker = new google.maps.Marker({
                position : mapData.markers[i].center,
                map      : map,
                icon     : mapData.markers[i].icon,
                category : mapData.markers[i].category
            });

            bounds.extend(marker.position);

            markers.push(marker);
        }

        var togglePins = function() {
            for ( var i = 0; i < markers.length; i++ ) {
                 markers[i].setVisible(false)
            }

            $('.widget-map .list-checkboxes input').each(function(){
                var $this = $(this)
                var category = ''



                if ( $this.prop('checked') ) {
                    var category = $this.val().toLowerCase()
                    
                    for ( var i = 0; i < markers.length; i++ ) {
                        if ( markers[i].category.toLowerCase() === category ) {
                            markers[i].setVisible(true)
                        }
                    }
                }
            })

            map.fitBounds(bounds);
        }

        $('.list-checkboxes input').on('change', function(e){
            e.preventDefault();

            togglePins();
        });

        map.fitBounds(bounds);

        setTimeout(function() {
            map.setZoom(12);
        }, 100);

        $window.on('resize', function(){            
            map.fitBounds(bounds);
            map.setZoom(12);
        })
    })
}

function searchAddress( text ) {
    var text = text.trim().toLowerCase()

    $('.widget-map .list-markers li').each(function(){
        var $this = $(this)

        var markerText = $this.find('h6').text() + ' ' + $this.find('p').text()

        if ( markerText.toLowerCase().indexOf( text ) > 0 ) {
            $this.removeClass('is-hidden')
        } else {
            $this.addClass('is-hidden')
        }
    })
}

function initCustomMapControls() {
    $document.on('click', '.btn-zoom-in', function(e){
        e.preventDefault()

        map.setZoom( map.getZoom()+1 )
    })

    $document.on('click', '.btn-zoom-out', function(e){
        e.preventDefault()

        map.setZoom( map.getZoom()-1 )
    })

    $document.on('click', '.btn-location', function(e){
        e.preventDefault()

        if ( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition(function(position) {
           
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                var marker = new google.maps.Marker({
                    position : pos,
                    map      : map,
                    icon     : 'assets/images/svg/ico-pin.svg'
                });

                map.setCenter(pos);

            });
        }
    })

}

//Search addres in markers list
$('.js-search form').on('submit', function(e){
    e.preventDefault()

    var val = $(this).find('.form__field').val()

    if ( val ) {
        searchAddress( val )
    } else {
        $('.widget-map .list-markers li').each(function(){
            $(this).removeClass('is-hidden')
        })  
    }
})




$window.on('load', function(){
    initMap()
    initCustomMapControls()
})