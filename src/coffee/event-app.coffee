new Vue
    el : '#events'
    data : 
        events : eventList
    mounted: ->
        console.log @.events
    filters : 
        dddd: (date) ->
            moment date 
                .format 'dddd'
        ll: (date) ->
            moment date 
                .format 'll'
        LT: (date) ->
            moment date 
                .format 'LT'