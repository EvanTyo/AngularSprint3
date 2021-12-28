module.exports = db => {
  const frida = db.people.insert({name: 'Frida Kuvalis'})
  const demarcus = db.people.insert({name: 'Demarcus Mayer'})
  const baron = db.people.insert({name: 'Baron Fisher'})
  const bridgette = db.people.insert({name: 'Bridgette Murphy'})

  db.meetings.insert({
    person1_id: frida.id,
    person2_id: demarcus.id,
    comment: "It was a great meeting.  We learned a lot."
  })

  db.meetings.insert({
    person1_id: baron.id,
    person2_id: frida.id,
    comment: "Sent over the pricing sheets"
  })

  db.meetings.insert({ 
    person1_id: baron.id,
    person2_id: bridgette.id,
    comment: "A great time was had by all"
  })
}
