var twilio = require('twilio')

var accountId = 'ACcb3a4dadb0c74b091740f68f698854a0'
var accountToken = '7c19be9379a40b677d46366d73894a29'

var client = twilio(accountId, accountToken)
var INTERVAL = 10000 // 10 seconds

var count = 0

var call = function() {
  return client.calls.create({
    url: 'https://demo.twilio.com/welcome/voice/',
    to: '+14234020972',
    from: '+17546665119'
  }, function (err, res) {
    if (err) return console.error(err)
    count++
    console.log('number ', count, 'status: ', res.status)
  })
}

call()
setInterval(call, INTERVAL)

