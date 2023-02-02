// create a tool tip class to display tool tip when click on info button
class Tooltip {
  
}
// create class for one single project item in the list.
class ProjectItem{
  // creating constuctor with id since it is the one one passed down there/.
constructor(id, updateProjectListFunction ){
  this.id = id;
  this.updateProjectListHandler = updateProjectListFunction;
  this.connectMoreInfoButton();
  this.connectSwitchButton();
}
// in project item we are going to add eventListerners to the buttons
connectMoreInfoButton(){

}
connectSwitchButton(){
const projectItemElement = document.getElementById(this.id);
// to get the add button
const finishProjectBtn = projectItemElement.querySelector('button:last-of-type');
finishProjectBtn.addEventListener('click',this.updateProjectListHandler )
}

}
// create class for projects of one box
class ProjectList{
// the initial array of project list in a particular box
projects = []
constructor(type){
  this.type = type;
// now we are going to get the list of items in the particular box
//which is in the end the three projects in general
const projItems = document.querySelectorAll(`#${type}-projects li`)
// we are going to use for each project in the list of project to get the id
projItems.forEach((projItem) =>{
  // we are goin to get the id but from the class projectItem by instatiating it.
  const projId = new ProjectItem(projItem.id,this.removeFinishedProject.bind(this));
  this.projects.push(projId);
})
console.log(this.projects);
}

// add a new method to switch the process
setSwitchHandlerFunction (switchHandlerFunction){
  this.switchHandler = switchHandlerFunction;

}
// add a method to receive the finished projects

addFinishedProject(){

}

// we are going to add a method to remove the project from the list once finished to the finished box
removeFinishedProject(projectId){ 
  // we are going to use the filter method to only remain with the done project
  // this can be done by using either filter method or splice
  // const projectInde = this.projects.findIndex(p => p.id === projectId)
  // this.projects.slice(projectInde, 1)
  // however a shorter way is to use the filter method remember we want the filtered array
  // to be stored again in the projects array
  this.switchHandler(this.projects.find(p => p.id === projectId))
  this.projects = this.projects.filter(p => p.id !== projectId);
}

}
/// create class to manage the whole application overall.
class App{
static init(){
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')
activeProjectList.setSwitchHandlerFunction(finishedProjectList.addFinishedProject.bind(finishedProjectList));
finishedProjectList.setSwitchHandlerFunction(activeProjectList.addFinishedProject.bind(activeProjectList));
 
}
}
App.init();