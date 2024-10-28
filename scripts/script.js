const MOCK_LIST = [
    {
        id: 1,
        title: "Работа с формами",
        content: "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
        сolor: "green",
        isFavorite: false,
    }
]

const colors = {
    GREEN: 'green',
    BLUE: 'blue',
    RED: 'red',
    YELLOW: 'yellow',
    PURPLE: 'purple',
  }


const model = {
    notes: MOCK_LIST,
}


const view = {
    renderNotes(notes) {
        // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
        const form = document.querySelector(".new-note")
        const title = document.querySelector(".new-note")

        // также здесь можно будет повесить обработчики кликов на кнопки удаления и избранного
      }
}



const controller = {

}