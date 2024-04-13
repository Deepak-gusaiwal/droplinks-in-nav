let inputCheckboxes = [...document.querySelectorAll(".menu >li > input[type='checkbox']")]
let innerInputCheckboxes = [...document.querySelectorAll(".menu >li > ul li > input[type='checkbox']")]




function dropLinksToggling(dropLinksList){
    dropLinksList.forEach((checkbox)=>{
        checkbox.addEventListener('click',()=>{
            dropLinksList.forEach(cb=>{
                if(cb !== checkbox){
                    cb.checked = false;
                }
            })
        })
    })
}
dropLinksToggling(inputCheckboxes)
dropLinksToggling(innerInputCheckboxes)