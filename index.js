/**
 * Host half of the Naiwa desktop pet.
 *
 * Intentionally empty: the pet is pure Client rendering inside `shell.overlay`.
 * Keeping an exported `apply` gives the bundle a normal Host row, so Plugin
 * Manager can enable, disable and describe it like any other plugin.
 */
export function apply() {}
