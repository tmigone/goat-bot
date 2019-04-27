let BLESSING_IMAGES = [
  'https://i2-prod.mirror.co.uk/incoming/article13260478.ece/ALTERNATES/s1200/0_La-Liga-Santander-FC-Barcelona-v-Alaves.jpg',
  'https://cache.emirates247.com/polopoly_fs/1.554334.1452548046!/image/image.jpg'
]

let GOAT_IMAGES = [
  'https://i.ytimg.com/vi/eN67WhWz4Q8/maxresdefault.jpg'
]

exports.data = (req, res) => {
  res.json({
    name: 'Lionel',
    surname: 'Messi'
  })
}

exports.blessing = (req, res) => {
  let userId = getUserId(req.body.text) || `<@${req.body.user_id}>`
  res.json({
    text: `🌟 ${userId} 🌟 was blessed by 🏆⚽🐐Lio Messi 🐐⚽🏆, enjoy the magic!`,
    attachments: [ { image_url: getRandomImage(BLESSING_IMAGES) } ]
  })
}

// Auxiliary functions
function getRandomImage (array) {
  return array[ Math.floor(Math.random() * array.length) ]
}

function getUserId (slackText) {
  try {
    let param = slackText.split(' ')[ 0 ]
    let user = param.match(/^<@.*>$/g)
    return user[ 0 ]
  } catch (error) {
    return null
  }
}
