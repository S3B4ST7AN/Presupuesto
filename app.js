document.getElementById('formTask').addEventListener('submit', saveTask);


function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let date = document.getElementById('date').value;
  let kind = document.getElementById('kind').value;
  let valor = document.getElementById('valor').value;
  let presupu = document.getElementById('presupu').value;
  let file = document.getElementById('file').value;
 
  console.log(date)

  let task = {
    date,
    title,
    description,
    kind,
    valor,
    presupu,
    file,
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let date = tasks[i].date;
    let kind = tasks[i].kind;
    let valor = tasks[i].valor;
    let presupu = tasks[i].presupu;
    let file = tasks[i].file;
    

     if (kind === 'ingreso') {
   tasksView.innerHTML += `<div class="card border-success mb-3">
    <div class="card-body text-success">
      <p>
      <strong>CATEGORIA</strong>: ${kind}
      <strong>PRECIO</strong>: ${valor}
      <strong>FECHA</strong>: ${date}
      <strong>DESCRIPCION</strong>: ${description}
      <strong>PRESUPUESTO</strong>: ${presupu}
      <strong>COMPROBANTE</strong>: ${file}
      
      
      <a href="#" onclick="deleteTask('${title}')" class="btn btn-success ms-3">Eliminar</a>
      
      </p>
    </div>
  </div>`
  } else {
   tasksView.innerHTML += `<div class="card border-danger mb-3">
    <div class="card-body text-danger">
      <p>
      <strong>CATEGORIA</strong>: ${kind}
      <strong>PRECIO</strong>: ${valor}
      <strong>FECHA</strong>: ${date}
      <strong>DESCRIPCION</strong>: ${description}
      <strong>PRESUPUESTO</strong>: ${presupu}
      <strong>COMPROBANTE</strong>: ${file}
      
      
      <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ms-3">Eliminar</a>
      
      </p>
    </div>
  </div>`
  }
 }
}

getTasks();