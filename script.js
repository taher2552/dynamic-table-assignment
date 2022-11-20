    const display_row=document.getElementById('body');
    const person=document.getElementById("name");
    const email=document.getElementById("email");
    const contact=document.getElementById("contact");
    const button=document.getElementById('btn');
    const error=document.getElementById('error')

    button.addEventListener('click', ()=>{

      if(person.value==""){
         error.innerText="*please enter your name"

         return;
      }
      if(email.value==""){
         error.innerText="*please enter your email"
         return;
      }
      else if(!email.value.includes("@")){
         error.innerText="*invalid email. Please include @ in your email"
         return;
      }
      if(contact.value==""){
         error.innerText="*please enter your Phone number"
         return;
      }else if(contact.value.length!==10){
         error.innerText="*please enter only 10 digits"
         return;
      }

        display_row.innerHTML+=`<tr class="data">
        <td>${person.value}</td>
       <td>${email.value}</td>
       <td>${contact.value}</td>
       <td ><button class="del">Delete</button></td>
      <tr>`;

      person.value="";
      email.value="";
      contact.value="" ;
      error.innerText="";

      
      const del4=document.querySelectorAll('.del');
   
      for (const del of del4) {
         del.addEventListener('click', function() {

            let confirm=window.confirm("are you sure you want to delete this??");

            if(confirm){
            this.parentNode.parentNode.remove();
            }
          
         })
       }
    })

  
    


    



