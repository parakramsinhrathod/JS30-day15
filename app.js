const addItems = document.querySelector('.add-items')
const intemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []


function addItem(e){
    console.log(e)
    e.preventDefault()
    const text = (this.querySelector('[name=item]')).value
    const item = {
        text,
        done: false
    }
    items.push(item)
    populateList(items, intemsList)
    localStorage.setItem('items',  JSON.stringify(items))
    this.reset()
    
    console.log(item)
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked' : ''} />
        <label for="item${i}" >${plate.text}</label>
        </li>
        `
    }).join('')
}

function toggleDone(e){

}
populateList(items, intemsList)
const checkBoxes = document.querySelectorAll('input')

checkBoxes.forEach(input => input.addEventListener('click', () => {
    alert('clicked')
}))


addItems.addEventListener('submit', addItem)
