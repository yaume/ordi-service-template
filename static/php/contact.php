<?php
/* Empeche l'acces direct aufichier */
if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
  /* 
           Choix du code d'erreur. Peut-être que 404 est plus sécurisé que 403 
        */
  // header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
  header('HTTP/1.0 404 Not Found', TRUE, 404);
  /* Choisir la page de redirection appropriée */
  die(header('location: /index.html'));
}
session_start();
// Vérifie si le jeton de sécurité est présent(CSRF) et si le champ télephone est vide(HoneyPot)
if (!$_POST['jeton'] || $_POST['jeton'] !== $_SESSION['jeton'] || $_POST['telephone'] !== "") {
  // Redirection vers la page remerciement comme si tout c'était bien passé
  die(header('location: /merci.html'));
}

//  Si trop rapide bot
$temp = 30;
if (time() - $_POST['pointeur'] < $temp) {
  // Redirection vers la page remerciement comme si tout c'était bien passé
  die(header('location: /merci.html'));
}
$erreurs = [];
$maquants = [];
$attendus = ['nom', 'prenom', 'email', 'message', 'ip'];
$requis = ['nom', 'email', 'message'];
$champ = [];
foreach ($_POST as $clef => $post) {

  if ($clef == 'email') {
    $post = filter_var($post, FILTER_SANITIZE_EMAIL);
    $post = filter_var($post, FILTER_VALIDATE_EMAIL);
  } else {
    $post = nettoyage($post);
  }
  if ($post != "") {
    if (in_array($clef, $attendus)) {
      $champ[$clef] = $post;
    }
  }
  if (in_array($clef, $requis) && $post = "") {
    $erreurs[$clef] = $post;
  }
}
if (empty($erreurs)) {
  $entete  = 'MIME-Version: 1.0' . "\r\n";
  $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $entete .= 'From: webmaster@ordi-service.fr' . "\r\n";
  $entete .= 'Reply-to: ' . $champ['email'];
  $message = '<h1> Message du site<h1>
    <h1>Message de la page de contact du site ordi-service.fr</h1>
<dl>
  <dt>Email : </dt>
  <dd>' . $champ['email'] . '</dd>
  <dt>Nom : </dt>
  <dd>' . $champ['nom'] . '</dd>
  <dt>Prénom : </dt>
  <dd>' . $champ['prenom'] . '</dd>
  <dt>Message : </dt>
  <dd>' . $champ['message'] . '</dd>
  <dt>IP : </dt>
  <dd>' . $champ['ip'] . '</dd>
</dl>';
  $retour = mail('guillaume@ordi-service.fr', 'Envoi depuis page Contact', $message, $entete);
  if ($retour)
    // Redirection vers la page remerciement comme si tout c'était bien passé
    die(header('location: /merci.html'));
}
function nettoyage($donnee)
{
  $donnee = trim($donnee);
  $donnee = stripslashes($donnee);
  $donnee = htmlspecialchars($donnee);
  return $donnee;
}
