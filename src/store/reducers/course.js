const INITIAL_STATE = {      
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: 'modulo 1',
      lessons: [
        { id: 1, title: 'aula1' },
        { id: 2, title: 'aula2' }
      ]
    },
    {
      id: 2,
      title: 'modulo 2',
      lessons: [
        { id: 3, title: 'aula3' },
        { id: 4, title: 'aula4' }
      ]
    }
  ]
}

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeModule: action.module, activeLesson: action.lesson }
  }

  return state;
}