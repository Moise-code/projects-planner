// create a tool tip class to display tool tip when click on info button
class Tooltip {
  
}
// create class for one single project item in the list.
class ProjectItem{

}
// create class for projects of one box
class ProjectList{
// the initial array of project list in a particular box
projects = []

constructor(type){ 
  // now we are going to get the list of projects on both sides
  const projItems = document.querySelectorAll(`#${type}-projects li`);
 // now lets use for each to get ids in the projectItems
 projItems.forEach((projId) =>{
   this.projects.push(new ProjectItem(projId.id));
 })
 console.log(this.projects)

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