class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * this.radius;
  }

  get circumference() {
    return 2 * Math.pi * this.radius;
  }

  get area() {
    return Math.pi * (this.radius * this.radius);
  }

  set diameter(radius) {
    this.diameter = this.radius * this.radius;
  }

  set circumference(radius) {
    this.circumference = 2 * Math.pi * this.radius;
  }

  set area(radius) {
    this.area = Math.pi * (this.radius * this.radius);
  }
}

