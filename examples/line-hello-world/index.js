const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const bot = new LineBot({
  channelSecret: '51b00aae9d2092bbd8919e6ed0a5eb13
',
  accessToken: 'mAUVpHo5RJppPWehVF3MejFvRxX3CArVmoXylauDuemqRdW4L1HHuPbyu0u0WEhmscStQXGiNsKQo+Z66cUe6EC4rPH9ADrqBPatEgeysqYlgtCX5dEEYNUresrHcr+RSYS8bBCh+uQ6DUtY2UVjnQdB04t89/1O/w1cDnyilFU=
',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
