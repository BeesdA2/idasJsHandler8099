const { handleConsumeWebserviceAskAI } = require("../../../../Productie/askAI/js/consumeWebservice.js");


 

async function consumeAskAI  (req, res)  {
  
  let pythonPATH = req.query.pythonPATH;
  console.log('pythonPATH ' + pythonPATH);
  let pythonPGM  = req.query.pythonPGM;
  console.log('pythonPGM ' + pythonPGM);
  let pythonGUID   = req.query.pythonGUID;
  console.log('pythonGUID: ' +pythonGUID);
   //pythonPARMS is in JSON formaat
  let pythonPARMS  = req.query.pythonPARMS;
  
  
    




  var resolveWebservice =  await handleConsumeWebserviceAskAI(pythonPATH, pythonPGM, pythonGUID, pythonPARMS);
   
  let responseResolveWebservice = await resolveWebservice;
  
  return responseResolveWebservice;
  
};



module.exports = {
  consumeAskAI: consumeAskAI
  };