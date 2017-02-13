import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Carte } from '../carte'

@Component({
  selector: 'app-paquet',
  templateUrl: './paquet.component.html',
  styleUrls: ['./paquet.component.css']
})
export class PaquetComponent {

  paquet: Carte[] = []
  checker: Carte[] = []
  end: boolean = false

  constructor(private dialog: MdDialog, private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.init()
    // console.log(this.monTest('hey'))
  }

  check(el) {
    switch (this.checker.length) {
      case 0:
        this.checker.push(el)
        break;
      case 1:
        if (this.checker[0].value === el.value) {
          this.checker[0].found = true
          el.found = true
          if (this.paquet.every(e => e.found))
            this.openSnackBar('Bien joué')
          // this.end = true
        }
        else {
          this.checker[0].clickable = true
          el.clickable = true
        }
        setTimeout(() => {
          this.checker[0].selected = false
          el.selected = false
          this.checker = []
        }, 250);
        break;
    }

  }

  init(numbr = 12) {
    this.end = false
    this.paquet = []
    let tmo = []
    this.checker = []

    for (let k = 0; k < numbr / 2; k++) {
      let color = this.getRandomColor()
      tmo.push({ a: k, b: color })
      tmo.push({ a: k, b: color })
    }
    for (let i = 0; i < numbr; i++) {
      let idx = Math.floor(Math.random() * tmo.length)
      this.paquet.push(new Carte(i, tmo[idx].a, tmo[idx].b))
      tmo.splice(idx, 1)
    }

  }

  getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  monTest<T>(T: any) {
    return T
  }


  openSnackBar(message: string, action: string = null) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}