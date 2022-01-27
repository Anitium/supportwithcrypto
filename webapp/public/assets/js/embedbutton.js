
let button = document.querySelector('script[buttonid="swc-donations"]');

window.swcEmbedButton = window.swcEmbedButton || function(creatorid) {
    const widget = '<div class="swc-donations">' + 
                      '<a style="border:none;background:none;padding:1px;margin:px;" target="_blank" ' + 
                        ` href="http://localhost:3000/${creatorid}?ref=embed_button">` + 
                            '<img src="http://localhost:3000/assets/img/embed-button.png"/>' + 
                      '</a>' + 
                    '</div>'
    return widget;
}

button && document.writeln(
  swcEmbedButton(
    button.attributes['creatorid'].value
  )
)