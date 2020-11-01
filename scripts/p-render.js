// declare variables
var option = document.querySelector('.type-pick');
var sortby = document.querySelector('p.picked');
var filterby;
var view = document.querySelector('svg.picked');
var filtered = projects;

// handles choosing sort, filter, and view
function chooseOption(type, pick) {
  switch (type) {
    // select a type of option
    case 'title':
      // if an option was selected, remove picked class from that option
      if (option) {
        option.classList.remove('type-pick');
        const oldid = option.innerHTML.toLowerCase() + 's';
        document.querySelector(`.${oldid}`).classList.remove('shown');
      }
      // add picked class to picked option
      option = pick;
      pick.classList.add('type-pick');
      const typeid = pick.innerHTML.toLowerCase() + 's';
      document.querySelector(`.${typeid}`).classList.add('shown');
      
      break;
    // select what to sort by
    case 'sort':
      // if something was selected, remove its class
      if (sortby) sortby.classList.remove('picked');
      // add the class to this selection
      sortby = pick;
      pick.classList.add('picked');

      // reload (sorts projects)
      reloadProjects();
      
      break;
    // choose what to filter by
    case 'filter':
      // if another option was selected, remove its class
      if (filterby) {
        // if option is selected this time, remove class and do nothing
        if (filterby === pick) {
          filterby = undefined;
          pick.classList.remove('picked');
          filtered = projects;
          reloadProjects();
          return;
        }
        filterby.classList.remove('picked');
      }
      // add class to indicate it's selected
      filterby = pick;
      pick.classList.add('picked');

      // filter projects and reload
      const propFilter = filterby.innerHTML.toLowerCase();
      filtered = projects.filter(p => p.category == propFilter);
      reloadProjects();
      
      break;
    // choose the view for projects
    case 'view':
      // if another view was selected, remove its class
      if (view) view.classList.remove('picked');
      // set view to this pick and add class
      view = pick;
      pick.classList.add('picked');
      
      let changeTo = pick.id.slice(0, 4);
      if (changeTo.slice(-2, -1) == 'a') changeTo += 'ked';
      document.getElementById('projects').className = 'view-' + changeTo;

      break;
  }
}


// sorting function
function sortProjects(propSort) {
  filtered.sort((a, b) => {
    const aYear = a[propSort].slice(6, a[propSort].length);
    const bYear = b[propSort].slice(6, b[propSort].length);
    const yearComp = compare(aYear, bYear);
    if (yearComp != 0) return yearComp;
    
    const aMonth = a[propSort].slice(0, 2);
    const bMonth = b[propSort].slice(0, 2);
    const monthComp = compare(aMonth, bMonth);
    if (monthComp != 0) return monthComp;
    
    const aDay = a[propSort].slice(3, 5);
    const bDay = b[propSort].slice(3, 5);
    const dayComp = compare(aDay, bDay);
    return dayComp;
  });
}

function compare(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}



/*
  inject projects
*/

var maxLoad = 10;
var loadedCount = -1;
const allProjects = document.getElementById('projects');

function loadProjects() {

  for (let i = 0; i < maxLoad; i++) {
    if (loadedCount+1 >= filtered.length) {
      document.getElementById('loadmore').style.display = 'none';
      return;
    }

    const project = document.createElement('div');
    const title = document.createElement('h2');
    const category = document.createElement('h4');
    const desc = document.createElement('p');
    const link = document.createElement('a');
    const img = document.createElement('img');
    project.classList.add('project');
    
    title.innerHTML = filtered[loadedCount+1].title;
    category.innerHTML = filtered[loadedCount+1].category.toUpperCase();
    desc.innerHTML = filtered[loadedCount+1].desc;
    link.href = filtered[loadedCount+1].link;
    img.src = "../" + filtered[loadedCount+1].img;
    
    link.target = '_blank';
    link.appendChild(img);
    project.appendChild(title);
    project.appendChild(category);
    project.appendChild(desc);
    project.appendChild(link);

    allProjects.appendChild(project);

    loadedCount++;
  }

}

// reset loaded projects and reload
function reloadProjects() {
  loadedCount = -1;
  if (maxLoad < filtered.length) {
    document.getElementById('loadmore').style.display = '';
  }

  // remove existing loaded projects
  while (allProjects.firstChild) {
    allProjects.removeChild(allProjects.firstChild);
  }
  
  // sort porjects
  sortProjects( sortby.id );

  // load projects again
  loadProjects();
}

reloadProjects();