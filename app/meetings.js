const express = require('express')
const router = express.Router()
const db = require('../lib/db')
const linker = require('../lib/linker')

router.get('/people/:personId/meetings', (req, res, next) => {
  const meetings = db.meetings
    .findAll()
    .filter(withParticipant(req.params.personId))

  res.json(meetings)
})

router.post('/people/:personId/meetings', (req, res, next) => {
  const meeting = db.meetings.insert({
    person1_id: parseInt(req.params.personId, 10),
    person2_id: parseInt(req.body.otherPersonId, 10),
    comment: req.body.comment,
  })

  res.json(meeting)
})

function withParticipant(personId) {
  personId = parseInt(personId, 10)
  return function(meeting) {
    return meeting.person1_id === personId || meeting.person2_id === personId
  }
}

module.exports = router
