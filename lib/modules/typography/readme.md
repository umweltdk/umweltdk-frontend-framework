
Change typographic weights, styles, and alignment with these utility styles.

## Adobe Typekit
```js
(function(d) {
  var config = {
    kitId: 'bjn2gfu',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
```

## Utilities

```html
<p class="bold">Bold</p>
<p class="regular">Regular</p>
<p class="italic">Italic</p>
<p class="caps">Caps</p>
<p class="left-align">Left align</p>
<p class="center">Center</p>
<p class="right-align">Right align</p>
<p class="justify">Justify Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
<p class="nowrap">No wrap</p>
<p class="underline">Underline</p>
<p class="truncate">Truncate</p>
<p class="font-family-inherit">Font Family Inherit</p>
<p class="font-size-inherit">Font Size Inherit</p>
<a class="text-decoration-none">Text Decoration None</a>
```

## Lists

To remove default list styling, use `.list-reset`.

```html
<ul class="list-reset">
  <li>List Reset</li>
  <li>Removes bullets</li>
  <li>Removes numbers</li>
  <li>Removes padding</li>
</ul>
```

To set lists inline, use utilities.

```html
<ul class="list-inline">
  <li>Half-Smoke</li>
  <li>Kielbasa</li>
  <li>Bologna</li>
  <li>Prosciutto</li>
</ul>
```
