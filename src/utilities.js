export const getBoardAuthConfig = () => {
  let oldConfig = localStorage.getItem('vivifyscrum_config')
  return Object.assign({
    code: '',
    email: '',
    token: '',
    filterByAssignee: ''
  }, (JSON.parse(oldConfig) || {}))
}
