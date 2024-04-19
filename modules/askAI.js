// const { handleConsumeWebserviceAskAI } = require("../../../../Productie/askAI/js/consumeWebservice.js");


 // AskAi staat niet bij de Volvo dealers, dus even werkend gemaakt voor de dealers
 // Let op;  Op de Ontwikkelmachine moet dit aaangepast worden als je er mee wilt werken

async function consumeAskAI  (req, res)  {
  
  let pythonPATH = req.query.pythonPATH;
  console.log('pythonPATH ' + pythonPATH);
  let pythonPGM  = req.query.pythonPGM;
  console.log('pythonPGM ' + pythonPGM);
  let pythonGUID   = req.query.pythonGUID;
  console.log('pythonGUID: ' +pythonGUID);
   //pythonPARMS is in JSON formaat
  let pythonPARMS  = req.query.pythonPARMS;
  
  
  var d = new Date();
  var datetime = d.toLocaleString(); 
   
  console.log(datetime + ' consumeAskAI python path: ' +pythonPATH + ' python pgm: ' + pythonPGM +' python guid: ' + pythonGUID + ' python parms: ' +pythonPARMS );
 



   
  //var resolveWebservice =  await handleConsumeWebserviceAskAI(pythonPATH, pythonPGM, pythonGUID, pythonPARMS);
   
  //let responseResolveWebservice = await resolveWebservice;
  return true; 
  //return responseResolveWebservice;
  
};



module.exports = {
  consumeAskAI: consumeAskAI
  };