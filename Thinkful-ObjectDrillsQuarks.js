class Quark{
    constructor(color, flavor) {
      this.color = color
      this.flavor = flavor
      this.baryon_number = 1/3
    }
    interact(q2) {
      let color1 = this.color
      let color2 = q2.color
      this.color = color2
      q2.color = color1
    }
  }