import anime from 'animejs'

const defaultAnimation = {
  rotate: '1turn',
  easing: 'easeInOutSine',
  duration: 1500,
  delay: (el, i) => {
    return i * 250
  },
  direction: 'alternate'
}

export const startAnimation = (targets, options = defaultAnimation) => {
  anime(
    Object.assign({}, defaultAnimation, options, { targets }))
}
