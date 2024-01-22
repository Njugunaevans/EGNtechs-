const servicesButtons=document.querySelectorAll(".service_item");
const  serviceDetails=document.querySelectorAll(".services_right");

const getservice=(category)=>{
    const details=servicedata.find(item => item.category===category);
    serviceDetails.innerHTML= <h3>${details.title}
    {details.description.map(paragraph => "<p>" + paragraph+ "</p>").join("")} </h3>
    
}
const removeActiveClass=() =>{
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    });
}
servicesButtons.forEach(item=> {
    item.addEventListener("click",() =>{
        removeActiveClass();
      const serviceclass=item.classList[1]  
       getservice(serviceclass)
       item.classList.add('active')
    })
})
getservice('frontend')
 