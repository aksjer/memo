export class Carte {

  id: number
  value: number
  color: string
  found: boolean
  selected: boolean
  clickable: boolean

  constructor(id: number, value: number, color: string) {
    this.id = id
    this.value = value
    this.color = color
    this.found = false
    this.selected = false
    this.clickable = true
  }

}