interface BackgroundDot {
  style: {
    top: number
    left: number
  }
  velocityX: number
  velocityY: number
  targetLeft: number
  targetTop: number
}

interface BackgroundLine {
  style: {
    width: number
    transform: string
    top: number
    left: number
  }
}
