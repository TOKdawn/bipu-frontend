

module.exports = {
  getLabels (vue) {
    return vue.$http.get(`https://api.github.com/repos/${vue.$store.getters.context}/labels`)
  },
  getGitHubUser (vue) {
    return vue.$http.get(`https://api.github.com/users/${vue.$store.getters.gitHubUsername}`)
  },
  getUserInfo (vue) {
    return vue.$http.all([this.getGitHubUser(vue), this.getLabels(vue)])
  },
  getIssues (vue, data) {
    return vue.$http.get(`https://api.github.com/search/issues?q=${data.keyword}+state:open+repo:zytx121/je&sort=created&order=desc&page=${data.currentPage}&per_page=${data.pageSize}`)
  },
  getIssue (vue, number) {
    return vue.$http.get(`https://api.github.com/repos/zytx121/je/issues/${number}`)
  },
  getComments (vue, url) {
    return vue.$http.get(url)
  },
  getReadme (vue) {
    return vue.$http.get(`https://raw.githubusercontent.com/${vue.$store.getters.context}/master/README.md`)
  },
  getInstruction (vue) {
    return vue.$http.get(`https://raw.githubusercontent.com/zytx121/je/master/README.md`)
  },
  getRepos (vue, data) {
    return vue.$http.get(`https://api.github.com/users/${vue.$store.getters.gitHubUsername}/repos?sort=stargazers_count&order=desc&page=1&per_page=100`)
  }
}
