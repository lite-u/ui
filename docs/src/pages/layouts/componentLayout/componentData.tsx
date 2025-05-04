import TablePage from '../../samples/TablePage.tsx'
import IconButtonsPage from '../../samples/IconButtonsPage.tsx'
import InputPage from '../../samples/InputPage.tsx'
import SelectPage from '../../samples/SelectPage.tsx'
import LinkPage from '../../samples/LinkPage.tsx'
import ModalPage from '../../samples/ModalPage.tsx'
import PanelPage from '../../samples/PanelPage.tsx'
import ContainerPage from '../../samples/ContainerPage.tsx'
import RowPage from '../../samples/RowPage.tsx'
import TitlePage from '../../samples/TitlePage.tsx'
import MenuPage from '../../samples/MenuPage.tsx'
import MenuItemPage from '../../samples/MenuItemPage.tsx'
import DropPage from '../../samples/DropPage.tsx'
import NotificationSamples from '../../samples/NotificationSamples.tsx'
import TransitionSamples from '../../samples/TransitionPage.tsx'
import TooltipSamples from '../../samples/TooltipSamples.tsx'
import {ReactElement} from 'react'
import TableRowPage from '../../samples/TableRowPage.tsx'
import ButtonPage from '../../samples/ButtonPage.tsx'
import ParagraphPage from '../../samples/ParagraphPage.tsx'
import ColumnPage from '../../samples/ColumnPage.tsx'

export type COMPONENT_ROUTE_MAP_Type = Record<string, { to: string, name: string, comp: ReactElement }>
const COMPONENT_ROUTE_MAP = {
  table: {
    to: 'table',
    name: 'Table',
    apiNameKey: 'Table',
    comp: <TablePage/>,
  },
  tablerow: {
    to: 'tablerow',
    name: 'Table Row',
    apiNameKey: 'TableRow',
    comp: <TableRowPage/>,
  },
  button: {
    to: 'button',
    name: 'Button',
    apiNameKey: 'Button',
    comp: <ButtonPage/>,
  },
  iconbutton: {
    to: 'iconbutton',
    name: 'IconButton',
    apiNameKey: 'IconButton',
    comp: <IconButtonsPage/>,
  },
  input: {
    to: 'input',
    name: 'Input',
    apiNameKey: 'Input',
    comp: <InputPage/>,
  },
  select: {
    to: 'select',
    name: 'Select',
    apiNameKey: 'Select',
    comp: <SelectPage/>,
  },
  link: {
    to: 'link',
    name: 'Link',
    apiNameKey: 'Link',
    comp: <LinkPage/>,
  },
  modal: {
    to: 'modal',
    name: 'Modal',
    apiNameKey: 'Modal',
    comp: <ModalPage/>,
  },
  panel: {
    to: 'panel',
    name: 'Panel',
    apiNameKey: 'Panel',
    comp: <PanelPage/>,
  },
  container: {
    to: 'container',
    name: 'Container',
    apiNameKey: 'Container',
    comp: <ContainerPage/>,
  },
  row: {
    to: 'row',
    name: 'Row',
    apiNameKey: 'Row',
    comp: <RowPage/>,
  },
  column: {
    to: 'column',
    name: 'Column',
    apiNameKey: 'Column',
    comp: <ColumnPage/>,
  },
  title: {
    to: 'title',
    name: 'Title',
    apiNameKey: 'Title',
    comp: <TitlePage/>,
  },
  paragraph: {
    to: 'paragraph',
    name: 'Paragraph',
    apiNameKey: 'Paragraph',
    comp: <ParagraphPage/>,
  },
  menu: {
    to: 'menu',
    name: 'Menu',
    apiNameKey: 'Menu',
    comp: <MenuPage/>,
  },
  menuitem: {
    to: 'menuitem',
    name: 'MenuItem',
    apiNameKey: 'MenuItem',
    comp: <MenuItemPage/>,
  },
  drop: {
    to: 'drop',
    name: 'Drop',
    apiNameKey: 'Drop',
    comp: <DropPage/>,
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

export default COMPONENT_ROUTE_MAP
