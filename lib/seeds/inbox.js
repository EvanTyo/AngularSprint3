module.exports = (db) => {

  const messages = [
    {
      "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
      "read": false,
      "starred": true,
      "labels": ["dev", "personal"],
      "body": "Hey, it's Virginia Mosby,\n\nThe littlest thing can cause a ripple effect that changes your life.",
    },
    {
      "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
      "read": false,
      "starred": false,
      "labels": [],
      "body": "Hey, it's Penny Mosby,\n\nThat’s life, you know, we never end up where you thought you wanted to be.",
    },
    {
      "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
      "read": false,
      "starred": true,
      "labels": ["dev"],
      "body": "Hey, it's Claudia Grice,\n\nThere are a lot of little reasons why the big things in our lives happen.",
    },
    {
      "subject": "We need to program the primary TCP hard drive!",
      "read": true,
      "starred": false,
      "labels": [],
      "body": "Hey, it's Gary Blauman,\n\nDefinitions are important.",
    },
    {
      "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
      "read": false,
      "starred": false,
      "labels": ["personal"],
      "body": "Hey, it's Gary Blauman,\n\nWe’re going to get older whether we like it or not, so the only question is whether we get on with our lives, or desperately cling to the past.",
    },
    {
      "subject": "We need to back up the wireless GB driver!",
      "read": true,
      "starred": true,
      "labels": [],
      "body": "Hey, it's Brad Morris,\n\nBecause sometimes even if you know how something’s gonna end that doesn’t mean you can’t enjoy the ride.",
    },
    {
      "subject": "We need to index the mobile PCI bus!",
      "read": true,
      "starred": false,
      "labels": ["dev", "personal"],
      "body": "Hey, it's Robin Scherbatsky,\n\nLook, you can’t design your life like a building. It doesn’t work that way. You just have to live it… and it’ll design itself.",
    },
    {
      "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
      "read": true,
      "starred": true,
      "labels": [],
      "body": "Hey, it's Bilson,\n\nThe future is scary but you can’t just run back to the past because it’s familiar.",
    }
  ]

  messages.forEach(message => db.messages.insert(message))

}
