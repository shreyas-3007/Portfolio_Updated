displayProjects();
displayTags();

function displayProjects()
{
  let projectElement = document.querySelector(".main_container_about");
  if(!projectElement){return;}
  

  
  
  let innerHTML='';
  

  projects.forEach(item=>{
    innerHTML+=`<div class="project_container">
    
    <div class="title_container_about">

    <div class="logo"><img src="${item.image}"
    alt="" class="project_logo"></div>
    <div class="project_title">${item.title}</div>
  </div>
    <div class="porject_info">${item.info}</div>
    <div class="skills"> Related Tags : ${item.skills}</div> 
</div>
    `

    projectElement.innerHTML=innerHTML;

  });
}


function displayTags(itemId)
{
  let skillElement = document.querySelector(".tags");
  if(!skillElement){return;}
  skillElement.innerHTML= `<span >${itemId}</span>`

}



//<div class="title_container_about">${item.title}</div>