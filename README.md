# Why using jquery in react😂?

Just for old-expreance using in morden workflow <br>
For example:<br>

### Javascript Easing

```javascript
//Can quikely control any elements binded with ref
$(someElemRef.current).show();
$(someElemRef.current).fadeIn();

//The code shows upon is not the point,this is the point:
//Easing Animation:
$({ opacity: 0, bkd: 0 }).animate(
  { opacity: 1, bkd: 2 },
  {
    duration: 200,
    easing: 'easeOutQuart',
    progress: function() {
      $(someElemRef.current).css('opacity', this.opacity);
      $(someElemRef.current).css('backdrop-filter', 'blur(' + this.bkd + 'px)');
    },
    complete: function() {
      $(someElemRef.current).css('opacity', this.opacity);
      $(someElemRef.current).css('backdrop-filter', 'blur(' + this.bkd + 'px)');
    },
  }
);

//Using throw this kind of "last century" code could allows u to do some RELLY quike codeing
```

In `animate()` function, I had put easing plugin inside, can using easing functions by animate() straightaway. <br>
Easing plugin comes from: <br>
`https://github.com/gdsmith/jquery.easing` <br>
Easing plugin usage: <br>
`https://www.cnblogs.com/yangpeixian/p/10919817.html`<br>

# jQuery usage

Jquery allows u to do more magic code <br>
`https://api.jquery.com/`<br>

# @bobliao/use-jquery-hook

`npm install @bobliao/use-jquery-hook`

`yarn add @bobliao/use-jquery-hook`

```javascript
import useJquery, { jQueryObject, isRunningInServer } from '@bobliao/use-jquery-hook';

(...)
  //Get jquery out of the box
  const $ = useJquery();

  //If you r using TypeScript
  const $:jQueryObject = useJquery();

  (...)
  //If u r using razzle or Next,Could allow you do this to get is the code running in server or client
  if(isRunningInServer){
    //running in server
  }else{
    //running in client
  }
  (...)

(...)

```

# SSR Suppored

This hook could run in SSR project without any `window undefined ERROR`.<br>
Even can determine the code is running in server side or client side,throw this:<br>

```javascript
import useJquery, {
  jQueryObject,
  isRunningInServer,
} from '@bobliao/use-jquery-hook';

if (isRunningInServer) {
  //running in server
} else {
  //running in client
}
```
