import refs from './refs';
import markupGallery from '../templates/template.hbs';

function makeGalleryItemMarkup(photo) {
  const markup = markupGallery(photo);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function resetUi() {
  refs.gallery.innerHTML = '';
}

export { makeGalleryItemMarkup, resetUi };
