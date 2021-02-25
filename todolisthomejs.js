let inpt = document.getElementById('todolilstinp')
let inptextplace = document.getElementById('to_do_list_content_in_content_txt_item_content')

let obj = {}

let arr = []
let arr1 = []

let filttext = ''

if (arr1.length == 0) {
    inptextplace.innerHTML = `<div class='notfound_content'>You haven't a tasks</div>`
}

function inpChangeFunc(e) {
    obj.text = e
}


function removetodolistItem(id) {
    arr1.forEach((val, ind) => {
        if (val.id == id) {
            arr.splice(ind, 1)
            arr1.splice(ind, 1)

            document.getElementById(`todolistitems${val.id}`).remove()
        }
    })
    if (arr1.length == 0) {
        inptextplace.innerHTML = `<div class='notfound_content'>You haven't a tasks</div>`
    }
    // console.log(arr, 'arr', arr1, 'arr1')

}

function checktodolistItem(id) {

    var x = document.getElementById(`todocheckbxlist${id}`);
    // console.log(x)
    if (x.checked) {
        document.getElementById(`todolistitems${id}`).classList.remove("todoitemblockclss")
        document.getElementById(`todolistitems${id}`).classList.add("todoitemblockclssactive")

    } else {
        document.getElementById(`todolistitems${id}`).classList.add("todoitemblockclss")
        document.getElementById(`todolistitems${id}`).classList.remove("todoitemblockclssactive")

    }

}

function searchFunc(e) {
    filttext = e
    console.log(arr1)
    arr1 = []
    for (var k of arr) {
        if (k.text.includes(filttext)) {
            // console.log(k)
            arr1.push(k)
        }
    }
    inptextplace.innerHTML = arr1.map((val) => {
        return (
            `<div id='todolistitems${val.id}' class='todoitemblockclss'>
                <input type='checkbox' id='todocheckbxlist${val.id}'   onclick='checktodolistItem(${val.id})'  />
                <button onclick='removetodolistItem(${val.id})' class='remove_clss_todo_item' ><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                
                <div class='todoitemclss'>
                    ${val.text}
                </div>
            </div>`
        )
    })

    if (arr1.length == 0) {
        inptextplace.innerHTML = `<div  class='notfound_content'>Not Found a Task</div>`
    }

    // console.log(arr1)

    inptextplace.innerHTML = inptextplace.innerHTML.replaceAll(',', '')

}


function inpclickFunc() {
    obj.id = arr.length + 1
    if (obj.text) {
        arr.push(obj)
    }
    arr1 = [...arr]

    inptextplace.innerHTML = arr1.map((val) => {
            return (
                `<div id='todolistitems${val.id}' class='todoitemblockclss'>
                    <input type='checkbox' id='todocheckbxlist${val.id}'  onclick='checktodolistItem(${val.id})'  />
                    <button onclick='removetodolistItem(${val.id})' ><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    
                    <div class='todoitemclss'>
                        ${val.text}
                    </div>
                </div>`
            )
        })
        // console.log(arr1)

    if (arr1.length == 0) {
        inptextplace.innerHTML = `<div  class='notfound_content'>You haven't a tasks</div>`
    }

    inpt.value = ''
    document.getElementById('todolilstinpsec').value = ''
    obj = {}
    inptextplace.innerHTML = inptextplace.innerHTML.replaceAll(',', '')


    // console.log(arr)
}

document.body.addEventListener('keydown',addInfoEnterPressFunc)


function addInfoEnterPressFunc(e){
	if(e.keyCode == 13){
		obj.id = arr.length + 1
		if (obj.text) {
			arr.push(obj)
		}
		arr1 = [...arr]

		inptextplace.innerHTML = arr1.map((val) => {
				return (
					`<div id='todolistitems${val.id}' class='todoitemblockclss'>
						<input type='checkbox' id='todocheckbxlist${val.id}'  onclick='checktodolistItem(${val.id})'  />
						<button onclick='removetodolistItem(${val.id})' ><i class="fa fa-trash-o" aria-hidden="true"></i></button>
						
						<div class='todoitemclss'>
							${val.text}
						</div>
					</div>`
				)
			})
			// console.log(arr1)

		if (arr1.length == 0) {
			inptextplace.innerHTML = `<div  class='notfound_content'>You haven't a tasks</div>`
		}

		inpt.value = ''
		document.getElementById('todolilstinpsec').value = ''
		obj = {}
		inptextplace.innerHTML = inptextplace.innerHTML.replaceAll(',', '')


		// console.log(arr)
	}
}

