# silf-nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Snippets

```js
// Used to recover original data from website (http://www.silvain.org/)
// Open an artworklist page an paste this code to the browser's console
function getArtworksData() {
    var res = [];
    $('.SSSlide.clip_frame').each(function(i,e){
        var image = e.querySelector('img');
        var caption = $('.SSSlideCaption')[i];
        var thumbnail = $('.SSSlideLink img')[i];
        var data = {
            image: image.dataset.src.split('?')[0].replace('http://www.silvain.org', '').replace('images/', ''),
            thumb: thumbnail.dataset.museSrc.split('?')[0].replace('http://www.silvain.org', '').replace('images/', ''),
            width: parseInt(image.dataset.width),
            height: parseInt(image.dataset.height),
            title: caption.querySelector('p').innerText,
            description: (function(){
                var d = '';
                caption.querySelectorAll('p').forEach(function(e,i,a){
                    if (i > 0 && e.innerText.length > 1) d += e.innerText;
                    if (i < (a.length-1)) d+= '<br/>';
                });
                // before returning value, we could remove all leading <br>
                return d;
            })(),
        };

        res.push(data);
    });
    return res;
}

// get data from page's DOM
var a = getArtworksData();

// export response to the clipboard
copy(a);

// now just paste to a new json document file ;)
```

```javascript
// recover artwork images url (download with jdownloader)
function getArtworksData() {
    var res = [];
    $('.SSSlide.clip_frame').each(function(i,e){
        var image = e.querySelector('img');
        res.push( 'http://www.silvain.org/' + image.dataset.src.split('?')[0] );
    });
    return res;
}
copy(getArtworksData());

```

```javascript
// Download exhibition slideshow data (artist/solo &artist/group)
function getData(){

    var response = [];
    var text = ''

    $('.TabbedPanelsWidget').each(function(i,el){

        var tabs = el.querySelectorAll('.TabbedPanelsTab');
        var panels = el.querySelectorAll('.TabbedPanelsContent div:last-child');

        // As we need a single file for each slide we separate them into a new array
        response.push([]);

        tabs.forEach(function(tab, j){
            response[i].push({
                title: tab.innerText.trim(),
                content: panels[j].innerText.trim()

            });

            text += '## ' + tab.innerText.trim();
            text += "\n\n" + panels[j].innerText.trim() + "\n\n";
        });

    });
    
    return text;

}
console.log(getData());
copy(getData());
```
