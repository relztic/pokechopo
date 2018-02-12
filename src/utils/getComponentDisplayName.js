/**
 * Gets the display name of a component.
 *
 * @param {Element} Component The component to parse.
 * @returns {string} The display name of a component.
 */
export default function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Component'
}
