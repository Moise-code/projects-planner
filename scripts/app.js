// create a tool tip class to display tool tip when click on info button
class Tooltip {
  
}
// create class for one single project item in the list.
class ProjectItem{
  constructor(id){
    this.id = id
    this.connectSwitchConnector();
    this.connectMoreInfoButton();
  }
 connectSwitchConnector(){
  // we are now first targeting the projects element
  const projectItemElement = document.querySelector(this.id);
  const switchBtn = projectItemElement.querySelector('button:last-of-type');
  switchBtn.addEventListerner('click',)
   
 }
 connectMoreInfoButton(){

 }
}
// create class for projects of one box
class ProjectList{
// the initial array of project list in a particular box
projects = []

constructor(type){ 
  this.type = type;

  // now we are going to get the list of projects on both sides
  const projItems = document.querySelectorAll(`#${type}-projects li`);
 // now lets use for each to get ids in the projectItems
 projItems.forEach((projId) =>{
   this.projects.push(new ProjectItem(projId.id));
 })
 console.log(this.projects)

}

// create a switch handler method
setSwitchHandlerFunction(switchHandlerFunction){
  this.switchHandler = switchHandlerFunction;
}

// create method to add movie from the array of removed ones.

addProject(){

}

// create a  method to switch project away from array list
switchProject(projectId){
  // create a new variable to contain the spliced element in array
  // const projectIndex = this.projects.findIndex(p => p.id === projectId)
  // this.projects.splice(projectIndex, 1);
// another alternative is to use filter and keeps the valuated items
this.projects.filter(p => p.id !== projectId);
}
}
/// create class to manage the whole application overall.
class App{
 static init(){

  const activeProjectsList = new ProjectList('active');
  const finishedProjectsList = new ProjectList('finished');
  
  }
}
App.init();