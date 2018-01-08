export default {
  primary: state => {
    return {
      color: state.primary,
      hover: `hover-${state.primary}`,
      background: {
        color: `bg-${state.primary}`,
        hover: `bg-hover-${state.primary}`
      },
      border: {
        color: `border-${state.primary}`
      }
    }
  }
}
