const apiBaseURL = 'http://example.com/api/';

export default {
  getApiUrl(url) {
    return apiBaseURL + url;
  }
};