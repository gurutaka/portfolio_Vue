export default function () {
  const script = function (p5) {
    let maxParticles = 100
    let repelDist
    let particleBreakDistance
    let particles = []

    p5.setup = function () {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      p5.strokeWeight(2)

      repelDist = p5.max(p5.width, p5.height) / 8
      particleBreakDistance = p5.max(p5.width, p5.height) / 40
      while (particles.length < maxParticles) {
        // pos, speed
        let arr = [
          p5.createVector(p5.random(p5.width), p5.random(p5.height)),
          p5.createVector(p5.random(4) - 2, p5.random(4) - 2)
        ]
        particles.push(arr)
      }
    }

    const drawParticles = function () {
      p5.colorMode(p5.HSB, 100)

      // 距離に応じて色が変化する
      for (let i = 0; i < particles.length; i++) {
        let posi = particles[i][0]
        for (let j = i + 1; j < particles.length; j++) {
          let posj = particles[j][0]
          let dist = posi.dist(posj)
          if (dist <= particleBreakDistance) {
            p5.strokeWeight(2 - dist / particleBreakDistance)
            p5.stroke(
              100 * (posi.x / p5.width),
              90,
              90,
              255 - (255 * dist) / particleBreakDistance
            )
            p5.line(posi.x, posi.y, posj.x, posj.y)
          }
        }
      }

      // パーティクルの色
      p5.colorMode(p5.RGB, 255)
      p5.fill(0, 0, 0, 200)
      p5.noStroke()

      let mousePos = p5.createVector(p5.mouseX, p5.mouseY)

      for (let i = 0; i < particles.length; i++) {
        let pos = particles[i][0]
        let speed = particles[i][1]
        let randSize = p5.random(3, 7)
        p5.ellipse(pos.x, pos.y, randSize, randSize)
        pos.add(speed)

        let distToMouse = mousePos.dist(pos)

        if (distToMouse < repelDist) {
          let repel = p5.createVector(pos.x - mousePos.x, pos.y - mousePos.y)
          let distFrac = (repelDist - distToMouse) / repelDist
          repel.setMag(50 * distFrac * distFrac)
          pos.add(repel)
        }

        if (pos.x > p5.width) {
          pos.x -= p5.width
          pos.y += p5.random(p5.height / 10) - p5.height / 20
        } else if (pos.x < 0) {
          pos.x += p5.width
          pos.y += p5.random(p5.height / 10) - p5.height / 20
        }

        if (pos.y > p5.height) {
          pos.y -= p5.height
          pos.x += p5.random(p5.width / 10) - p5.width / 20
        } else if (pos.y < 0) {
          pos.y += p5.height
          pos.x += p5.random(p5.width / 10) - p5.width / 20
        }
      }
    }

    p5.draw = function () {
      p5.clear()

      drawParticles()
      particleBreakDistance = p5.min(particleBreakDistance + 1, p5.width / 12)
    }
  }

  return script
}
