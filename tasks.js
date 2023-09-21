
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {


  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if (text === "hello\n") {
    console.log("Hello!");
  }
  else if(text.startsWith("hello")){
    hello(text);
  }
  else if (text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    listTasks();
  }else if (text.startsWith('add ')) {
    const taskToAdd = text.substring(4).trim();
    addTask(taskToAdd);
  }else if (text.startsWith('remove')) {
    const indexToRemove = parseInt(text.substring(7).trim()) - 1;
    removeTask(indexToRemove);
  }else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  text = text.replace('\n','').trim();
  const words = text.split(' ');
  const command = words[0];
  let name = words.slice(1).join(' ');
  console.log(`Hello ${name}`)
}
//  type "help" command to see the all comand u can use it 
function help (){
  console.log(`Available commands :
  hello 
  hello (name)
  exit
  quit
  help
  add
  remove
  list`)
};

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Marwa Kassha")
const tasks =[];
function listTasks() {
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('Task List:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    console.log(`Task "${task}" added.`);
  } else {
    console.log('Error: Please provide a task to add.');
  }
}
function removeTask() {
  if (tasks.length > 0) {
    const removedTask = tasks.pop();
    console.log(`Removed last task: "${removedTask}"`);
  } else {
    console.log('Error: No tasks available to remove.');
  }
}