

(function($, window){
    'use strict';

    var  Sparkline = {};
    Sparkline.config = function(setting){
        if(setting.coll <= 0){
            console.log("Error");
            return
        }
        this.coll = setting.coll;
        this.interval = setting.interval
    }

    Sparkline.addCollection = function (sections) {
      var i = Sparkline.coll,
          array = [];
        do {
            i--;
            var div = document.createElement('div');
            div.className ="box_units-unit";
            $(div).append('<p></p>')
            if(i == 0){
                $(div).addClass('end');
            }
            array.push(div)
        } while (i >= 1);
        sections.children().remove();

        function ArrayElements(element) {
            sections.append(element)

        }
       return array.forEach(ArrayElements)
    }


    Sparkline.addIntervals = function (sections) {
     var $widthAll =  sections.height();
        sections.children().each(function () {
            $(this).height($widthAll*Sparkline.interval[Sparkline.interval.length-1]/100)
            $(this).data('interval', Sparkline.interval[Sparkline.interval.length-1])
        })

    }



    var oldGlobalVar = window.Sparkline;

    Sparkline.noConflict = function () {
        if (window.Sparkline === Sparkline) {
            window.Sparkline = oldGlobalVar;
        }
        return Sparkline;
    };
    window.Sparkline = Sparkline;



    $.fn.responsiveBlock = function(){

        Sparkline.addCollection($(this));
        Sparkline.addIntervals($(this));

        $(this).find(':last-child').addClass('addHover')
        var make = function(){
            $(this)
                .on('mouseenter', events._addClassHover.bind(events, $(this)))
                .on('mouseleave', events._removeHover.bind(events, $(this)))
        }
        return $(this).children().each(make);
    };


    var events = {
        _addClassHover: function(e) {
            e.addClass('addHover')
                .not('.end')
                .parent()
                .find(':last-child')
                .removeClass('addHover');
            e.children().addClass('popup');
            e.find('p').text(e.data('interval'))



        },
        _removeHover:  function(e) {
            e.removeClass('addHover')
                .parent()
                .find(':last-child')
                .addClass('addHover');
            e.children().removeClass('popup');
            e.find('p').text('')
        }
    }


    $.fn.addDataSparkline = function () {
      var arr = [].slice.call(arguments),
          $width =  $(this).height(),
          coll = [];
        $(this).children().map(function(index,elem) {
            coll.push(elem)
          });
        coll.reverse();
        var make = function(index) {
            $(this).height(($width*arr[index]/100) + 'px')
            $(this).data('interval', arr[index])
        }
        return  $(coll).each(make)
    }
})(jQuery, window);

//-------------------------------------------------------------------------------
//настраиваем количество колонок и интервал искрографик
Sparkline.config({
    coll: 12,
    interval: [0, 100]
})
//устанавливаем на div
$('.box_units').responsiveBlock();
//привер добавление данных
$('.box_units:eq(0)').addDataSparkline(100,80,90,70,75,80,70,80,90,70,80,100);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4oZnVuY3Rpb24oJCwgd2luZG93KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgIFNwYXJrbGluZSA9IHt9O1xuICAgIFNwYXJrbGluZS5jb25maWcgPSBmdW5jdGlvbihzZXR0aW5nKXtcbiAgICAgICAgaWYoc2V0dGluZy5jb2xsIDw9IDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sbCA9IHNldHRpbmcuY29sbDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldHRpbmcuaW50ZXJ2YWxcbiAgICB9XG5cbiAgICBTcGFya2xpbmUuYWRkQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChzZWN0aW9ucykge1xuICAgICAgdmFyIGkgPSBTcGFya2xpbmUuY29sbCxcbiAgICAgICAgICBhcnJheSA9IFtdO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID1cImJveF91bml0cy11bml0XCI7XG4gICAgICAgICAgICAkKGRpdikuYXBwZW5kKCc8cD48L3A+JylcbiAgICAgICAgICAgIGlmKGkgPT0gMCl7XG4gICAgICAgICAgICAgICAgJChkaXYpLmFkZENsYXNzKCdlbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFycmF5LnB1c2goZGl2KVxuICAgICAgICB9IHdoaWxlIChpID49IDEpO1xuICAgICAgICBzZWN0aW9ucy5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIEFycmF5RWxlbWVudHMoZWxlbWVudCkge1xuICAgICAgICAgICAgc2VjdGlvbnMuYXBwZW5kKGVsZW1lbnQpXG5cbiAgICAgICAgfVxuICAgICAgIHJldHVybiBhcnJheS5mb3JFYWNoKEFycmF5RWxlbWVudHMpXG4gICAgfVxuXG5cbiAgICBTcGFya2xpbmUuYWRkSW50ZXJ2YWxzID0gZnVuY3Rpb24gKHNlY3Rpb25zKSB7XG4gICAgIHZhciAkd2lkdGhBbGwgPSAgc2VjdGlvbnMuaGVpZ2h0KCk7XG4gICAgICAgIHNlY3Rpb25zLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmhlaWdodCgkd2lkdGhBbGwqU3BhcmtsaW5lLmludGVydmFsW1NwYXJrbGluZS5pbnRlcnZhbC5sZW5ndGgtMV0vMTAwKVxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdpbnRlcnZhbCcsIFNwYXJrbGluZS5pbnRlcnZhbFtTcGFya2xpbmUuaW50ZXJ2YWwubGVuZ3RoLTFdKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cblxuICAgIHZhciBvbGRHbG9iYWxWYXIgPSB3aW5kb3cuU3BhcmtsaW5lO1xuXG4gICAgU3BhcmtsaW5lLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuU3BhcmtsaW5lID09PSBTcGFya2xpbmUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5TcGFya2xpbmUgPSBvbGRHbG9iYWxWYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNwYXJrbGluZTtcbiAgICB9O1xuICAgIHdpbmRvdy5TcGFya2xpbmUgPSBTcGFya2xpbmU7XG5cblxuXG4gICAgJC5mbi5yZXNwb25zaXZlQmxvY2sgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIFNwYXJrbGluZS5hZGRDb2xsZWN0aW9uKCQodGhpcykpO1xuICAgICAgICBTcGFya2xpbmUuYWRkSW50ZXJ2YWxzKCQodGhpcykpO1xuXG4gICAgICAgICQodGhpcykuZmluZCgnOmxhc3QtY2hpbGQnKS5hZGRDbGFzcygnYWRkSG92ZXInKVxuICAgICAgICB2YXIgbWFrZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZXZlbnRzLl9hZGRDbGFzc0hvdmVyLmJpbmQoZXZlbnRzLCAkKHRoaXMpKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBldmVudHMuX3JlbW92ZUhvdmVyLmJpbmQoZXZlbnRzLCAkKHRoaXMpKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCh0aGlzKS5jaGlsZHJlbigpLmVhY2gobWFrZSk7XG4gICAgfTtcblxuXG4gICAgdmFyIGV2ZW50cyA9IHtcbiAgICAgICAgX2FkZENsYXNzSG92ZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuYWRkQ2xhc3MoJ2FkZEhvdmVyJylcbiAgICAgICAgICAgICAgICAubm90KCcuZW5kJylcbiAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAuZmluZCgnOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWRkSG92ZXInKTtcbiAgICAgICAgICAgIGUuY2hpbGRyZW4oKS5hZGRDbGFzcygncG9wdXAnKTtcbiAgICAgICAgICAgIGUuZmluZCgncCcpLnRleHQoZS5kYXRhKCdpbnRlcnZhbCcpKVxuXG5cblxuICAgICAgICB9LFxuICAgICAgICBfcmVtb3ZlSG92ZXI6ICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnJlbW92ZUNsYXNzKCdhZGRIb3ZlcicpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLmZpbmQoJzpsYXN0LWNoaWxkJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FkZEhvdmVyJyk7XG4gICAgICAgICAgICBlLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ3BvcHVwJyk7XG4gICAgICAgICAgICBlLmZpbmQoJ3AnKS50ZXh0KCcnKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAkLmZuLmFkZERhdGFTcGFya2xpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXJyID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICR3aWR0aCA9ICAkKHRoaXMpLmhlaWdodCgpLFxuICAgICAgICAgIGNvbGwgPSBbXTtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLm1hcChmdW5jdGlvbihpbmRleCxlbGVtKSB7XG4gICAgICAgICAgICBjb2xsLnB1c2goZWxlbSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29sbC5yZXZlcnNlKCk7XG4gICAgICAgIHZhciBtYWtlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICQodGhpcykuaGVpZ2h0KCgkd2lkdGgqYXJyW2luZGV4XS8xMDApICsgJ3B4JylcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnaW50ZXJ2YWwnLCBhcnJbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAgJChjb2xsKS5lYWNoKG1ha2UpXG4gICAgfVxufSkoalF1ZXJ5LCB3aW5kb3cpO1xuXG5cblNwYXJrbGluZS5jb25maWcoe1xuICAgIGNvbGw6IDEyLFxuICAgIGludGVydmFsOiBbMCwgMTAwXVxufSlcblxuJCgnLmJveF91bml0cycpLnJlc3BvbnNpdmVCbG9jaygpO1xuXG4kKCcuYm94X3VuaXRzOmVxKDApJykuYWRkRGF0YVNwYXJrbGluZSgxMDAsODAsOTAsNzAsNzUsODAsNzAsODAsOTAsNzAsODAsMTAwKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
