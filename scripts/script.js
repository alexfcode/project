const MOCK_LIST = [
    {
        id: 1,
        title: "Работа с формами",
        content: "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
        сolor: "green",
        isFavorite: false,
    },

    {
        id: 2,
        title: "Заметка 2",
        content: "К определённым полям формы можно обратиться через form.",
        сolor: "yellow",
        isFavorite: false,
    },

    {
        id: 3,
        title: "Заметка 3",
        content: "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
        сolor: "blue",
        isFavorite: false,
    },


]

const colors = {
    green: '#C2F37D',
    blue: '#7DE1F3',
    red: '#F37D7D',
    yellow: '#F3DB7D',
    purple: '#E77DF3',
  }


const model = {
    notes: MOCK_LIST,
}


const view = {

    // init() {
    //     const list = document.querySelector(".notes-list")
    //     this.renderNotes(model.tasks)

    // }

    renderNotes(notes) {
        // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
        let notesHTML = ""
        const notesList = document.querySelector(".notes-list")
        const form = document.querySelector(".new-note")
        const title = document.querySelector(".new-note")

        for (let i =0; i < notes.length; i++) {
            notesHTML += `
            <div class="note">
                        <dt id="${notes[i].id} class="${notes[i].isFavorite ? "favorite" : "notFavorite"}">
                            <div class="note-title" style="background-color: ${colors[notes[i].сolor]};">
                                <div>
                                    <span>${notes[i].title}</span>
                                </div>
                                <div>
                                    <button name="button-favorite">
                                        <img src="./images/heart active.svg" alt="heart">
                                    </button>
                                    <button name="button-trash">
                                        <img src="./images/trash.svg" alt="trash">
                                    </button name="delete">
                                </div>
                            </div>
                        </dt>
                        <dd>
                            <div class="note-content">
                                <p>${notes[i].content}</p>
                            </div>
                            
                        </dd>
                    </div>
            `
            console.log(notesHTML);
            
        }

        notesList.innerHTML = notesHTML

        // также здесь можно будет повесить обработчики кликов на кнопки удаления и избранного
      }
}

function init() {
    view.renderNotes(MOCK_LIST)
  }
  
  init()



const controller = {

}

const buttonFav = document.querySelector('button[name="button-favorite"]')

buttonFav.addEventListener("click", (event) => {
    
    alert("fav clicked!")
})

