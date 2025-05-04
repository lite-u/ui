import {Button, Collapse, Con, P, Tooltip} from '@lite-u/ui'
import {CSSProperties, FC, ReactNode} from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import CodeWrap from '../components/codeBlock/CodeWrap.tsx'

const SampleBlock: FC<{ title: string, children: ReactNode, replacement?: string, style?: CSSProperties }> = ({
                                                                                                                title,
                                                                                                                children,
                                                                                                                replacement,
                                                                                                                style,
                                                                                                              }) => {
  let code = replacement || reactElementToJSXString(children, {
    tabStop: 2,
    // maxInlineAttributesLineLength: 40,
  })
  console.log(code)
  // replace inline
  code = code.replace(/<(\w+)>\s*([^<]+?)\s*<\/\1>/g, (_, tag, content) => {
    return `<${tag}>${content}</${tag}>`
  })

  return <Con role={'usage-block'} fh fw border borderColor={'#000'} rounded ib p={15} style={style}>
    {title && <P style={{marginBottom: 30}}>{title}</P>}

    {children}

    <Con mt={30} mb={20} h={0} style={{borderTop: '1px dashed #dfdfdf'}}></Con>

    <Collapse open={false}
              headStyle={{
                marginBottom: 10,
              }}
              duration={200}
              leaveDuration={100}
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

export default SampleBlock