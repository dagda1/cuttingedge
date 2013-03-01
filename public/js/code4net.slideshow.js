/*
 *  Code4Net.slideshow.js is jQuery plugin created in order 
 *  to simplify creation of slide show galleries for web
 *  
 *  Copyright 2011 Milan Jovanovic
 *  Licensed under the GPL Version 2 licenses <http://www.gnu.org/licenses/>
 *
 *  Release date: Mon Oct 31 2011
 *
*/
(function($){
    var methods = {
      init: function(options){
          return this.each(function(){
                var scope = $(this),
                    data = scope.data('code4netslideshow');
                   
                data = {
                    'navigation' : [{
                        'id' : 'code4netslideshow-nav',
                        'type' : 'bullet'           //bullet/arrow
                    }],
                    'slideInterval' : 5,            //sec
                    'pauseInterval' : 10,           //sec
                    'scrollSpeed' : 'slow',         //slow/fast
                    'type' : 'horizontal',          //horizontal/vertical/fade
                    'autoSlide' : true
                };   
                
                var internal = {
                    'isPaused' : false,
                    'pausedOn' : 0,
                    'isLocked' : false,
                    'direction' : 'next'           //prev/next
                };
                
                if(options)
                    $.extend(data, options);
                $.extend(data, internal);
                
                data.slideInterval *= 1000;         //convert intervals to milisecounds
                data.pauseInterval *= 1000;
                
                
                /**************************************************************/
                /* AUTO SLIDE                                                 */
                /**************************************************************/
                var autoSlide = function(){
                    if(!data.isLocked){
                        if(data.isPaused){
                            if(Date.parse(new Date()) - data.pausedOn < data.pauseInterval)
                                return true;
                            else
                                data.isPaused = false;
                        }
                        data.isLocked = true;
                                                
                        var _current = getCurrentSlide();
                        var _next = getNextSlide(_current);
                        updateNavigation(_next);
                        slideFromTo(_current, _next);
                    }                    
                    return true;
                };
                
                /**************************************************************/
                /* UPDATE NAVIGATION                                          */
                /**************************************************************/
                var updateNav = function(_navigation, _next){
                    if(_navigation)
                        switch(_navigation.type){
                            case 'bullet':{
                                markNextNavButton(_navigation, _next);        
                            }
                            break;
                            case 'arrow':{
                               updateNavArrows(_navigation, _next);     
                            }
                            break;
                        }    
                };
                var updateNavigation = function(_next){
                    if(data.navigation)
                        for(var i=0; i< data.navigation.length; i++)
                            updateNav(data.navigation[i], _next);                        
                };
                
                /**************************************************************/
                /* MARK NEXT NAV BUTTON                                       */
                /**************************************************************/
                var markNextNavButton = function(_navigation, _next){
                    
                    var _newBtn = $('#' + _navigation.id).children().first();
                    var _slide = _next;

                    while(_slide.prev().length > 0){
                        _newBtn = _newBtn.next();
                        _slide = _slide.prev();
                    }

                    markNavButton(_newBtn, _navigation);                                            
                };
                
                var isInt = function(n) {
                   return typeof n == 'number' && n % 1 == 0;
                }

                
                /**************************************************************/
                /* UPDATE NAV ARROWS                                          */
                /**************************************************************/
                var updateNavArrows = function(_navigation, _next){                    
                    if(_next.prev().length > 0){
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-prev').toggleClass(_navigation.id + '-prev', true);
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-prev').click(function(){slideNext('prev');});
                    }else{
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-prev').unbind('click');
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-prev').toggleClass(_navigation.id + '-prev', false);
                    }
                    
                    if(_next.next().length > 0){
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-next').toggleClass(_navigation.id + '-next', true);
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-next').click(function(){slideNext('next');});
                    }else{
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-next').unbind('click');
                        $('#' + _navigation.id + '').find('#' + _navigation.id + '-next').toggleClass(_navigation.id + '-next', false);
                    }
                };
                
                /**************************************************************/
                /* GET NEXT SLIDE                                             */
                /**************************************************************/
                var getNextSlide = function(_current){
                    var _next = null;
                    
                    if(_current.next().length == 0 && data.direction == 'next')
                        data.direction = 'prev';
                    else if(_current.prev().length == 0 && data.direction == 'prev')
                        data.direction = 'next';

                    if(data.direction == 'next')
                        _next = _current.next();
                    else
                        _next = _current.prev();
                       
                    return _next;
                };
                
                /**************************************************************/
                /* GET CURRENT SLIDE                                          */
                /**************************************************************/
                var getCurrentSlide = function(){
                    var _current = null;
                    var _position = null;
                    switch(data.type){
                        case 'vertical':{
                            _position = scope.children().first().position();
                            var _top = _position.top * (-1);

                            scope.children().first().children().each(function(){
                                var _pos = $(this).position();
                                if(_pos.top - 5 < _top && _top < _pos.top + 5)
                                    _current = $(this);
                            });
                        }
                        break;
                        case 'horizontal':{
                            _position = scope.children().first().position();
                            var _left = _position.left * (-1);

                            scope.children().first().children().each(function(){
                                var _pos = $(this).position();
                                if(_pos.left - 100 < _left && _left < _pos.left + 100)
                                    _current = $(this);
                            });
                            var foo = 'bar';
                        }
                        break;
                        case 'fade':{
                            _current = scope.children(':visible');
                        }
                        break;
                    }
                    return _current;
                };
                
                /**************************************************************/
                /* BUTTON NAV SLIDE TO                                        */
                /**************************************************************/
                var buttonSlide = function(_next){
                    if(!data.isLocked){
                        data.isLocked = true;
                        data.isPaused = true;
                        data.pausedOn = Date.parse(new Date());
                        var _current = getCurrentSlide();                        
                        updateNavigation(_next);
                        slideFromTo(_current, _next);
                    }
                };
                
                /**************************************************************/
                /* SLIDE NEXT                                                 */
                /**************************************************************/
                var slideNext = function(direction){
                    if(!data.isLocked){
                        data.isLocked = true;
                        data.isPaused = true;
                        data.pausedOn = Date.parse(new Date());
                        var _current = getCurrentSlide();
                        var _next = ((direction == 'prev')?_current.prev():_current.next());
                        data.direction = direction;
                        updateNavigation(_next);
                        slideFromTo(_current, _next);
                    }
                };
                
                /**************************************************************/
                /* MARK NAV BUTTON                                            */
                /**************************************************************/
                var markNavButton = function(btn, _navigation){
                    $('#'+ _navigation.id).children().each(function(){
                        $(this).toggleClass(_navigation.id + '-active', false);
                        
                    });
                    btn.toggleClass(_navigation.id + '-active', true);                    
                };
                
                /**************************************************************/
                /* SLIDE FROM TO                                              */
                /**************************************************************/
                var slideFromTo = function(from, to){
                    if(data.type == 'fade'){
                        from.fadeOut(
                            data.scrollSpeed, 
                            function(){
                                to.fadeIn(data.scrollSpeed, function(){data.isLocked = false;});
                            }
                        );
                    }else{     
                        var element = to;
                        
                        if(data.type == 'vertical'){
                            var top = 0;
                            while(element.prev().length > 0){
                                left += element.prev().outerWidth();
                                top += element.prev().outerHeight();
                                element = element.prev();
                            }
                            top = (top *(-1)) + 'px';
                            scope.children().first().animate(
                                {"top": top}, 
                                data.scrollSpeed, 
                                function(){
                                    scope.children().first().css('top', top);
                                    data.isLocked = false;
                                }
                            );
                        }else{
                        var left = 0;
                            while(element.prev().length > 0){
                                left += element.prev().outerWidth();
                                element = element.prev();
                            }
                            left = (left *(-1)) + 'px';
                            scope.children().first().animate(
                                {"left":  left},
                                data.scrollSpeed, 
                                function(){                                 
                                    scope.children().first().css('left', left);
                                    data.isLocked = false;
                                }
                            );
                        }
                    }                    
                };
                
                /**************************************************************/
                /* NAVIGATION INIT                                            */
                /**************************************************************/
                var initNavigation = function(_navigation){
                    switch (_navigation.type){
                        case 'bullet':{
                            scope.children().each(function(){
                                var slide = $(this);
                                $('#'+_navigation.id).append('<a />');
                                $('#'+_navigation.id).children().last().click(function(){
                                    buttonSlide(slide);
                                });
                            });
                            $('#'+_navigation.id).children().first().toggleClass(_navigation.id + '-active', true);
                        }
                        break;
                        case 'arrow':{
                            $('#' + _navigation.id + '').append('<div id="' + _navigation.id + '-prev" class="' + _navigation.id + '-prev-empty"></div>');
                            $('#' + _navigation.id + '').append('<div id="' + _navigation.id + '-next" class="' + _navigation.id + '-next ' + _navigation.id + '-next-empty"></div>');
                            $('#' + _navigation.id + '').find('#' + _navigation.id + '-next').click(function(){slideNext('next');});    
                        }
                    }
                };
                
                if(data.navigation)
                    for(var i=0; i< data.navigation.length; i++)
                        initNavigation(data.navigation[i]);  
                
                /**************************************************************/
                /* WRAP & ARANGE SLIDES                                       */
                /**************************************************************/                
                var wrapper = null;
                switch(data.type){
                    case 'vertical':{
                        var height = 0;
                        scope.children().each(function(){                           
                           height += $(this).outerHeight(true);
                           $(this).css('display', 'block').css('position', 'relative');
                           
                        });
                        wrapper = document.createElement('div');
                        
                        $(wrapper).height(height + 'px');
                        $(wrapper).height(scope.height() + 'px');
                        $(wrapper).css('position', 'relative');
                        $(wrapper).css('left', '0');
                        $(wrapper).css('top', '0');
                        
                        scope.children().wrapAll(wrapper);    
                    }
                    break;
                    case 'horizontal':{
                        var width = 0;
                        scope.children().each(function(){                           
                           width += $(this).outerWidth(true);
                           $(this).css('float', 'left').css('position', 'relative');
                        });
                        wrapper = document.createElement('div');
                        
                        $(wrapper).width((width) + 'px');
                        $(wrapper).height(scope.height() + 'px');
                        $(wrapper).css('position', 'relative');
                        $(wrapper).css('left', '0');
                        $(wrapper).css('top', '0');
                        
                        
                        scope.children().wrapAll(wrapper);
                    }
                    break;
                    case 'fade':{
                        scope.children().each(function(){
                           $(this).css('display', 'none');
                        });    
                        scope.children().first().css('display', 'block');
                    }
                    break;
                }
                
                /**************************************************************/
                /* START SLIDE SHOW                                           */
                /**************************************************************/    
                if(data.autoSlide)
                    scope._slideInterval = setInterval(autoSlide, data.slideInterval);
          });
      }  
    };
    
    $.fn.code4netslideshow = function(method) {    
        if ( methods[method] ) {
          return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.code4netslideshow' );
        }      
  };
})( jQuery );