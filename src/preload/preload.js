const { contextBridge } = require('electron')
const supabase = require('../../supabase/client')

contextBridge.exposeInMainWorld('api', {
  getUsers: async () => {
    const { data, error } = await supabase.from('users').select('*')
    return { data, error }
  }
})
