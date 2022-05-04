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
