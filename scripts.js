function addItem(e){
    const item = document.querySelector('#item').value;
    document.querySelector('#item').value = '';

    const listItem = document.createElement('li');
    const liSpan = document.createElement('span');
    const deleteButtom = document.createElement('button');

    const flexDiv = document.createElement('div');
    flexDiv.classList.add('liStyle');

    liSpan.textContent = item;
    deleteButtom.textContent = 'Delete';

    flexDiv.appendChild(liSpan);
    flexDiv.appendChild(deleteButtom);

    listItem.appendChild(flexDiv);

    deleteButtom.addEventListener('click', ()=>{
        listItem.remove();
    });
    const itemList = document.querySelector('#itemList');
    itemList.appendChild(listItem);

    document.querySelector('#item').focus();
}

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addItem);

document.addEventListener('keypress', e => {
    if(e.key == 'Enter')
    {
        addItem(e);
    }
})