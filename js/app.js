
document.querySelectorAll('.btnTop').forEach((el) =>{
        el.addEventListener('click',    () => {
        var content = el.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            document.querySelectorAll('.testContent').forEach((el) => el.style.maxHeight = null)}
        else{
            document.querySelectorAll('.testContent').forEach((el) => el.style.maxHeight = null)
            
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})
