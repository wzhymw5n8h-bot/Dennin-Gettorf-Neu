jQuery(document).ready(function($){  

    $('.hamburger').click(function(){
      if($('body').hasClass('menu-open'))
      {
        $('body').removeClass('menu-open');
        $('#menu-overlay').fadeOut(300);
        $(this).removeClass('is-active');
        console.log('remove');
      } else
      {
        $('body').addClass('menu-open');
        $('#menu-overlay').fadeIn(300);
        $(this).addClass('is-active');
        console.log('add');
      }
    })

    $('#menu-overlay .scrollbar-macosx').scrollbar();

    $('#menu-top li a').click(function(){
      link=$(this).attr('href');
      thisLink=$(this);
      if(link.indexOf("#") >= 0)
      {
        id=link.substr(link.indexOf("#") + 1)
        $('html, body').animate({
              scrollTop: $('#'+id+'').offset().top-$('.page-header').outerHeight()-50
        }, 1000);
        return false;
      }
    });

    if (location.hash) {
      window.scrollTo(0, 0);
      setTimeout(function() {  
        window.scrollTo(0, 0);
        var id=location.hash.substr(location.hash.indexOf("#") + 1);
        $('html, body').animate({
              scrollTop: $('#'+id+'').offset().top-$('.page-header').outerHeight()-50
        }, 1000);
        console.log('a');
        return false;
      }, 500);
      console.log('b');
    }

    $('#menu-top-mobile a').click(function(){
      $('body').removeClass('menu-open');
      $('#menu-overlay').fadeOut(300);
      $('.hamburger').removeClass('is-active');
    })

    $('.menu-top-mobile .sub-opener').click(function(){
      if($(this).closest('li').hasClass('sub-menu-open'))
      {
        $(this).closest('li').removeClass('sub-menu-open');
        $(this).closest('li').find('>ul').slideUp(300);
      } else
      {
        $(this).closest('li').addClass('sub-menu-open');
        $(this).closest('li').find('>ul').slideDown(300);
      }
    });

    $('.menu-top').superfish();

    $('.langs .toggler').click(function(){
      if($(this).closest('.langs').hasClass('open'))
      {
        $(this).closest('.langs').removeClass('open');
        $(this).closest('.langs').find('.list').hide();;
      } else
      {
        $(this).closest('.langs').addClass('open');
        $(this).closest('.langs').find('.list').show();;
      }
    });

    $(document).click(function(event) { 
      var $target = $(event.target);
      if(!$target.closest('.langs').length && 
        $('.langs .list').is(":visible")) {
        $('.langs').removeClass('open');
        $('.langs .list').slideUp(300);
      }        
    });
    
    $('.smooth-scroll-to-section, .smooth-scroll-to-section a').click(function(){
      var headerHeight=$('.page-header').outerHeight()
      link=$(this).attr('href');
      thisLink=$(this);
      if(link.indexOf("#") >= 0)
      {
        id=link.substr(link.indexOf("#") + 1)
        $('html, body').animate({
              scrollTop: $('#'+id+'').offset().top-$('.page-header').outerHeight()-50
        }, 1000);
        return false;
      }
    })

    $('.scroll-down').click(function(){
      var headerHeight=$('.page-header').outerHeight()
      var nextSection=$(this).closest('.content-block').next('.content-block');
      $('html, body').animate({
          scrollTop: nextSection.offset().top-headerHeight
      }, 1000);
      return false;
    })

    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if (scroll > 1 ) 
        {
          $('.page-header').addClass('scrolled');
        } else
        {
          $('.page-header').removeClass('scrolled');
        }
    });

    $('.block-type-7 .slider--logos').on('afterChange', function () {
      $('.slick-slide').each(function () {
        const isHidden = $(this).attr('aria-hidden') === 'true';

        if (isHidden) {
          $(this).removeAttr('tabindex'); // usuń tabindex z ukrytych
        } else {
          $(this).attr('tabindex', '0'); // ewentualnie dodaj dla aktywnego slajdu
        }
      });
    });

    $('.block-type-7 .slider--logos').on('init', function () {
      $('.slick-slide').removeAttr('tabindex'); // usuń tabindex
      $('.slick-slide').each(function () {
        const isHidden = $(this).attr('aria-hidden') === 'true';

        if (isHidden) {
          $(this).removeAttr('tabindex');
        } else {
          $(this).attr('tabindex', '0');
        }
      });
    });

    $('.block-type-7 .slider--logos').each(function () {
      if($(this).hasClass('slider--logos-alt'))
      {
        $(this).slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed:2000,
            responsive: [
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
        });
      } else
      {
        $(this).slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed:2000,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
        });
      }
    });

    $('.block-type-4 .slider').each(function(){
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        dots: true,
        pauseOnHover: false,
        appendDots: $(this).closest('.slider-wrap').find('.slider-nav')
      });
    });

    $('.block-type-5 .counters').each(function(){
      $(this).waypoint({
          handler: function(direction) {                
            if(direction=='down')
            {               
              if($(this.element).hasClass('animation-finished')) { } else {   
                delay=0; 
                $(this.element).find('.value').each(function(){
                    count = $(this).data('count');
                    options = {
                    useEasing: true, 
                    useGrouping: true, 
                    separator: '', 
                    decimal: ''
                    };
                    numAnim = new CountUp(this, count, options);
                    numAnim.start();  
                    delay=delay+0.2;
                });                     
                $(this.element).addClass('animation-finished');
              }
            }
        },
        offset: '80%'
      })
    });

    $('.block-type-13 .slider').each(function(){
      $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true
      });
    });

    $('.block-type-19 .slider').each(function(){
      $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: true,
        pauseOnHover: false,
        appendDots: $(this).closest('.slider-wrap').find('.slider-nav'),
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    });

    if($('.block-type-2 .accordion-vertical').length)
    {
      $('.block-type-2 .accordion-vertical').each(function(){
        var accordion=$(this);
        accordionItems=$(this).find('.item').length;
        accordionItemsWidth=(accordionItems-1)*100+1;
        accordionItemsWidth=50/(accordionItems-1);
        $(this).find('.item:not(:first-child)').css('width',''+accordionItemsWidth+'%');
        Waypoint.refreshAll();

        accordion.find('.item').click(function(){
            thisItem=$(this);
            accordion.find('.item').css('width',''+accordionItemsWidth+'%').removeClass('active');
            accordion.find('.infos').hide()
            $(this).addClass('active').css('width','50%');
            setTimeout(
              function(){
                thisItem.find('.infos').fadeIn(300);
              }
            ,500);   
            Waypoint.refreshAll()   

            if (window.matchMedia("(max-width: 768px)").matches) {
              var headerHeight=$('.page-header').outerHeight()
              $('html, body').animate({
                  scrollTop: thisItem.offset().top-headerHeight
              }, 100);   
            }         
        });
        Waypoint.refreshAll();
      });
    }

    if($('.block-type-16 .accordion-vertical').length)
    {
      $('.block-type-16 .accordion-vertical').each(function(){
        var accordion=$(this);
        accordionItems=$(this).find('.item').length;
        accordionItemsWidth=(accordionItems-1)*100+1;
        accordionItemsWidth=50/(accordionItems-1);
        $(this).find('.item:not(:first-child)').css('width',''+accordionItemsWidth+'%');
        Waypoint.refreshAll();

        accordion.find('.item').click(function(){
            thisItem=$(this);
            accordion.find('.item .content').css('opacity','0');
            accordion.find('.item').css('width',''+accordionItemsWidth+'%').removeClass('active');
            $(this).addClass('active').css('width','50%');
            setTimeout(
              function(){
                thisItem.find('.content').stop().css('opacity','1')
              }
            ,600);   
            Waypoint.refreshAll();

            if (window.matchMedia("(max-width: 768px)").matches) {
              var headerHeight=$('.page-header').outerHeight()
              $('html, body').animate({
                  scrollTop: thisItem.offset().top-headerHeight
              }, 100);   
            }  
        });
        Waypoint.refreshAll();

      });
    }

    /***************/

    $('.accordion .opener').click(function(){
      var thisItem=$(this);

      if($(this).closest('.item').hasClass('open'))
      {
        $(this).closest('.item').removeClass('open')
        $(this).closest('.item').find('.content').slideUp(300);
      } else
      {
        $(this).closest('.accordion').find('.item').removeClass('open');
        $(this).closest('.accordion').find('.item .content').slideUp(300);
        $(this).closest('.item').addClass('open')
        $(this).closest('.item').find('.content').slideDown(300);
        setTimeout(
          function(){
            if (window.matchMedia("(max-width: 768px)").matches) {
              var headerHeight=$('.page-header').outerHeight()
              $('html, body').animate({
                  scrollTop: thisItem.offset().top-headerHeight
              }, 100);
            }  
          }
        , 300); 
      }
    });


    $(".wpcf7-form-control-wrap").mouseover(function(){
      $obj = $("span.wpcf7-not-valid-tip",this);
                $obj.css('display','none');
    });

    $('.animate-block').each(function(){
        $(this).waypoint({
            handler: function(direction) {
              if(direction=='down')
              {
                if(!$(this.element).hasClass('animation-finished')) { 
                  delay=0;
                  TweenMax.to($(this.element), 1, { opacity: 1, delay: delay});
                  TweenMax.from($(this.element), 1, { y: '30px', delay: delay});
                  $(this.element).addClass('animation-finished');
                }
              }
          },
          offset: '90%'
        })
    });

    $('.block-type-6 .counters').each(function(){
      $(this).waypoint({
          handler: function(direction) {                
            if(direction=='down')
            {               
              if($(this.element).hasClass('animation-finished')) { } else {   
                delay=0; 
                $(this.element).find('.value').each(function(){
                    count = $(this).data('count');
                    options = {
                    useEasing: true, 
                    useGrouping: true, 
                    separator: '', 
                    decimal: ''
                    };
                    numAnim = new CountUp(this, count, options);
                    numAnim.start();  
                    delay=delay+0.2;
                });                     
                $(this.element).addClass('animation-finished');
              }
            }
        },
        offset: '80%'
      })
    });
    /*
    $('.hamburger').click(function(){
      if($('body').hasClass('menu-open'))
      {
        $('body').removeClass('menu-open');
        $(this).removeClass('is-active');
        $('#menu-overlay').fadeOut(300);
      } else
      {
        $('body').addClass('menu-open');
        $(this).addClass('is-active');
        $('#menu-overlay').fadeIn(300);
      }
    })
    $('#menu-overlay .scrollbar-macosx').scrollbar();

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if (scroll > 1 ) 
        {
          $('#header').addClass('scrolled');
        } else
        {
          $('#header').removeClass('scrolled');
        }
    });

    $('.tabs .switcher li').click(function(){
      tabIndex=$(this).index();
      $(this).closest('.tabs').find('li').removeClass('active');
      $(this).addClass('active');
      $(this).closest('.tabs').find('.content > div').removeClass('active');
      $(this).closest('.tabs').find('.content > div').eq(tabIndex).addClass('active');
    });

    $('.scroll-to-section a').click(function(){
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top-500
      }, 1000);
      return false;
    })

    $('.testimonials-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      dots: true,
      arrows: true,
      prevArrow: $('.testimonials-prev'),
      nextArrow: $('.testimonials-next'),
      appendDots: $('.testimonials-slider-nav'),
      customPaging : function(slider, i) {
          var title = $(slider.$slides[i]).data('name');
          var location = $(slider.$slides[i]).data('location');
          return '<div>'+title+'<span>'+location+'</span></div>';
      }
    });

    $(".wpcf7-form-control-wrap").mouseover(function(){
  		$obj = $("span.wpcf7-not-valid-tip",this);
      	        $obj.css('display','none');
  	});
    
    google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
        var map = this;
        var ov = new google.maps.OverlayView();
        ov.onAdd = function() {
            var proj = this.getProjection();
            var aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x+offsetX;
            aPoint.y = aPoint.y+offsetY;
            map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
        };
        ov.draw = function() {};
        ov.setMap(this);
    };
    var markerPath = 'http://'+window.location.host+'/clients/oliver/terrabau/wp-content/themes/terrabau/images/';
    function new_map( $el, offset, controls, zoom, centerLat, centerLng, markersSize ) {
      var $markers = $el.find('.marker');
      var mapCenter;
      var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
      //var styles = [{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dadada"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]
      //var styles = [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#959595"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#959595"},{"lightness":29}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#d1d1d1"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#d1d1d1"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ff0000"},{"lightness":19},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#eeeeee"},{"lightness":17}]}]
      //var styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"color":"#dd1f1f"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"},{"saturation":"-26"},{"lightness":"19"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"weight":"2.75"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"color":"#ba3737"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"},{"lightness":"80"},{"color":"#d9d9d9"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#f0f0f0"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"gamma":"2.02"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":"-100"},{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#cecece"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":"3"},{"saturation":-97},{"visibility":"simplified"},{"color":"#d6d6d6"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":-25},{"saturation":-100},{"hue":"#fdff00"}]}]
      //var styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#e6ebec"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"},{"color":"#e6ebec"}]}]

      if(controls=='left')
      {
        var args = {
          zoom    : 11,
          center    : new google.maps.LatLng(0, 0),
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          zoomControl: true,
          zoomControlOptions: {
              style: google.maps.ZoomControlStyle.LARGE,
              position: google.maps.ControlPosition.LEFT_CENTER
          },
          mapTypeControl: false,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: [ 'Styled']
          },
          mapTypeId: 'Styled',
          disableDefaultUI: true
        };
      } else if(controls=='right')
      {
        var args = {
          zoom    : 15,
          center    : new google.maps.LatLng(0, 0),
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          zoomControl: true,
          zoomControlOptions: {
              style: google.maps.ZoomControlStyle.LARGE,
              position: google.maps.ControlPosition.RIGHT_CENTER
          },
          mapTypeControl: false,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: [ 'Styled']
          },
          mapTypeId: 'Styled',
          disableDefaultUI: true
        };
      }
      var map = new google.maps.Map( $el[0], args);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
      map.mapTypes.set('Styled', styledMapType);
      map.markers = [];
      $markers.each(function(){
          add_marker( $(this), map );
      });
      center_map( map );
      zoomChangeBoundsListener =
          google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
              if ( this.getZoom() ){   // or set a minimum
                  this.setZoom(this.getZoom()-1);  // set zoom here
              }
      });
      setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener)}, 2000);
      return map;
    }
    function add_marker( $marker, map ) {
      var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
      var url = $marker.attr('data-url');

      mapCenter=latlng;
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: {
          url: markerPath+'marker.svg',
          scaledSize: new google.maps.Size(54, 67)
        }
      });
      map.markers.push( marker );
        
    }
    function center_map( map ) {
      var bounds = new google.maps.LatLngBounds();
      $.each( map.markers, function( i, marker ){
        var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
        bounds.extend( latlng );
      });

      map.setCenter(mapCenter);
      map.setZoom(parseInt(zoom));
      map.setCenterWithOffset(bounds.getCenter(), 0, -150);
      
    }
    var map = null;
    $('.google-map').each(function(){
      offset=$(this).attr('data-offset');
      controls=$(this).attr('data-controls');
      zoom=$(this).attr('data-zoom');
      centerLat=$(this).attr('data-center-lat');
      centerLng=$(this).attr('data-center-lng');
      markersSize=$(this).attr('data-markers-size');
      map = new_map($(this), offset, controls, zoom, centerLat, centerLng, markersSize);
    });

    $(window).load(function() { 
        $('.header-home').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.image'), 1, { opacity: 1, filter: "blur(0)", delay: delay});
                        delay+=.5;
                        $(this.element).find('.letters span').each(function(){
                            TweenMax.to($(this), 1, { opacity: 1, delay: delay});
                            TweenMax.from($(this), 1, { y: '20px', delay: delay});
                            delay+=.3;
                        });
                        TweenMax.to($(this.element).find('h1'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('h1'), 1, { x: '-20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.text'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.text'), 1, { x: '-20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.button-wrap'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.button-wrap'), 1, { x: '-20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.scroll-indicator'), 1, { opacity: 1, delay: delay});
                        
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.services').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.title'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.title'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        $(this.element).find('.service').each(function(){
                            TweenMax.to($(this), 1, { opacity: 1, delay: delay});
                            TweenMax.from($(this), 1, { y: '20px', delay: delay});
                            delay+=.3;
                        });
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.content-with-background').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.title'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.title'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        $(this.element).find('.row > div').each(function(){
                            TweenMax.to($(this), 1, { opacity: 1, delay: delay});
                            TweenMax.from($(this), 1, { y: '20px', delay: delay});
                            delay+=.3;
                        });
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.testimonials').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.container'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.container'), 1, { y: '20px', delay: delay});
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.generic-content').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        if($(this.element).find('.section-title').length)
                        {
                          TweenMax.to($(this.element).find('.section-title'), 1, { opacity: 1, delay: delay});
                          TweenMax.from($(this.element).find('.section-title'), 1, { y: '20px', delay: delay});
                          delay+=.5;
                        }
                        $(this.element).find('.row > div').each(function(){
                            TweenMax.to($(this), 1, { opacity: 1, delay: delay});
                            TweenMax.from($(this), 1, { y: '20px', delay: delay});
                            delay+=.3;
                        });
                        if($(this.element).find('.scroll-to-sections').length)
                        {
                          TweenMax.to($(this.element).find('.scroll-to-sections'), 1, { opacity: 1, delay: delay});
                          TweenMax.from($(this.element).find('.scroll-to-sections'), 1, { y: '20px', delay: delay});
                          delay+=.5;
                        }
                        TweenMax.to($(this.element).find('.scroll-indicator'), 1, { opacity: 1, delay: delay});
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.service').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.box'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.box'), 1, { y: '20px', delay: delay});
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.team').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.small-title'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.small-title'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        $(this.element).find('.row > div').each(function(){
                            TweenMax.to($(this), 1, { opacity: 1, delay: delay});
                            TweenMax.from($(this), 1, { y: '20px', delay: delay});
                            delay+=.3;
                        });
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.downloads').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.section-title'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.section-title'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.text'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.text'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.tabs'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.tabs'), 1, { y: '20px', delay: delay});
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });

        $('.contact').each(function(){
              $(this).waypoint({
                  handler: function(direction) {
                    if(direction=='down')
                    {
                      if($(this.element).hasClass('animation-finished')) { } else {
                        delay=0;
                        TweenMax.to($(this.element).find('.section-title'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.section-title'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.offices'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.offices'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.hotline'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.hotline'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.form'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.form'), 1, { y: '20px', delay: delay});
                        delay+=.5;
                        TweenMax.to($(this.element).find('.map-holder'), 1, { opacity: 1, delay: delay});
                        TweenMax.from($(this.element).find('.map-holder'), 1, { y: '20px', delay: delay});
                        $(this.element).addClass('animation-finished');
                      }
                    }
                },
                offset: '70%'
              })
        });
    }); 
    */
});