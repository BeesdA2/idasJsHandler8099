//const { handleConsumeWebservicePython } = require("../../../../Productie/runPython/js/consumeWebservice.js");

// AskAi staat niet bij de Volvo dealers, dus even werkend gemaakt voor de dealers
 // Let op;  Op de Ontwikkelmachine moet dit aaangepast worden als je er mee wilt werken

var spawn = require('child_process').spawn;
const process = require('process');
 

async function consumePython  (req, res)  {
  
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
     
  console.log(datetime + ' consumePython python path: ' +pythonPATH + ' python pgm: ' + pythonPGM +' python guid: ' + pythonGUID + ' python parms: ' +pythonPARMS );
  

  //console.log('pathFile ' + pathFile);
  
  // console.log("--------------------START---------------------");


//console.log("Present working directory: " + process.cwd());
//process.chdir('/beesda2/python/test/marco/ai');
//   console.log("Updated working directory is: " + process.cwd());
       
var script = "/beesda2/python/test/marco/ai/createTranscriptFromAudioFile.py";



//const pythonProcess = spawn('/QOpenSys/pkgs/bin/python3.9', ['./createTranscriptFromAudioFile.py']);

//console.log("--------------------SPAWN---------------------");
//pythonProcess.stdout.on('data', (data) => {
  // console.log(`stdout: ${data}`);
  // return 'gelaagd';
 //});
  
//pythonProcess.stderr.on('data', (data) => {
  //  console.error(`stderr: ${data}`);
 //});
  
//pythonProcess.on('close', (code) => {
  //  console.log(`child process exited with code ${code}`);
 // });
   
    




  //var resolveWebservice =  await handleConsumeWebservicePython(pythonPATH, pythonPGM, pythonGUID, pythonPARMS);
   
  //let responseResolveWebservice = await resolveWebservice;
  
   return true;
  //return responseResolveWebservice;
  
};



module.exports = {
  consumePython: consumePython
  };