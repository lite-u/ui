import TablePage from './samples/TablePage.tsx'
import ButtonsSamples from './samples/ButtonsSamples.tsx'
import IconButtonsSamples from './samples/IconButtonsSamples.tsx'
import InputSample from './samples/InputSample.tsx'
import SelectSamples from './samples/SelectSamples.tsx'
import LinkSamples from './samples/LinkSamples.tsx'
import ModalSamples from './samples/ModalSamples.tsx'
import PanelSamples from './samples/PanelSamples.tsx'
import ConSamples from './samples/ConSamples.tsx'
import RowSamples from './samples/RowSamples.tsx'
import TitleSamples from './samples/TitleSamples.tsx'
import MenuSamples from './samples/MenuSamples.tsx'
import MenuItemSamples from './samples/MenuItemSamples.tsx'
import DropSamples from './samples/DropSamples.tsx'
import NotificationSamples from './samples/NotificationSamples.tsx'
import TransitionSamples from './samples/TransitionSamples.tsx'
import TooltipSamples from './samples/TooltipSamples.tsx'
import {ReactElement} from 'react'

export type COMPONENT_ROUTE_MAP_Type = Record<string, { to: string, name: string, comp: ReactElement }>
const COMPONENT_ROUTE_MAP = {
  table: {
    to: 'table',
    name: 'Table',
    apiNameKey: 'Table',
    comp: <TablePage/>,
  },
  button: {
    to: 'button',
    name: 'Button',
    apiNameKey: 'Button',
    comp: <ButtonsSamples/>,
  },
  iconbutton: {
    to: 'iconbutton',
    name: 'IconButton',
    apiNameKey: 'IconButton',
    comp: <IconButtonsSamples/>,
  },
  input: {
    to: 'input',
    name: 'Input',
    apiNameKey: 'Input',
    comp: <InputSample/>,
  },
  select: {
    to: 'select',
    name: 'Select',
    apiNameKey: 'Select',
    comp: <SelectSamples/>,
  },
  link: {
    to: 'link',
    name: 'Link',
    apiNameKey: 'Link',
    comp: <LinkSamples/>,
  },
  modal: {
    to: 'modal',
    name: 'Modal',
    apiNameKey: 'Modal',
    comp: <ModalSamples/>,
  },
  panel: {
    to: 'panel',
    name: 'Panel',
    apiNameKey: 'Panel',
    comp: <PanelSamples/>,
  },
  container: {
    to: 'container',
    name: 'Container',
    apiNameKey: 'Container',
    comp: <ConSamples/>,
  },
  row: {
    to: 'row',
    name: 'Row',
    apiNameKey: 'Row',
    comp: <RowSamples/>,
  },
  column: {
    to: 'column',
    name: 'Column',
    apiNameKey: 'Column',
    comp: <ConSamples/>,
  },
  title: {
    to: 'title',
    name: 'Title',
    apiNameKey: 'Title',
    comp: <TitleSamples/>,
  },
  paragraph: {
    to: 'paragraph',
    name: 'Paragraph',
    apiNameKey: 'Paragraph',
    comp: <PanelSamples/>,
  },
  menu: {
    to: 'menu',
    name: 'Menu',
    apiNameKey: 'Menu',
    comp: <MenuSamples/>,
  },
  menuitem: {
    to: 'menuitem',
    name: 'MenuItem',
    apiNameKey: 'MenuItem',
    comp: <MenuItemSamples/>,
  },
  drop: {
    to: 'drop',
    name: 'Drop',
    apiNameKey: 'Drop',
    comp: <DropSamples/>,
  },
  notification: {
    to: 'notification',
    name: 'Notification',
    apiNameKey: 'Notification',
    comp: <NotificationSamples/>,
  },
  transition: {
    to: 'transition',
    name: 'Transition',
    apiNameKey: 'Transition',
    comp: <TransitionSamples/>,
  },
  tooltip: {
    to: 'tooltip',
    name: 'Tooltip',
    apiNameKey: 'Tooltip',
    comp: <TooltipSamples/>,
  },
  collapse: {
    to: 'collapse',
    name: 'Collapse',
    apiNameKey: 'Collapse',
    // comp: <TooltipSamples/>,
  },
}
/*
const COMPONENT_ROUTES = [
  {
    to: 'table',
    name: 'Table',
    apiNameKey: 'Table',
    comp: <TableSamples/>,
  },
  {
    to: 'button',
    name: 'Button',
    apiNameKey: 'Button',
    comp: <ButtonsSamples/>,
  },
  {
    to: 'iconbutton',
    name: 'Icon Buttons',
    comp: <IconButtonsSamples/>,
  },
  {
    to: 'input',
    name: 'Input',
    comp: <InputSample/>,
  },
  {
    to: 'select',
    name: 'Select',
    comp: <SelectSamples/>,
  },
  {
    to: 'link',
    name: 'Link',
    comp: <LinkSamples/>,
  },
  {
    to: 'modal',
    name: 'Modal',
    comp: <ModalSamples/>,
  },
  {
    to: 'panel',
    name: 'Panel',
    comp: <PanelSamples/>,
  },
  {
    to: 'container',
    name: 'Container',
    comp: <ConSamples/>,
  },
  {
    to: 'row',
    name: 'Row',
    comp: <RowSamples/>,
  },
  {
    to: 'column',
    name: 'Column',
    comp: <ConSamples/>,
  },
  {
    to: 'title',
    name: 'Title',
    comp: <TitleSamples/>,
  },
  {
    to: 'paragraph',
    name: 'Paragraph',
    comp: <PanelSamples/>,
  },
  {
    to: 'menu',
    name: 'Menu',
    comp: <MenuSamples/>,
  },
  {
    to: 'menuitem',
    name: 'MenuItem',
    comp: <MenuItemSamples/>,
  },
  {
    to: 'drop',
    name: 'Drop',
    comp: <DropSamples/>,
  },
  {
    to: 'notification',
    name: 'Notification',
    comp: <NotificationSamples/>,
  },
  {
    to: 'transition',
    name: 'Transition',
    comp: <TransitionSamples/>,
  },
  {
    to: 'tooltip',
    name: 'Tooltip',
    comp: <TooltipSamples/>,
  },
]*/

export default COMPONENT_ROUTE_MAP
