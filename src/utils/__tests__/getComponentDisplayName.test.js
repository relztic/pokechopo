// Internal Packages
import getComponentDisplayName from '../getComponentDisplayName'

describe('getComponentDisplayName', () => {
  it('should return `Component` on valid components', () => {
    let Component

    Component = { displayName: 'Component' }

    expect(getComponentDisplayName(Component)).toBe('Component')

    Component = { name: 'Component' }

    expect(getComponentDisplayName(Component)).toBe('Component')

    Component = {}

    expect(getComponentDisplayName(Component)).toBe('Component')
  })
})
