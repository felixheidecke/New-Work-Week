$ '[data-href]'
    .click ->
        href = $(@).data 'href'
        name = $(@).text()
        window.open href, name

$ '[data-background]'
    .each ->
        image = $(@).data 'background'
        $(@)
            .removeAttr 'data-background'
            .css 'backgroundImage', "url(#{image})"