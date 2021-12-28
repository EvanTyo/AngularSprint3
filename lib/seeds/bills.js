module.exports = db => {
    const bills = [
      {
        "title": "Car Insurance",
        "description": "Progressive",
        "dueDate": "2022-01-10",
        "amount": 225,
        paid: false
      },
      {
        "title": "Rent",
        "description": "Condo Association",
        "dueDate": "2021-12-31",
        "amount": 1175,
        paid: false
      },
      {
        "title": "Phone",
        "description": "Verizon Wireless",
        "dueDate": "2022-01-15",
        "amount": 80,
        paid: true
      },
      {
        "title": "Sewage",
        "description": "Condo Association",
        "dueDate": "2022-03-12",
        "amount": 140,
        paid: false
      },
      {
        "title": "Internet",
        "description": "Verizon Fios",
        "dueDate": "2022-01-05",
        "amount": 50,
        paid: true
      }
    ]
  
    bills.forEach(bill => db.bills.insert(bill))
  }