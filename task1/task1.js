/**
* ЗАДАЧА #1 (ООП)
* 
* Развернутое описание на основании ТЗ.
* 
* свойства (int) id, (string) name, (int) status, (bool) changed
* save - сеттер
* initGet - геттер
*
*/
function init() {
  let newname = 'Mikky'
  let newstatus = 200
  let newchanged = true
  data = [newname, newstatus, newchanged]
  return data
}


class Item {
  constructor(id) {
    const name = String(init()[0])
    const status = Number(init()[1])
    const changed = Boolean(init()[2])

    this._name = name
    this._status = status
    this._changed = changed
  }
  get initGet() {
    return `name ${this._name}, status ${this._status}`
  }
  set save(value) {
    if (typeof value === 'string') {
      this._name = value
    } else if (typeof value === 'number') {
      this._status = value
    } else {
      return console.log('не возможно записать данные - value ='+ value)
    }
  }
}


let itemClass = new Item()
itemClass.save = 'Slack'
itemClass.save = 200

console.log(itemClass.initGet)