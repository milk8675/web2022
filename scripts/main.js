// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() > 18) {
  const html = document.querySelector('html');
  html.style.backgroundColor = '#black';
  html.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const content = document.getElementsByClassName('contentbody');
  content[0].style.backgroundColor = '#black';
  content[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const home = document.getElementsByClassName('homeimages');
  home[0].style.backgroundColor = '#black';
  home[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const welcome = document.getElementsByClassName('welcomemessage');
  welcome[0].style.backgroundColor = '#black';
  welcome[0].style.color = 'white';
  welcome[0].style.border = '1em solid #black';
}

if (new Date().getHours() > 18) {
  const nav = document.getElementsByClassName('navbar');
  nav[0].style.backgroundColor = '#black';
  nav[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const header = document.querySelector('header');
  header.style.backgroundColor = '#black';
  header.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const footer = document.querySelector('footer');
  footer.style.backgroundColor = '#black';
  footer.style.color = 'white';
}
