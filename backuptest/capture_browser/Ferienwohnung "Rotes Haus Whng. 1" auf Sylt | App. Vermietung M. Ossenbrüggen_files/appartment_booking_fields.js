(function ($) {
   Drupal.behaviors.few_appartment_booking_field = {

      attach: function(context) {

         $(document).ready(function() {
            windowWidth = document.documentElement.clientWidth || document.body.clientWidth;

            $(window).scroll(function() {
               if(($(".mean-bar").length>0) && $('.meanmenu-reveal').hasClass('meanclose'))  {
                  $(".meanmenu-reveal").click();
               }
            });


            if (windowWidth<=480 && $("#menu-anch-ap").css('display') == 'block')
               {
                  $(".mean-nav ul").append($("#menu-anch-ap").children().html());
                  $("#menu-anch-ap").hide();

                  $(".mean-nav ul li a ").bind('click', function() {
                     $(".meanmenu-reveal").click();
                  });

                  //$(".'table.fc-year-main-table>tbody>tr").each(function( index ) {
                  //cal_month = $("<li />").append($("<tbody />").append($("<tr />").append($( this ).children().clone())));
                  //$(this).parent().append(cal_month);
                  //$(this).remove();
                     //$(this).addClass('slides');
                  //});
                   $(".'table.fc-year-main-table>tbody").addClass("slides");
                  //var cal_year_clone = $('table.fc-year-main-table>tbody>li').clone();
                  //cal_year = $('<tr />').append($("<td />").append($('<div />').addClass("cal_flexslider").append($('<ul />').addClass("slides").append(cal_year_clone))));
                  //$('table.fc-year-main-table>tbody>li').remove();
                  //$('table.fc-year-main-table>tbody').append(cal_year);
                  //$('.cal_flexslider').flexslider();
                  //$('.cal_flexslider').flexslider().pause();
                  $('table.fc-year-main-table').flexslider({
                       selector: "tbody.slides > tr"
                  });
                  $('table.fc-year-main-table').flexslider("pause");
               }


            $(window).resize(function() {
               windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
               if (windowWidth<=480 && $("#menu-anch-ap").css('display') == 'block')
                  {
                     $(".mean-nav ul").append($("#menu-anch-ap").children().html());
                     $("#menu-anch-ap").hide();
                     $(".mean-nav ul li a ").bind('click', function() {
                     $(".meanmenu-reveal").click();
                     });


                     $(".'table.fc-year-main-table>tbody>tr").each(function( index ) {
                        //cal_month = $("<li />").append($("<tbody />").append($("<tr />").append($( this ).children().clone())));
                        //$(this).parent().append(cal_month);
                        //$(this).remove();
                        //$(this).addClass('slides');
                     });
                     $(".'table.fc-year-main-table>tbody").addClass("slides");
                     //var cal_year_clone = $('table.fc-year-main-table>tbody>li').clone();
                     //cal_year = $('<tr />').append($("<td />").append($('<div />').addClass("cal_flexslider").append($('<ul />').addClass("slides").append(cal_year_clone))));
                     //$('table.fc-year-main-table>tbody>li').remove();
                     //$('table.fc-year-main-table>tbody').append(cal_year);
                     //$('.cal_flexslider').flexslider();
                     //$('.cal_flexslider').flexslider().pause();
                     $('table.fc-year-main-table').flexslider({
                        selector: "tbody.slides > tr"
                     });
                     $('table.fc-year-main-table').flexslider("pause");
                  }

               if (windowWidth>480 && $("#menu-anch-ap").css('display') == 'none')
                  {
                     $("#menu-anch-ap").show();
                     //var cal_year = $('.cal_flexslider>.slides>li>tbody>tr').clone();
                     //$('.cal_flexslider').remove();
                     //$('table.fc-year-main-table>tbody>tr').remove();
                     //$('table.fc-year-main-table>tbody').append(cal_year);
                     var cal_year_inside = $('table.fc-year-main-table>tbody>tr').clone();
                     $('table.fc-year-main-table').remove();
                     var cal_year = $('<table />').addClass('fc-year-main-table fc-border-separate').css("width","100%").append($('<tbody />'));
                     $(cal_year_inside).each(function( index ) {
                        $(this).removeAttr("style").removeClass("slides").removeClass("flex-active-slide");
                     });
                     $(cal_year).append(cal_year_inside);
                     $('.rooms-availability-field-calendar .fc-content .fc-view-year').append(cal_year);
                  }
               });

            $.extend({
               getUrlVars: function(){
                  var vars = [], hash;
                  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                  for(var i = 0; i < hashes.length; i++)
                  {
                     hash = hashes[i].split('=');
                     vars.push(hash[0]);
                     vars[hash[0]] = hash[1];
                  }
                  return vars;
               },
               getUrlVar: function(name){
                  return $.getUrlVars()[name];
               }
            });

            $("#error_message_booking").hide();

	    // Setting the DOM element's onclick to null removes 
	    // the inline click handler



            function sameDay(d1, d2) {
               var a,
               b;
               a = new Date(+d1);
               b = new Date(+d2);
               a.setHours(0, 0, 0, 0);
               b.setHours(0, 0, 0, 0);
               return +a == +b;
            }

            function price_result_ini() {
               $(".field-booking-fee .price_result").text(parseFloat($(".field-booking-fee .field-name-field-booking-fee").text())/100);
               $(".field-clearning-fee .price_result").text(parseFloat($(".field-clearning-fee .field-name-field-clearning-fee").text())/100);
               $(".field-sheets-and-towles .price_result").text(parseFloat($(".field-sheets-and-towles .field-name-field-sheets-and-towles").text())/100);
               $(".field-group-surcharge .price_result").text(parseFloat($(".field-group-surcharge .field-name-field-group-surcharge").text())/100);
               $("#total_base_price").text("0");
               //toremoveafterfix jQuery(".rooms-search-result__actions #edit-submit").attr('disabled','disabled');
//	       $('#edit-submit').on('click', (function(e) {
//			       e.stopPropagation();
//			       e.preventDefault();
//			       alert("Das Buchungsformular ist derzeit deaktiviert. Bitte kontaktieren Sie uns aufgrund eines technischen Fehlers aktuell ausschließlich per Email:info@fewoaufsylt.de"); 
  // $(this).off('click');
//return false;
//		}));

//  $('#edit-submit').on('tap', (function(e) {
//			  e.stopPropagation();
//			       e.preventDefault();
//			       alert("Das Buchungsformular ist derzeit deaktiviert. Bitte kontaktieren Sie uns aufgrund eines technischen Fehlers aktuell ausschließlich per Email info@fewoaufsylt.de"); 
//   $(this).off('click');
//return false;
//		}));

//  $('#edit-submit').on('touchstart', (function(e) {
//			  e.stopPropagation();
//			       e.preventDefault();
//			       alert("Das Buchungsformular ist derzeit deaktiviert. Bitte kontaktieren Sie uns aufgrund eines technischen Fehlers aktuell ausschließlich per Email:info@fewoaufsylt.de"); 
//   $(this).off('click');
//return false;
//		}));

            }

            price_result_ini();

            function heapbox_update_select(element,index ) {
               $("#heapbox_"+element).attr("tabIndex",index);
               $("#heapbox_"+element+" a.holder").attr("rel",index);
               $("#heapbox_"+element+" a.holder").text(index);
               $("#heapbox_"+element+" li.heapOption a").removeClass("selected");
               $("#heapbox_"+element+" li.heapOption a[rel="+index+"]").addClass("selected");
               $("#"+element+" option").removeAttr("selected");
               $("#"+element+" option[value="+index+"]").attr("selected","selected");
            }

            $("#edit-group-size-adults1").heapbox({
               'onChange':function(value)
               {
                  $('.rooms-unit-info-hidden input[name*="group_size"]').val(value);
                  if ($("#edit-rooms-start-date-datepicker-popup-0").val()!='')
                     if ( $("#edit-rooms-end-date-datepicker-popup-0").val()!="")
                        {
                           {
                              price_change();
                           }
                        }
               }
            });
            heapbox_update_select("edit-group-size-adults1","1");
            $("#edit-group-size-adults1--2").heapbox();
            heapbox_update_select("edit-group-size-adults1--2","1");


            //$(".field-name-field-seasons-price").sort(function (a, b) {

               //return new Date($(a).find(".date-display-start").attr("content")) < new Date($(b).find(".date-display-start").attr("content"));
            //}).each(function () {
               //$("#rooms_unit_appartment_full_group_ap_left_bot>div").prepend(this);
            //})


            //$(".field-name-field-seasons-price").each(function() {
               //if(new Date($(".field-name-field-seasons-price .date-display-start").last().attr("content")) < new Date($(this).find(".date-display-start").attr("content"))) {
                  //$(".field-name-field-seasons-price").last().insertBefore(this);
               //}  

            //});


            $("#rooms_unit_appartment_full_group_ap_left_bot>div").prepend($("h3.field-label:first"));

            $(".entity-season").removeClass("clearfix");
            $('.field-name-field-seasons-price:odd').addClass("odd");
            $('.field-name-field-seasons-price:even').addClass("even");
            $('.field-name-field-seasons-price:first').addClass("first");
            $('.field-name-field-seasons-price:last').addClass("last");

            $("#page-title").append("<br />");
            $(".field-name-field-appartment-size").appendTo($("#page-title"));
            $("#previous_link_unit").appendTo($("#content h1"));
            $("#page-title").append("&nbsp;");
            $(".appartment_size").appendTo($("#page-title"));
            $("#sleep_nbr").appendTo($("#page-title"));
            $(".vcard").appendTo($("#page-title"));
            $(".rooms-search-result__unit-base-price").append($("#booking_total_day_price"));


            $(".fc-event-title").remove();
            $(".gmap-title").prepend("<a name='map'></a>");
            $(".group-booking").prepend("<a name='vacancies'></a>");
            $("#rooms_unit_appartment_full_group_app_col_left").prepend("<a name='description'></a>");
            $("#rooms_unit_appartment_full_group_app_right").prepend("<a name='photo'></a>");
            $("#rooms_unit_appartment_full_group_ap_right_bot").prepend("<a name='calendar'></a>");
            //jQuery("#edit-rooms-end-date-datepicker-popup-0").datepicker("setDate", new Date(2014,5,10));


            $(".fc-year-main-table tbody tr:not([class*=fc-]):last").addClass("last-3-months");

            $("#edit-rooms-start-date-datepicker-popup-0").attr("readonly", "true");
            $("#edit-rooms-end-date-datepicker-popup-0").attr("readonly", "true");


            //var userName = JsPostGetObjects["name"];

            //var startDate = new Date(2000, 1-1, 1);  // 2000-01-01
            //var endDate =   new Date();              // Today





            function price_change() {


               $("#error_message_booking").hide();
               var overlap_event = false;
               var array = $('.cal').fullCalendar('clientEvents');
               var sdt = new Date($("#edit-rooms-start-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'));
               var edt = new Date($("#edit-rooms-end-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'));
               console.log($("#edit-rooms-start-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'));
               console.log(sdt);
               console.log(edt);

               var event = {
                  id              : '123',
                  title           : '',
                  start           : sdt,
                  end             : edt,
                  backgroundColor : 'yellow',
                  allDay          : true,
                  editable        : false,
               };
               for(i=0;i<array.length;i++){
                  if(array[i].id != event.id){
                     from_date = new Date(event.start);
                     to_date = new Date(event.end);
                     while(from_date<=to_date){
                        //console.log(from_date);
                        //console.log(array[i]);
                        if((from_date>array[i]._start) && (from_date<array[i]._end)){
                          overlap_event = true;
                          $(mydate).removeClass("booking_event");
                          $(mydate).removeClass("booking _event_last");
                          $(mydate).removeClass("booking _event_first");
                        }
                        from_date.setDate(from_date.getDate()+1);
                     }
                  }
               }
               if ((!overlap_event) && (diffDays(event.start,event.end)>=$(".min_book").attr("data-booking-min"))) { 
                  $(".rooms-unit-info-hidde ")

                  //var sdt = new Date($("#edit-rooms-start-date-datepicker-popup-0").val());
                  //var edt = new Date($("#edit-rooms-end-date-datepicker-popup-0").val());
                  //console.log($("#edit-rooms-start-date-datepicker-popup-0").val());
                  //console.log($("#edit-rooms-end-date-datepicker-popup-0").data("date"));
                  var _dt;
                  _dt = new Date(sdt);
                  rent_price = 0;
                  //var price = base_price;
                  
                  while ( +_dt != +edt )
                     {
                        var price = "N/A";
                        console.log("new day test");
                        for (index = 0; index < season_price_date.length; ++index) {
                           if ( (season_price_date[index]['begin']<= _dt ||  sameDay(_dt, season_price_date[index]['begin'])) && (season_price_date[index]['end']>=_dt || sameDay(_dt, season_price_date[index]['end']))) {
                              console.log("between");
                              price = season_price_date[index]['price'];
                           }
                        }
                        //console.log(price);
                        _dt.setDate(_dt.getDate()+1);

                        if (rent_price != "N/A" && price != "N/A") { 
                           rent_price = price + rent_price;
                           console.log(rent_price);
                        }
                        else
                           {
                           rent_price = "N/A";
                           continue;
                           }

                        var hdn_extra_charges = parseInt($("#hdn_extra_charges").val());
                        hdn_extra_charges = hdn_extra_charges + rent_price;
                        $(".hdn_base_price").val(hdn_extra_charges);

                     } 

                     if (rent_price != "N/A") { 
                           $(".rooms-search-result__base-price-amount").text(rent_price+" €");
                           $("#total_base_price").text(rent_price);
                        }
                        else
                           {
                              $(".rooms-search-result__base-price-amount").text("N/A");
                              $("#total_base_price").text(rent_price);
                           }

                        var hdn_extra_charges = parseInt($("#hdn_extra_charges").val());
                        hdn_extra_charges = hdn_extra_charges + rent_price;
                        $(".hdn_base_price").val(hdn_extra_charges);




                     $('.cal').fullCalendar( 'removeEvents' , '123' );



                     var sheets_and_towels_discount = parseFloat($(".field-name-field-sheets-and-towels-discount").text());
                     if ($(".field-name-field-sheets-and-towels-discount").text()=="") 
                        {
                           var sheets_and_towels_discount = 0; 
                        }
                     booking_period = diffDays(sdt,edt);
                     //console.log(sheets_and_towels_discount);
                     number_of_person = parseFloat($("#edit-group-size-adults1").val());
                        if((sheets_and_towels_discount>booking_period) || (sheets_and_towels_discount == 0))
                           {
                              $(".field-sheets-and-towles .price_result").text( number_of_person * sheets_and_towles / 100 );
                           }
                           else
                              {
                                 $(".field-sheets-and-towles .price_result").text(0);
                              } 
                        if(minimum_group_surcharge>0) {
                           //console.log(minimum_group_surcharge);
                           //console.log(number_of_person)
                           //console.log(group_surcharge);

                           if(minimum_group_surcharge <= number_of_person)
                              {
                                 $(".field-group-surcharge .price_result").text(group_surcharge*(number_of_person-minimum_group_surcharge)*booking_period/100);
                              }
                              else
                                 {
                                    $(".field-group-surcharge .price_result").text(0);
                                 }
                        }
                        else
                           {
                              $(".field-group-surcharge .price_result").text(0);
                           }



                           $('.cal').fullCalendar( 'renderEvent', event , true ) 
                           $('.booking_event').removeClass("booking_event");
                           $('.booking_event_first').removeClass("booking_event_first");
                           $('.booking_event_last').removeClass("booking_event_last");

                           var calevent = jQuery(".cal").fullCalendar( 'clientEvents' );
                           for(i in calevent){
                              if(calevent[i].id == 123){
                                 to = calevent[i].end;
                                 from = calevent[i].start;
                                 mydatemonth = "0"+(from.getMonth()+1);
                                 mydateday = "0"+from.getDate();
                                 mydate =  ".fc-day-"+from.getFullYear()+"-"+mydatemonth.slice(-2)+"-"+mydateday.slice(-2);
                                 $(mydate).addClass("booking_event_first");
                                 m= from.getMonth(), incr= from.getDate();
                                 while(from<to){
                                    from.setDate(++incr);
                                    mydatemonth = "0"+(from.getMonth()+1);
                                    mydateday = "0"+from.getDate();
                                    mydate =  ".fc-day-"+from.getFullYear()+"-"+mydatemonth.slice(-2)+"-"+mydateday.slice(-2);
                                    $(mydate).addClass("booking_event");
                                    if(from.getMonth()!= m){
                                       m= from.getMonth();
                                       incr= 1;
                                    }
                                 }
                                 mydatemonth = "0"+(from.getMonth()+1);
                                 mydateday = "0"+from.getDate();
                                 mydate =  ".fc-day-"+from.getFullYear()+"-"+mydatemonth.slice(-2)+"-"+mydateday.slice(-2);
                                 $(mydate).removeClass("booking_event");
                                 $(mydate).addClass("booking_event_last");
                              }
                           }

                           $(".fc-event-title").remove();
                           //$(".rooms-search-result__base-price-amount").text(parseFloat($("#total_base_price").text())+parseFloat($(".field-booking-fee .price_result").text())+parseFloat($(".field-clearning-fee .price_result").text())+parseFloat($(".field-sheets-and-towles .price_result").text()));
                           if($("#total_base_price").text() !="N/A") {
                           $("#total_base_price").text(parseFloat($("#total_base_price").text())+parseFloat($(".field-booking-fee .price_result").text())+parseFloat($(".field-clearning-fee .price_result").text())+parseFloat($(".field-sheets-and-towles .price_result").text())+parseFloat($(".field-group-surcharge .price_result").text()));
                           $('.rooms-unit-info-hidden input[name*="hdn_base_price"]').val($("#total_base_price").text());
                           }
                           else
                           {
                              $("#total_base_price").text("N/A");
                              $('.rooms-unit-info-hidden input[name*="hdn_base_price"]').val("N/A");
                           }

                           return true;
               }
               else { 
                  $("#error_message_booking").show();
                  return false;
                  
                  //set error message in red and maybe reset date
               } ;
            };


            //Calculate the difference of two dates in total days
            function diffDays(d1, d2)
            {
               var ndays;
               var tv1 = d1.valueOf();  // msec since 1970
               var tv2 = d2.valueOf();

               ndays = (tv2 - tv1) / 1000 / 86400;
               ndays = Math.round(ndays - 0.5);
               return ndays;
            }

            //var nDays = diffDays(startDate, endDate);
            var rent_price = 0;
            var base_price = parseFloat($(".rooms-search-result__base-price-amount").text().replace("€ ",""));
            console.log(base_price);
            var booking_fee = parseFloat($(".field-name-field-booking-fee .field-item").text().replace(" €",""));
            var sheets_and_towels_discount = $(".field-name-field-sheets-and-towels-discount .field-item").text();
            var sheets_and_towles = parseFloat($(".field-name-field-sheets-and-towles").text().replace(" €",""));
            var group_surcharge =  parseFloat($(".field-name-field-group-surcharge").text().replace(" €",""));
            var minimum_group_surcharge =  parseFloat($(".field-name-field-minimum-group-surcharge").text());
            if ($(".field-name-field-minimum-group-surcharge").text()=="") { 
               var minimum_group_surcharge = 0; 
            }
            var clearning_fee = parseFloat($(".field-name-field-clearning-fee .field-item").text().replace(" €",""));
            var general_surcharge = parseFloat($(".field-name-field-general-surcharge .field-item").text().replace(" €",""));
            var season_price_date = [];
            $(".room-season-price-room-season-price").each(  function() {
               season_room_price = (
                  {
                  begin: new Date($(this).find(".date-display-start").attr("content")),
                  end:   new Date($(this).find(".date-display-end").attr("content")),
                  price:  parseFloat($(this).find(".field-name-field-price .field-item").text().replace(" €",""))
               });
               season_price_date.push(season_room_price);
            })
            //console.log(season_price_date);
            //
            if (($('.field-name-field-special-offer-status').text().trim() == "Enabled") && ($(".field-name-field-special-offer-price").length != 0) && ($(".special_offer_date .field-name-field-startdatum").length != 0))            
               {
                  season_price_date.push(  {
                     begin: new Date($(".special_offer_date .date-display-start").attr("content")),
                     end: new Date($(".special_offer_date .date-display-end").attr("content")),
                     price:  parseFloat($(".field-name-field-special-offer-price").text().replace(" €",""))
                  });
                  //console.log( {
                     //begin: new Date($(".special_offer_date .date-display-start").attr("content")),
                     //end: new Date($(".special_offer_date .date-display-end").attr("content")),
                     //price:  parseFloat($(".field-name-field-special-offer-price").text().replace(" €",""))
                  //})
               }
               else
                  {
                     $('.special_offer_date').remove();
                     $('.field-name-field-special-offer-price').remove();
                  }



                  $('td.fc-day').each(function() {

                     var cellPos = {
                        row: $(this).parents('tbody').children().index(jQuery(this).parent()),
                        col: $(this).parent().children().index($(this))
                     };
                  });

                  $(".fc-event-title").remove();

                  $(".rooms-unit-appartment #rooms-booking-availability-search-form [id*=edit-submit--]").hide();

                  if ($.getUrlVar("rooms_start_date") != null) {
                     var urlstartdate = $.getUrlVar("rooms_start_date");
                     var UrlStartDate = new Date(urlstartdate.substring(0,4),urlstartdate.substring(8,10).replace(/-0/g,'-').replace(/-/g,'')-1,urlstartdate.substring(4,7).replace(/-0/g,'-').replace(/-/g,''));
                     urlstartdatemonth = UrlStartDate.getMonth();
                     if(urlstartdatemonth<9) 
                        {
                           urlstartdatemonth = "0"+(urlstartdatemonth+1);
                        }
                     else {
                        urlstartdatemonth++;
                     }
                     urlstartdateday = UrlStartDate.getDate();
                     if(urlstartdateday<10) 
                        {
                           urlstartdateday = "0"+urlstartdateday;
                        }

                     urlstartdate = urlstartdateday+'.'+urlstartdatemonth+'.'+UrlStartDate.getFullYear();
                     console.log(urlstartdate);
                     $("#edit-rooms-start-date-datepicker-popup-0").val(urlstartdate);
                     $(".rooms-book-unit-form #edit-hidden [name='start_date']").val(urlstartdate);
                     //$("#edit-rooms-start-date-datepicker-popup-0").datepicker({"defaultDate":UrlStartDate});
                     //$("#edit-rooms-start-date-datepicker-popup-0").datepicker({"dateFormat":"mm/dd/yy"});
                     //$("#edit-rooms-start-date-datepicker-popup-0").datepicker("setDate", UrlStartDate);
                  }

                  if ($.getUrlVar("rooms_end_date") != null) {
                     var urlenddate = $.getUrlVar("rooms_end_date");
                     var UrlEndDate =  new Date(urlenddate.substring(0,4),urlenddate.substring(8,10).replace(/-0/g,'-').replace(/-/g,'')-1,urlenddate.substring(4,7).replace(/-0/g,'-').replace(/-/g,''));
                     urlenddatemonth = UrlEndDate.getMonth();
                     if(urlenddatemonth<9) 
                        {
                           urlenddatemonth = "0"+(urlenddatemonth+1);
                        }
                        else {
                           urlenddatemonth++;
                        }

                     urlenddateday = UrlEndDate.getDate();
                     if(urlenddateday<10) 
                        {
                           urlenddateday = "0"+urlenddateday;
                        }

                     urlenddate = urlenddateday+'.'+urlenddatemonth+'.'+UrlEndDate.getFullYear();
                     console.log(urlenddate);
                     $("#edit-rooms-end-date-datepicker-popup-0").val(urlenddate);
                     $(".rooms-book-unit-form #edit-hidden [name='end_date']").val(urlenddate);
 
                     //$("#edit-rooms-end-date-datepicker-popup-0").datepicker({defaultDate: UrlEndDate});
                     //$("#edit-rooms-end-date-datepicker-popup-0").datepicker("setDate", UrlEndDate);
                     //not working for some reasons ?
                  }

                  if ($.getUrlVar("group_size_adults:1") != null) {
                     //fix a strange bug appears before :
                     $(".rooms-search-result__actions #edit-submit").removeAttr('disabled');
                     var group_size = $.getUrlVar("group_size_adults:1");
                     heapbox_update_select("edit-group-size-adults1",group_size.toString());
                     $('.rooms-unit-info-hidden input[name*="group_size"]').val(group_size);

                     if ($.getUrlVar("rooms_end_date") != null && $.getUrlVar("rooms_start_date")) {
                        price_change();
                     }
                  }


                  $(".fc-event-title").remove();

                  $(".form-item-rooms").hide();
                  if (($("#edit-rooms-start-date-datepicker-popup-0").val()=="")  || ($("#edit-rooms-end-date-datepicker-popup-0").val()==""))
                     {
                        //toremoveafterfix jQuery(".rooms-search-result__actions #edit-submit").attr('disabled','disabled');
                     }

                     $("#edit-rooms-end-date-datepicker-popup-0").change(function() {
                        var start = new Date(jQuery("#edit-rooms-start-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'))
                        var end = new Date(jQuery("#edit-rooms-end-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'))
                        $(".rooms-unit-info-hidden [name=end_date]").val($(this).val().replace(".","-").replace(".", "-"));

                        if (($("#edit-rooms-start-date-datepicker-popup-0").val()=="")  || ($("#edit-rooms-end-date-datepicker-popup-0").val()==""))
                           {
                              jQuery(".rooms-search-result__actions #edit-submit").attr('disabled','disabled');
                           }

                           if (($("#edit-rooms-start-date-datepicker-popup-0").val()!="")  && ($("#edit-rooms-end-date-datepicker-popup-0").val()!=""))
                              {
                                 jQuery(".rooms-search-result__actions #edit-submit").removeAttr('disabled');
                                 $("#total_base_price").val("");

                              }


                              if(start>end)
                                 {
                                    $("#edit-rooms-start-date-datepicker-popup-0").val("");
                                    price_result_ini();
                                 }

                                 if (($("#edit-rooms-start-date-datepicker-popup-0").val()!="")  && ($("#edit-rooms-end-date-datepicker-popup-0").val()!=""))
                                    {
                                       if(!price_change())
                                          {
                                             $("#edit-rooms-end-date-datepicker-popup-0").val("");
                                             price_result_ini();
                                          }
                                    }
                     });


                     $("#edit-rooms-start-date-datepicker-popup-0").change(function() {
                        $(".rooms-unit-info-hidden [name=start_date]").val($(this).val().replace(".", "-").replace(".", "-"));
                        if (($("#edit-rooms-start-date-datepicker-popup-0").val()=="")  || ($("#edit-rooms-end-date-datepicker-popup-0").val()==""))
                           {
                              jQuery(".rooms-search-result__actions #edit-submit").attr('disabled','disabled');
                           }

                           if (($("#edit-rooms-start-date-datepicker-popup-0").val()!="")  && ($("#edit-rooms-end-date-datepicker-popup-0").val()!=""))
                              {
                                 jQuery(".rooms-search-result__actions #edit-submit").removeAttr('disabled');
                              }


                              var start = new Date(jQuery("#edit-rooms-start-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'))
                              var end = new Date(jQuery("#edit-rooms-end-date-datepicker-popup-0").val().replace(/(\d{2}).(\d{2}).(\d{4})/,'$3/$2/$1'))

                              if(start>end)
                                 {
                                    $("#edit-rooms-end-date-datepicker-popup-0").val("");
                                    jQuery(".rooms-search-result__actions #edit-submit").removeAttr('disabled');
                                    price_result_ini();
                                 }


                                 //
                                 if (($("#edit-rooms-start-date-datepicker-popup-0").val()!="")  && ($("#edit-rooms-end-date-datepicker-popup-0").val()!=""))
                                    {
                                      if(!price_change())
                                      {
                                         $("#edit-rooms-start-date-datepicker-popup-0").val("");
                                         price_result_ini();
                                      }
                                    }
                     });


         });


      }}
})(jQuery);

