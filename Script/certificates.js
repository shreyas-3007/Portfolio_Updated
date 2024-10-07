
onLoad();

function onLoad()
{
 
  displayCertificates();
 
}


function displayCertificates()
{
  let containerElement= document.querySelector('.main_container_cert');

  if(!containerElement){return;}


let innerHTML='';
certificates.forEach(item=>{
innerHTML+=`<a href="${item.links}" target="blank" class="link"><div class="cert_container">
<div class="title_container_cert">
  <div class="logo"><img src="${item.image}"
   alt="" class="company_logo"></div>
  <div class="title">${item.cert_name}</div>
</div>

<div class="cert_info">${item.cert_info}</div>

<div class="issue_date">Issue Date: ${item.issue_date}</div>
</div></a>

`
})
containerElement.innerHTML=innerHTML;

}