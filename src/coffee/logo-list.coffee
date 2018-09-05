$ '[data-href]'
    .click ->
        href = $(@).data 'href'
        name = $(@).text()
        window.open href, name

$ '[data-background]'
    .each ->
        image = $(@).data 'background'
        $(@).css 'backgroundImage', "url(#{image})"