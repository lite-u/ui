import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Container component
 *
 * @brief
 * A flexible layout and style container that adapts to various UI layout needs.
 *
 * @intro
 * Provides dynamic box, margin, padding, overflow, and size styling through a rich set of shorthand props.
 * Useful as a base layout block across components or pages.
 * `Con` is an Alias of Container
 *
 * @example
 *
 * import { Container } from '@lite-u/ui'
 * // Con is an Alias of Container
 * import { Con } from '@lite-u/ui'
 *
 * <Container p={20} bg="#f9f9f9" fw fh>
 *   <h2>Content</h2>
 * </Container>
 */
const Container = ({ children, ovh = false, ova = false, box = true, fw = true, fh = false, tl, tc, tr, fz, bg, color, border, rounded, ib, abs, fixed, t, r, b, l, borderColor = '#dfdfdf', w, h, maxW, maxH, minW, minH, p, m, pt, pr, pb, pl, mt, mr, mb, ml, style = {}, role = 'container', ...props }) => {
    let styles = {
        width: 'auto',
        height: 'auto',
        fontSize: fz,
        ...style,
    };
    if (fw) {
        styles.width = '100%';
    }
    if (fh) {
        styles.height = '100%';
    }
    if (w) {
        styles.width = w;
    }
    if (h) {
        styles.height = h;
    }
    if (maxW) {
        styles.maxWidth = maxW;
    }
    if (maxH) {
        styles.maxHeight = maxH;
    }
    if (minW) {
        styles.minWidth = minW;
    }
    if (minH) {
        styles.minHeight = minH;
    }
    if (p) {
        styles.padding = p;
    }
    if (pt) {
        styles.paddingTop = pt;
    }
    if (pr) {
        styles.paddingRight = pr;
    }
    if (pb) {
        styles.paddingBottom = pb;
    }
    if (pl) {
        styles.paddingLeft = pl;
    }
    if (mt) {
        styles.marginTop = mt;
    }
    if (mr) {
        styles.marginRight = mr;
    }
    if (mb) {
        styles.marginBottom = mb;
    }
    if (ml) {
        styles.marginLeft = ml;
    }
    if (m) {
        styles.margin = m;
    }
    if (box) {
        styles.boxSizing = 'border-box';
    }
    if (bg) {
        styles.background = bg;
    }
    if (color) {
        styles.color = color;
    }
    if (ovh) {
        styles.overflow = 'hidden';
    }
    if (ova) {
        styles.overflow = 'auto';
    }
    if (tl) {
        styles.textAlign = 'left';
    }
    if (tc) {
        styles.textAlign = 'center';
    }
    if (tr) {
        styles.textAlign = 'right';
    }
    if (border) {
        styles.border = '1px solid ' + borderColor;
    }
    if (rounded) {
        styles.borderRadius = 5;
    }
    if (ib) {
        styles.display = 'inline-block';
    }
    if (abs) {
        styles.position = 'absolute';
    }
    if (fixed) {
        styles.position = 'fixed';
    }
    if (typeof t === 'string' || typeof t === 'number') {
        styles.top = t;
    }
    if (typeof r === 'string' || typeof r === 'number') {
        styles.right = r;
    }
    if (typeof b === 'string' || typeof b === 'number') {
        styles.borderRadius = b;
    }
    if (typeof l === 'string' || typeof l === 'number') {
        styles.left = l;
    }
    return _jsx("div", { role: role, style: styles, ...props, children: children });
};
export const Con = Container;
export default Container;
