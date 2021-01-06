import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const apiKey = `19772171-226cd242ef8307a66747d7d05`;

export default {
  searchQuerry: '',
  page: 1,
  async axiosPixabayApiService() {
    const { data } = await axios.get(
      `/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`,
    );
    this.incrementPage();
    return data.hits;
  },

  get query() {
    return this.searchQuerry;
  },

  set query(value) {
    this.searchQuerry = value;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
