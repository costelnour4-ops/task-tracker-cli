# Task Tracker CLI 📝

O aplicație simplă în linia de comandă (CLI) construită cu **Node.js** pentru a gestiona task-urile zilnice. Datele sunt salvate local într-un fișier JSON.

## 🚀 Funcționalități
- **Adăugare** task-uri noi.
- **Listare** sub formă de tabel.
- **Ștergere** după ID.
- **Actualizare** descriere sau status (`to-do`, `doing`, `done`).

## 🛠️ Cum se folosește

Mai întâi, asigură-te că ai [Node.js](https://nodejs.org/) instalat.

### Adăugare task
```bash
node task.list.js add "Cumpără lapte"

###Vizualizarea liste
node task.list.js list
###Sterge task
node task.list.js delete 1

### Status update
node task.list.js updatestatus 1 doing
