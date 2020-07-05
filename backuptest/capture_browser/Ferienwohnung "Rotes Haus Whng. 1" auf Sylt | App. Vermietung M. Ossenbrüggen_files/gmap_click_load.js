(function ($) {
   Drupal.behaviors.few_gmap_click_load = {

      attach: function(context) {

         $(document).ready(function() {
	    $.getMultiScripts = function(arr, path) {
	    var _arr = $.map(arr, function(scr) {
			    return $.getScript( (path||"") + scr );
			    });

	    _arr.push($.Deferred(function( deferred ){
				    $( deferred.resolve );
				    }));

	    return $.when.apply($, _arr);
	    }
   
           $("#gmap-auto2map-gmap0").addClass("gmap-processed-test");

            $(".fakemap .gmap-map").append('<span class="gmap_always_show gmap_click">Google Maps immer anzeigen*</span>');
            $(".fakemap .gmap-map").append('<span class="gmap_click">Google Maps einmalig zeigen</span>');
            $(".fakemap .gmap-map").append('<p class="gmap_info"><a href="/content/datenschutzerklarung">*Hinweis: Kartendaten werden von Google Maps geladen. Weitere Informationen </br />zu unserer Nutzung von Google Maps finden Sie in unserer Datenschutzerklärung</a></p>');


	                var script_arr = [
	      "icon.js",
	      "highlight.js",
	      "poly.js",
	      "markerloader_static.js",
	      "gmap_marker.js",
	      "marker.js",
	      "gmap.js"
	    ];

	    $.getMultiScripts(script_arr, '/sites/all/modules/gmap/js/').done(function() {

	         console.log('drupal loaded');

  // all scripts loaded
  
		       });


            $(".fakemap .gmap-map span").bind("click", function(e){

                let api_key = Drupal.settings.fewoaufsylt.gmap_api_key;
                console.log(api_key);


                       $.getScript("https://maps.googleapis.com/maps/api/js?v=3&language=de&sensor=false&libraries=geometry" + api_key, function(data, textStatus, jqxhr) {
				    $('.fakemap span').remove();
				    $('.fakemap').removeClass('fakemap');
				    jQuery('.gmap-control:not(.gmap-processed)').addClass('gmap-processed').each(function () {
//						    Drupal.gmap.setup.call(this);
                                                    //console.log(Drupal.settings.gmap);

						    // do something only the first time the map is loaded

						    //define marker options
  
                                                    //var opts = {'anchor':anchor,'icon':icon, 'position':position};

						    Drupal.gmap.setup.call(this);

						    function waitForgmap(){
						    if(Drupal.gmap.getMap("auto2map").map && Drupal.gmap.getMap("auto2map").ready){
						    //variable exists, do what you want

                                                    let icon_dir = Drupal.settings.fewoaufsylt.gmap_marker_load_dir[0];

                                                    let icon_data = Drupal.settings.fewoaufsylt.gmap_marker_load_icons[icon_dir+"/"];

                                                    let icon_filename = icon_data.f[0];
                                                    let icon_path_name = "/" + icon_dir + "/" + icon_filename; 

                                                    let icon_h = icon_data.h[0];
                                                    let icon_w = icon_data.w[0];

                                                    let icon_anchor_x = icon_data.i[0][0][3][0];
                                                    let icon_anchor_y = icon_data.i[0][0][4][0];

                                                    let marker_lattitude = Drupal.settings.gmap.auto2map.markers[0].latitude;
                                                    let marker_longitude = Drupal.settings.gmap.auto2map.markers[0].longitude;

						    var position = new google.maps.LatLng(marker_lattitude,marker_longitude);

						    var icon_size = { width: icon_w ,height: icon_h };
						    var icon_anchor = {x:icon_anchor_x,  y:icon_anchor_y };
						    var icon = {url: icon_path_name, size: icon_size, anchor:icon_anchor };
						    console.log(icon);

						    var housemarker = new google.maps.Marker;
						    console.log(housemarker);
						    housemarker.setIcon(icon);
						    housemarker.setPosition(position);
						    housemarker.setMap(Drupal.gmap.getMap("auto2map").map);
						    }
						    else{
							    setTimeout(waitForgmap, 250);
						    }
						    }

						    //wait for the map to be loaded to add the marker
						    waitForgmap();
                                                     
						   });
		       });
		       if ($(this).hasClass('gmap_always_show')) { jQuery.cookie('view_gmap_all_page', '1',{ expires: 30 }); };
		    });

	 });
	      }
   }
})(jQuery);


