import { messages } from "./messages.js";
// let proposition = await import("./proposition.js");
import { proposition } from "./proposition.js";
const validation = (selecteur) => {
  const formulaire = document.querySelector(selecteur);
  const envoyer = formulaire.querySelector('[type="submit"');
  const groupes = Array.from(formulaire.childNodes).filter(
     (types) => types.type != "submit"
   );
   let entrees =[]
   groupes.forEach((groupe) => {
   let nodes = Array.from(groupe.childNodes)
    nodes.forEach((node) => {
       if (
         (node.nodeName === "INPUT" ||
           node.nodeName === "TEXTAREA") &&
         node.id != "telephone"
       ) {
         entrees.push(node);
       }
    })

  })
  // empeche la validation HTM5
  formulaire.setAttribute("novalidate", "");

  formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const drap = validationEntrees(entrees);
    if (drap) {
      proposition(formulaire,event);
    }
    // Desactive le bouton de soumission du formulaire
    // envoyer.setAttribute("disabled", "");
    // envoyer.classList.add("desactive");
  });
  formulaire.addEventListener(
    "blur",
    (event) => {
      var cible = event.target;
      if (
        (cible.nodeName === "INPUT" || cible.nodeName === "TEXTAREA") &&
        cible.id != "telephone"
      ) {
        validationChamp(cible);
      }
    },
    true
  );
};
function validationEntrees(entrees) {
  let drap;
  entrees.forEach((entree) => {
    drap = validationChamp(entree)
  })
  
    return drap
}
function message(champ, label, span) {
  const erreur = champ.validity;
  if (erreur.valueMissing) {
    span.textContent = messages.requis(label, span);
  }
  if (erreur.tooShort) {
    const taille = champ.getAttribute("minlength");
    span.textContent = messages.tropscourt(label, span, taille);
  }
  if (erreur.tooLong) {
    const taille = champ.getAttribute("maxlength");
    span.textContent = messages.tropscourt(label, span, taille);
  }
  if (erreur.patternMismatch) {
    span.textContent = messages.motif(label, span);
  }
  if (erreur.typeMismatch) {
    const type = champ.type;
    const exp = champ.getAttribute("pattern");
    const valeur = champ.value;
    span.textContent = messages.mauvaisType(label, span, type, exp, valeur);
  }
}
function validationChamp(champ) {
  const label = champ.parentNode;
  let drap
  const span = label.getElementsByTagName("span")[0];
  if (!champ.validity.valid) {
    champ.setAttribute("aria-invalid", "true");
    label.classList.add("erreur");
    drap = false
    message(champ, label, span);
  } else if (champ.validity.valid && champ.value) {
    label.classList.remove("erreur");
    champ.removeAttribute("aria-invalid");
    label.classList.add("valide");
    span.textContent = "";
    drap = true
  } else {
    label.classList.remove("erreur");
    label.classList.remove("valide");
    span.textContent = "";
  }
  return drap
}
validation("#contact");
