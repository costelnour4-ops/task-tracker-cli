const fs=require('fs');
const path=require('path');
const File_Path=path.join(__dirname,'task.json');

function readTasks(){
    try{
        if(!fs.existsSync(File_Path)){
            return [];
        }
        const data=fs.readFileSync(File_Path,'utf8');
        return JSON.parse(data);

    } catch(error){
console.error("Error reading tasks:", error.message);
        return [];
    }
    
}
function savetask(tasks){
    try{
        const data=JSON.stringify(tasks,null,4);
        fs.writeFileSync(File_Path,data,'utf8');
    } catch(error){
        console.error("Eroare la salvarea task-urilor:", error.message);
    }
    

}
function addtask(description){
    const tasks=readTasks();
    const newID=tasks.length>0? tasks[tasks.length-1].id +1:1;
    const newTask={
        id:newID,
        description:description,
        status:"to-do",
        createdAt:new Date().toLocaleString(),
        uptadetai:new Date().toLocaleString()
        
    };
    tasks.push(newTask);
    savetask(tasks);
    console.log(`Task adăugat cu succes! (ID: ${newID})`);
}
function deletetask(id){
    let tasks=readTasks();
    const deleteid=parseInt(id);
    const taskexist=tasks.find(t=> t.id ===deleteid);
    if (!taskexist) {
        console.log(`Eroare: Nu am găsit niciun task cu ID-ul ${deleteid}.`);
        return;
    }
    const listanoua=tasks.filter(t=>t.id!==deleteid);
    savetask(listanoua);
    console.log(`Task-ul cu ID-ul ${deleteid} a fost șters cu succes!`);
    
}
function updatetask(id,description){
    let tasks=readTasks();
    let updateid=parseInt(id);
    if(description="") 
    {
        console.log(`Eroare: Scrie numele la descriere`);
        return;
    }
    const taskexist=tasks.find(t=> t.id ===updateid);
    if(!taskexist){
        console.log(`Eroare: Nu am găsit niciun task cu ID-ul ${updateid}.`);
        return;
    }
    taskexist.description=description;

    taskexist.uptadetai=new Date().toLocaleString;
    savetask(tasks);

console.log(`Task-ul ${updateid} a fost actualizat cu succes!`);
}
function updatestatus(id,status){
    let tasks=readTasks();
    let updateid=parseInt(id);
    if(status!=="to-do"&&status!=="doing"&&status!=="done")
    {
         console.log(`Eroare: Input gresit`);
        return;
    }
    const taskexist=tasks.find(t=> t.id ===updateid);
    if(!taskexist){
        console.log(`Eroare: Nu am găsit niciun task cu ID-ul ${updateid}.`);
        return;
    }
    taskexist.status=status;
    taskexist.uptadetai=new Date().toLocaleString();
    savetask(tasks);
    console.log(`Task-ul ${updateid} a fost actualizat cu succes!`);
}
const args=process.argv.slice(2);
const command=args[0];
const argument =args[1];
const description=args[2];
switch(command){
    case "add":
    case   "addtask": addtask(argument);
        break;
    case "list":const lista_de_afisat = readTasks(); // Salvăm datele citite într-o variabilă
        if (lista_de_afisat.length === 0) {
            console.log("Lista este goală. Adaugă un task mai întâi!");
        } else {
            console.table(lista_de_afisat); // Afișăm variabila în care am salvat datele
        }
        break;
        case "delete":deletetask(argument);
        break;
        case "update":updatetask(argument,description);
        break;
        case "updatestatus":updatestatus(argument,description);
        break;
    default:
        console.log(`Comanda "${command}" nu este recunoscută.`);
}



