const ROOT_URL = `https://avetiq-test.firebaseapp.com`

export const getTodosUrl = (groupId, userId) => `${ROOT_URL}/todos/group/${groupId}/user/${userId}`

export const getGroupIdUrl = name => `${ROOT_URL}/group/${name}`

export const getUserIdUrl = name => `${ROOT_URL}/user/${name}`

export const getUpdateTodosUrl = (groupId, userId) => `${ROOT_URL}/todos/group/${groupId}/user/${userId}`
