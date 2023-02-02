// create a tool tip class to display tool tip when click on info button
class Tooltip {
  
}
// create class for one single project item in the list.
class ProjectItem{
  // creating constuctor with id since it is the one one passed down there/.
constructor(id){
  this.id = id;
}
}
// create class for projects of one box
class ProjectList{
// the initial array of project list in a particular box
projects = []
constructor(type){
// now we are going to get the list of items in the particular box
//which is in the end the three projects in general
const projItems = document.querySelectorAll(`#${type}-projects li`)
// we are going to use for each project in the list of project to get the id
projItems.forEach((projItem) =>{
  // we are goin to get the id but from the class projectItem by instatiating it.
  const projId = new ProjectItem(projItem.id);
  this.projects.push(projId);
  console.log(projId);
})


}

}
/// create class to manage the whole application overall.
class App{
static init(){
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')
}
}
App.init();