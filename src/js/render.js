import apiService from './apiService';
import refs from './refs';
import { makeGalleryItemMarkup, resetUi } from './markupGallery';

function render(e) {
  e.preventDefault();
  if (apiService.query === '') {
    // refs.moreButton.classList.add('is-hidden');
    refs.moreButton.classList.add('is-hiden');
    return;
  }
  console.log(apiService.query);
  console.log(refs.moreButton);

  apiService.axiosPixabayApiService().then(obj => {
    makeGalleryItemMarkup(obj);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
  //   refs.moreButton.classList.remove('is-hidden');
  refs.moreButton.classList.remove('is-hiden');
}

// Добавляет рендерпосабмиту

function renderOnSubmit(e) {
  apiService.resetPage();
  resetUi();
  apiService.query = e.currentTarget.elements.query.value;
  render(e);
}

function renderOnClick(e) {
  if (refs.inputSearchForm.value === '') {
    refs.moreButton.classList.add('is-hiden');
    return;
  }
  if (apiService.query !== refs.inputSearchForm.value) {
    apiService.resetPage();
    resetUi();
    apiService.query = refs.inputSearchForm.value;
  }
  render(e);
}

refs.searchForm.addEventListener('submit', e => {
  renderOnSubmit(e);
});

refs.moreButtonLink.addEventListener('click', e => {
  renderOnClick(e);
});
