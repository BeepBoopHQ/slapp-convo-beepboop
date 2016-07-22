Beep Boop Conversation Store for a Slackapp
===========================================

This is an implementation of the conversation store interface for a
[slackapp](https://github.com/BeepBoopHQ/slackapp-js) for Slack apps running on
[Beep Boop](https://beepboophq.com).

## Install

```
npm install --save slackapp-convo-beepboop
```

## Use

```
const BeepBoopConvoStore = require('slackapp-convo-beepboop')

var slackapp = new SlackApp({
  convo_store: new BeepBoopConvoStore(),
})
```

Optionally pass an options object to the `BeepBoopConvoStore` constructor.

The following options are supported
- `debug` boolean`
- `logger` - defaults to null - Should be an object w/ a debug and error function.
- `provider` - `beepboop` (default) or `memory`. If set to `beepboop`, will also fallback to `memory`
   if config cannot be inferred and not running on Beep Boop

When running on Beep Boop all of the configuration for the store is handled automatically.
