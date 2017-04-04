var connect = require('connect');
var connect_query = require('connect-query')
var wechat = require('wechat');

var config = {
  token: '',
  appid: '',
  encodingAESKey: '',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

var app = connect();
app.use(connect_query());

app.use('/itemList', (req, res) => {
  res.send("hello world")
})

app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  console.log(message);
  if (message.Content === 'tu') {
    // 回复图文消息
    res.reply([
      {
        title: 'tututuasdf',
        description: 'hahahahah.....',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  } else if (message.Content === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.Content === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      music: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  } else {
    res.reply(message.Content)
  }
}));

let server = app.listen(3030)