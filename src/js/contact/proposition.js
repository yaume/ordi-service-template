function proposition(formulaire,event){
      let action = formulaire.getAttribute("data-protect");
      action = "../php/" + action + ".php";
      formulaire.setAttribute("action", action);
      event.currentTarget.submit();
}
export {proposition}