# error-replacer

Drop this into the `replacer` argument in JSON.stringify and you will get meaningful JSON serialization of Error objects.

```javascript
const errorReplacer = require('error-replacer');

// basicsOnly - say true (default) if you only want Error type and message, no stack or file details
JSON.stringify(something, errorReplacer(basicsOnly));
```
