
// VARIABLES GLOBALES
const socialMediaUI = document.querySelectorAll('.socialmediaicons');
const socialName = ['facebook', 'flickr', 'google', 'linkedin', 'meetup', 'twitter', 'wordpress', 'youtube'];

const socialMedia =
{
  facebook: 'http://facebook.com',
  flickr: 'http://flickr.com',
  google: 'http://google.com',
  linkedin: 'http://linkedin.com',
  meetup: 'http://meetup.com',
  twitter: 'http://twitter.com',
  wordpress: 'http://wordpress.com',
  youtube: 'http://youtube.com'
};


// FUNCIONES
const addImages = (navSocialMedia, socialName, socialMedia) =>
{
  let navSocial = navSocialMedia;

  for (let i = 0; i < socialName.length; i++)
  {
    let url = document.createElement('a');
    url.href = socialMedia[socialName[i]];
    url.target = '_blank';

    let image = document.createElement('img');
    image.src = `images/${socialName[i]}.png`;
    image.alt = socialName[i];

    url.appendChild(image); // Agrego dentro del enlace la imagen
    navSocial.appendChild(url); // Paso el elemento <a> a la vista con la imagen
  }
}


// EVENTOS
socialMediaUI.forEach((navSocialMedia) => { addImages(navSocialMedia, socialName, socialMedia); });
