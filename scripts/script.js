const MOCK_LIST = [
  {
    id: 1,
    title: "Работа с формами",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: "green",
    isFavorite: false,
  },

  {
    id: 2,
    title: "Заметка 2",
    content: "К определённым полям формы можно обратиться через form.",
    color: "yellow",
    isFavorite: true,
  },

  {
    id: 3,
    title: "Заметка 3",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: "blue",
    isFavorite: false,
  },

  {
    id: 4,
    title: "Заметка ",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name sdfgsd fgsdfgsdfg sdf dfghdrfth rtfh=-590e6ui0e[r9 thj-0r89eu yh[isrtf hj[ir thj[soij th[osir thjoisdfj th[ositj h[sw9iyh-0uew h[is 9rjth[o0j thp[df",
    color: "blue",
    isFavorite: true,
  },

  {
    id: 3,
    title: "Заметка 3",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: "purple",
    isFavorite: false,
  },
];

const colors = {
  green: "#C2F37D",
  blue: "#7DE1F3",
  red: "#F37D7D",
  yellow: "#F3DB7D",
  purple: "#E77DF3",
};

const model = {
  notes: MOCK_LIST,
    // notes: [],

    createNote(title, content, color) {
        const id = new Date().getTime()
        const newNote = { id, title, content, color, isFavorite: false}
        this.notes.unshift(newNote)
        view.renderNotes(this.notes)
    },

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId)
        view.renderNotes(this.notes)
    },

    showFavorites() {
        view.renderNotes(this.notes.filter(note => note.isFavorite))
    },    
    showAll() {
        view.renderNotes(this.notes)
    }
};

const view = {
  init() {
      this.renderNotes(model.notes)

      const form = document.querySelector(".form-note")
      
      form.addEventListener("submit", function (event) {
        event.preventDefault()
        const title = document.querySelector(".title-note-input").value
        const content = document.querySelector(".content-note-textarea").value
        const color = document.querySelector(".radio:checked").value
        controller.createNote(title, content, color)
        // title = ''
        // content = ''
        document.querySelector(".title-note-input").value = ""
        document.querySelector(".content-note-textarea").value = ""

      })

  },

  renderNotes(notes) {
    // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
    let notesHTML = "";
    const notesList = document.querySelector(".notes-list");
    const form = document.querySelector(".new-note");
    const title = document.querySelector(".new-note");

    for (let i = 0; i < notes.length; i++) {
      notesHTML += `
            <div class="note">
                <dt id="${notes[i].id} class="${
        notes[i].isFavorite ? "favorite" : "notFavorite"
      }">
                    <div class="note-title" style="background-color: ${
                      colors[notes[i].color]
                    };">
                        <div>
                            <span>${notes[i].title}</span>
                        </div>
                        <div>
                            <button name="button-favorite">
                ${notes[i].isFavorite ? '<img src="./images/heart active.svg" alt="heart"></img>' : '<img src="./images/heart inactive.svg" alt="heart"></img>'}
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
            `;
    }
    notesList.innerHTML = notesHTML;
    // также здесь можно будет повесить обработчики кликов на кнопки удаления и избранного
const toogleFavorite = document.querySelector(".notes-list")
toogleFavorite.addEventListener("click", function(event) {
    if (event.target.nameLi.contains("button-favorite")) {
        const taskId = +event.target.parentElement.id
        console.log(taskId);
        
    }
})



  },



};

const controller = {
    createNote(title, content, color) {
        model.createNote(title, content, color)
    },

    deleteNote(noteId) {
        model.deleteNote(noteId)
    },

    showFavorites() {
        model.showFavorites()
    }

}

function init() {
    view.init()
  }
  
  document.addEventListener('DOMContentLoaded', init)

