const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
let ulEl = document.createElement('ul');
rootNode.appendChild(ulEl);
function createTree(structure,element) {  
  for (const obj of structure) {
    let iEl = document.createElement('i');
    iEl.classList.add('material-icons');
    if (obj.folder) {
      let liEl =document.createElement('li'),
          spanEl = document.createElement('span'),
          ulEl = document.createElement('ul');     
      iEl.innerHTML = 'folder';
      liEl.appendChild(iEl);    
      spanEl.classList.add('folder');
      spanEl.innerHTML = obj.title;
      liEl.appendChild(spanEl);     
      ulEl.classList.add('nested');
      liEl.appendChild(ulEl);
      element.appendChild(liEl);

      if (obj.children) {
        createTree(obj.children,ulEl); 
      } else {
        let eliEl = document.createElement('li'),
            iEl = document.createElement('i');
        iEl.innerHTML = 'Folder empty'; 
        eliEl.appendChild(iEl);       
        ulEl.appendChild(eliEl);
      }            
    } else {
      let liEl = document.createElement('li'),
          spanEl = document.createElement('span');
      iEl.classList.add('file');      
      iEl.innerHTML = 'insert_drive_file'; 
      liEl.append(iEl);               
      spanEl.innerHTML = obj.title;
      liEl.appendChild(spanEl);
      element.appendChild(liEl);
    }  
  }
}
createTree(structure,ulEl);    

let toggler = document.getElementsByClassName('folder');
for ( let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function () {
    this.parentElement.querySelector('.nested').classList.toggle('active');
    if(this.previousSibling.innerHTML === 'folder_open') {
      this.previousSibling.innerHTML = 'folder';
    } else {
      this.previousSibling.innerHTML = 'folder_open';
    }
  })
}