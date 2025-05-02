import {Button, Collapse, Con, Title, Tooltip} from '@lite-u/ui'
import {CSSProperties, FC, ReactNode} from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import CodeWrap from '../components/codeBlock/CodeWrap.tsx'

const UsageBlock: FC<{ title: string, children: ReactNode, replacement?: string, style?: CSSProperties }> = ({
                                                                                                               title,
                                                                                                               children,
                                                                                                               replacement,
                                                                                                               style,
                                                                                                             }) => {
  let code = replacement || reactElementToJSXString(children, {
    tabStop: 2,
    maxInlineAttributesLineLength: 40,
  })

  // replace inline
  code = code.replace(/<(\w+)>\s*([^<]+?)\s*<\/\1>/g, (_, tag, content) => {
    return `<${tag}>${content}</${tag}>`
  })

  return <Con role={'usage-block'} fh fw border rounded ib p={15} style={style}>
    {title && <Title h6 style={{marginBottom: 30}}>{title}</Title>}

    {children}

    <Con mt={30} mb={20} h={0} style={{borderTop: '1px dashed #dfdfdf'}}></Con>

    <Collapse open={false}
              headStyle={{
                marginBottom: 10,
              }}
              head={
                <Tooltip title={'Code'}>
                  <Button xs style={{backgroundColor: '#f3f3f3'}}>{'</>'}</Button>
                </Tooltip>
              }>
      <Con fw border rounded p={'10px 0 10px 10px'}>
        <CodeWrap wrapStyle={{
          padding: 0,
          border: 'none',
          maxHeight: 200,
        }} code={`\n ${code}`}/>
      </Con>
    </Collapse>
  </Con>
}

export default UsageBlock