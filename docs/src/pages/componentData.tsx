import TableSamples from './routes/TableSamples.tsx'
import ButtonsSamples from './routes/ButtonsSamples.tsx'
import IconButtonsSamples from './routes/IconButtonsSamples.tsx'
import InputSample from './routes/InputSample.tsx'
import SelectSamples from './routes/SelectSamples.tsx'
import LinkSamples from './routes/LinkSamples.tsx'
import ModalSamples from './routes/ModalSamples.tsx'
import PanelSamples from './routes/PanelSamples.tsx'
import ConSamples from './routes/ConSamples.tsx'
import RowSamples from './routes/RowSamples.tsx'
import TitleSamples from './routes/TitleSamples.tsx'
import MenuSamples from './routes/MenuSamples.tsx'
import MenuItemSamples from './routes/MenuItemSamples.tsx'
import DropSamples from './routes/DropSamples.tsx'
import NotificationSamples from './routes/NotificationSamples.tsx'
import TransitionSamples from './routes/TransitionSamples.tsx'
import TooltipSamples from './routes/TooltipSamples.tsx'
import {ReactElement} from 'react'

export type COMPONENT_ROUTE_MAP_Type = Record<string, { to: string, name: string, comp: ReactElement }>
const COMPONENT_ROUTE_MAP = {
  table: {
    to: 'table',
    name: 'Table',
    comp: <TableSamples/>,
  },
  button: {
    to: 'button',
    name: 'Button',
    comp: <ButtonsSamples/>,
  },
  iconbutton: {
    to: 'iconbutton',
    name: 'Icon Buttons',
    comp: <IconButtonsSamples/>,
  },
  input: {
    to: 'input',
    name: 'Input',
    comp: <InputSample/>,
  },
  select: {
    to: 'select',
    name: 'Select',
    comp: <SelectSamples/>,
  },
  link: {
    to: 'link',
    name: 'Link',
    comp: <LinkSamples/>,
  },
  modal: {
    to: 'modal',
    name: 'Modal',
    comp: <ModalSamples/>,
  },
  panel: {
    to: 'panel',
    name: 'Panel',
    comp: <PanelSamples/>,
  },
  container: {
    to: 'container',
    name: 'Container',
    comp: <ConSamples/>,
  },
  row: {
    to: 'row',
    name: 'Row',
    comp: <RowSamples/>,
  },
  column: {
    to: 'column',
    name: 'Column',
    comp: <ConSamples/>,
  },
  title: {
    to: 'title',
    name: 'Title',
    comp: <TitleSamples/>,
  },
  paragraph: {
    to: 'paragraph',
    name: 'Paragraph',
    comp: <PanelSamples/>,
  },
  menu: {
    to: 'menu',
    name: 'Menu',
    comp: <MenuSamples/>,
  },
  menuitem: {
    to: 'menuitem',
    name: 'MenuItem',
    comp: <MenuItemSamples/>,
  },
  drop: {
    to: 'drop',
    name: 'Drop',
    comp: <DropSamples/>,
  },
  notification: {
    to: 'notification',
    name: 'Notification',
    comp: <NotificationSamples/>,
  },
  transition: {
    to: 'transition',
    name: 'Transition',
    comp: <TransitionSamples/>,
  },
  tooltip: {
    to: 'tooltip',
    name: 'Tooltip',
    comp: <TooltipSamples/>,
  },
}
/*
const COMPONENT_ROUTES = [
  {
    to: 'table',
    name: 'Table',
    comp: <TableSamples/>,
  },
  {
    to: 'button',
    name: 'Button',
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
