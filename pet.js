/*
 * @Date: 2026-11-06 10:50:31
 * @LastEditTime: 2026-11-06 14:55:40
 * @LastEditors: hesiyun hesiyun@xgd.com
 */
function mountPet(el, opts) {
    const width = opts.width || 112;
    const height = opts.height || 121;
    // 自己建节点、自己插 style、自己绑 pointer 事件、自己开 rAF
    let root;
    function buildDom() {
        root = document.createElement('div');
        root.className = 'nw-pet'
        root.style.outline = '2px dashed #e33';
        const COLS = 8;
        const ROWS = 11;


        const CSS = `
.nw-pet { position: fixed; z-index: 45; pointer-events: none;width: ${width}px; height: ${height}px; }
.nw-tilt { width: 100%; height: 100%; transition: transform 0.18s ease-out; }
.nw-pet.is-dragging .nw-tilt { transition: none; }
.nw-hit {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 14px;
  outline: none;
}
.nw-pet.is-dragging .nw-hit { cursor: grabbing; }
.nw-hit:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 3px; }
.nw-sprite {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: ${COLS * width}px ${ROWS * height}px;
  background-position: 0 0;
  will-change: background-position;
  filter: drop-shadow(0 6px 9px rgba(0, 0, 0, 0.18));
}
.nw-bubble {
  position: absolute;
  left: 50%;
  bottom: calc(100% - 6px);
  transform: translateX(-50%);
  max-width: 240px;
  padding: 7px 11px;
  border-radius: 11px;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.3;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-overlay);
  border: 1px solid var(--dsw-alias-border-l1);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
  pointer-events: none;
  animation: nw-bubble-in 0.2s ease-out;
}
.nw-bubble::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 9px;
  height: 9px;
  margin-top: -5px;
  transform: translateX(-50%) rotate(45deg);
  background: var(--dsw-alias-bg-overlay);
  border-right: 1px solid var(--dsw-alias-border-l1);
  border-bottom: 1px solid var(--dsw-alias-border-l1);
}
@keyframes nw-bubble-in {
  from { opacity: 0; transform: translate(-50%, 4px) scale(0.94); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
}
.nw-diag {
  position: absolute;
  left: 0;
  top: -52px;
  max-width: 210px;
  padding: 4px 7px;
  border-radius: 6px;
  white-space: pre;
  font: 10px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-bg-overlay);
  border: 1px solid var(--dsw-alias-border-l1);
  pointer-events: none;
  opacity: 0.92;
}
@media (prefers-reduced-motion: reduce) {
  .nw-tilt { transition: none; }
}
`;
        const style = document.createElement('style');
        style.textContent = CSS;
        root.appendChild(style);
        el.appendChild(root);
    }
    buildDom()
    return function dispose() {
        root?.remove();
    };
}