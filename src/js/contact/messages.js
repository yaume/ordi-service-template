function texte(label, span) {
  let labelTexte = label.textContent.replace(span.textContent, "");
  labelTexte =labelTexte.trim()
  labelTexte = labelTexte.replace("*","")
  return labelTexte
}
const messages = {
  requis: function (label, span) {
    let labelTexte = texte(label, span);
    let spanTexte = "Un " + labelTexte.toLowerCase() + " est requis";
    return spanTexte;
  },
  tropscourt: function (label, span, taille) {
    let labelTexte = texte(label, span);
    let spanTexte =
      "Un " +
      labelTexte.toLowerCase() +
      "  doit avoir au moins " +
      taille +
      " caractères.";
    return spanTexte;
  },
  tropslong: function (label, span, taille) {
    let labelTexte = texte(label, span);
    let spanTexte =
      "Un " +
      labelTexte.toLowerCase() +
      "  doit avoir au maximun " +
      taille +
      " caractères.";
    return spanTexte;
  },
  motif: function (label, span) {
    let labelTexte = texte(label, span);
    let spanTexte =
      "Un " +
      labelTexte.toLowerCase() +
      " ne doit comprendre que des lettres, tiret ou espace.";
    return spanTexte;
  },
  mauvaisType: function (label, span, type,exp, valeur) {
    exp = new RegExp(exp)
    console.log(valeur,exp)
    let valeurTest = valeur.replace(exp, "*")
     console.log(valeurTest);
    let labelTexte = texte(label, span);
    let spanTexte = labelTexte + " n'est pas un email valable"

    return spanTexte;
  },
};
export {messages}