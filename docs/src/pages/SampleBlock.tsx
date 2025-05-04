import {Button, Collapse, Con, Tooltip} from '@lite-u/ui'
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

  return <Con role={'usage-block'} fz={14} fh fw border borderColor={'#bababa'} color={'#333'} rounded ib p={14}
              style={style}>
    {title && <p>{title}</p>}
    <Con mt={6} mb={20} h={0} style={{borderTop: '1px dashed #dfdfdf'}}></Con>

    {children}

    <Con mt={30} mb={10} h={0} style={{borderTop: '1px dashed #dfdfdf'}}></Con>

    <Collapse open={false}
              duration={200}
              leaveDuration={100}
              head={
                <Tooltip title={'Code'}>
                  <Button xs style={{backgroundColor: '#f3f3f3'}}>{'</>'}</Button>
                </Tooltip>
              }>
      <Con pt={10}>
        <Con fw border rounded>
          <CodeWrap wrapStyle={{
            padding: 0,
            border: 'none',
            marginTop: 10,
            maxHeight: 200,
          }} code={`\n ${code}`}/>
        </Con>
      </Con>
    </Collapse>
  </Con>
}

export default SampleBlock