// create a tool tip class to display tool tip when click on info button
class Tooltip {
  
}
// create class for one single project item in the list.
class ProjectItem{

}
// create class for projects of one box
class ProjectList{
constructor(type){ 
  // now we are going to get the list of projects on both sides
  const projItems = document.querySelectorAll(`#${type}-projects li`);
  console.log(projItems);

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