(function ($) {


Drupal.behaviors.rooms_availability_reference = {
  attach: function(context) {
    var minDate =new Date();
    var i = 0;

    function isOverlapping(event){
      var array = calendar.fullCalendar('clientEvents');
      for(i in array){
        if(array[i].id != event.id){
          if(!(array[i].start >= event.end || array[i].end <= event.start)){
            return true;
          }
        }
      }
      return false;
    }
    $monthnames =  ['January','February','March','April','May','June','July','August','September','October','November','December'];
    if($("body").hasClass("i18n-de")) 
          {
                 //$('.cal').fullCalendar( {
                        //localize the month names to German
                 //$callang: 'de';
            
            $monthnames =  ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
                 //});
          }



    
    $('.cal').once('cal', function() {
      var j = i;
      var lastSource;

      $(this).fullCalendar({
        //ignoreTimezone:false,
        timezone:('Europe/Berlin'),
        firstDay:1,
        editable:false,
        selectable:false,
        firstMonth:minDate.getMonth(),
        monthNames: $monthnames,
        monthNamesShort: $monthnames,
          // $monthnames,
        //month:
        //month:minDate.getMonth(),
        //year:minDate.getFullYear(),
        
            //put that in the original loading file as a option parameter
        //lang:$callang, 
        
        header:{
          center:'',
          right: '',
          left:''
        },
        defaultView: 'year',

        eventAfterAllRender: function(view) {
        },
        
        loading: function(bool) {
          if (bool){
            //console.log('I am populating the calendar with events');
          }
          else{
            //console.log('W00t, I have finished!');
            var calevent = jQuery(".cal").fullCalendar( 'clientEvents' );
            $(".cal").fullCalendar( 'removeEvents' , '1' );
            for(i in calevent){
              if(calevent[i].id == 0){
                to = calevent[i].end;
                from = calevent[i].start;
                m= from.getMonth(), incr= from.getDate();
                mydatemonth = "0"+(from.getMonth()+1);
                mydateday = "0"+from.getDate();
                mydate =  ".fc-day-"+from.getFullYear()+"-"+mydatemonth.slice(-2)+"-"+mydateday.slice(-2)+" .fc-day-number";
                if ($(mydate).hasClass("na_event_last")) { $(mydate).removeClass("na_event_last"); $(mydate).addClass("na_event"); } else { $(mydate).addClass("na_event_first");}

                while(from<to){
                  from.setDate(++incr);
                  //fc-day-2014-04-16
                  //console.log(from.toLocaleDateString());
                  mydatemonth = "0"+(from.getMonth()+1);
                  mydateday = "0"+from.getDate();
                  mydate =  ".fc-day-"+from.getFullYear()+"-"+mydatemonth.slice(-2)+"-"+mydateday.slice(-2)+" .fc-day-number";
                  $(mydate).addClass("na_event");
                  if(from.getMonth()!= m){
                    m= from.getMonth();
                    incr= 1;
                  }
                }
                from.setDate(++incr);
                //fc-day-2014-04-16
                //console.log(from.toLocaleDateString());
                mydatemonth = "0"+(from.getMonth()+1);
                mydateday = "0"+from.getDate();
                mydate =  ".fc-day-"+from.getFullYear()+"-"+mydatemonth.slice(-2)+"-"+mydateday.slice(-2)+" .fc-day-number";
                if ($(mydate).hasClass("na_event_first")) { $(mydate).removeClass("na_event_first"); $(mydate).addClass("na_event"); } else { $(mydate).addClass("na_event_last");}
                // to test 
              }
            }

            // bind to all your events here
            //console.log(view.calendar.clientEvents());
          }
        },

        viewDisplay: function(view) {
          if (view.name == 'year') {
            view.calendar.removeEventSource(lastSource);
            view.calendar.refetchEvents();

            url = '?q=rooms/units/unit/' + Drupal.settings.roomsAvailabilityRef[j].unitID + '/availability/json/'
                      + view.start.getFullYear() + '/' + (view.start.getMonth() + 1) + '/1/' //start day
                      + (view.end.getFullYear()+1) +'/' + (view.end.getMonth() + 1) +'/0/' // end day
                      + Drupal.settings.roomsAvailabilityRef[j].style;

            console.log(url);

            view.calendar.addEventSource(url);
            //$(".cal").fullCalendar( 'removeEvents' , '1' );
            view.calendar.removeEvents('1');
            lastSource = url;
          }
        }
      });

      i++;
    });


//alert($("#edit-rooms-start-date-datepicker-popup-0").val());
//alert($("#edit-rooms-end-date-datepicker-popup-0").val());

    //jQuery('.cal').fullCalendar({
          //events: [
                  
                    //{
                        //title  : 'event2',
                                    //start  : '2014-03-27',
                                                //end    : '2014-03-28'
                                                        //},
                                                             
                                                            //]
    //});


    //$(this).fullCalendar('changeView','basicDay');
    // Resize takes care of some quirks on occasion

    $(window).resize();

    

  }
};
})(jQuery);
