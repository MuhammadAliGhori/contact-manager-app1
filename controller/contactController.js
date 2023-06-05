// Controller for ALl Process
const asyncHandler = require("express-async-handler")

// Schema model
const Contact =  require("../models/contactModel")


// Get All Contacts
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find()
  console.log(JSON.stringify(contact))
    return res.status(200).json(contact);
  })

  //  Craete All Contacts
const createContacts = asyncHandler(async (req, res) => {
    const {name, mail, phone} = req.body
    console.log("there is an message from ", req.body, name, mail , phone);
    if(!name || !mail || !phone){
      res.status(400)
      throw new Error("All fields need to be filled !")
    }
    console.log("there is an message from ", name, mail , phone);
    const contact = await Contact.create({
      name,
      mail,
      phone 
    })
    res.status(201).json(contact);
  })

  // Get individual Contacts
  const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get Individual for ${req.params.id} => The economy of Pakistan is classified as a low income developing economy. It is the 23rd-largest in terms of GDP based on purchasing power parity (PPP). In 2021, the country had a population of 227 million people. As of FY22, the nominal GDP of Pakistan stands at US$376 billion with a nominal GDP per capita of US$1,658 (177th); its GDP based on PPP stands at US$1.512 trillion with a GDP (PPP) per capita of US$6,662 (168th).[4]\n\nIn the formative decades of Pakistan, the economy was largely based on private industries. Nationalisation of significant portion of the sector including financial services, manufacturing and transportation had begun in the early 1970s. With the beginning of Zia-ul Haq's regime in the 1980s, a more \"Islamic\" economy was adopted which outlawed economic practices forbidden in Sharīʿah and mandated traditional religious practices instead. Although, the economy began to privatise in the 1990s.\n\nPakistan was classified as a semi-industrial economy for first time in late 1990s albeit an underdeveloped country[34] with heavy dependence on agriculture, textile industry being dependent on cotton production.[35][36][37] Primary export commodities include textiles, leather goods, sports equipment, chemicals, and carpets/rugs.[38][39]\n\nPakistan is currently undergoing a process of economic liberalization, including the privatization of all government corporations, which is aimed at attracting foreign investment and decreasing budget deficits.[40] However, the country continues to face the challenges of rapidly growing population, high illiteracy, corruption, political instability, a hostile neighborhood and heavy foreign debt.\n\nFalling low on budgets for paying interest on its debt, Pakistan has been facing an economic crisis since 2022. Amid adverse effects of ongoing Russo-Ukrainian War, Pakistan has been facing shortage in supply and high inflation in prices of food, oil, gas and electricity. The crisis has led to sharp deappreciation of Pakistani ruppee and downgrading of country's credit ratings by various agencies which has further increased the possibility of default.` });
  })

//   Update Contacts
const updateContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Data for ${req.params.id}` });
  })


  //   Delete Contacts
const deleteContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Data for ${req.params.id}` });
  })


  

module.exports = { getContacts, createContacts, getContact, updateContacts, deleteContacts }
