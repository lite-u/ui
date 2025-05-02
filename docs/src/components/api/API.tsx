import {Table, TableRow} from '@lite-u/ui'
import {CSSProperties} from 'react'
import {Con} from '../../../../src'
import CodeBlock from '../codeBlock/codeBlock.tsx'
import MDBlock from '../codeBlock/MDBlock.tsx'

type APIType = {
  defaultValue: null | boolean | string
  description: 'If true, applies the error color style.'
  required: false
  type: 'boolean'
}

const API = ({data}: { data: Record<string, APIType> }) => {
  if (!data) return null
  // const headCellStyle = {minWidth: 100}
  const firstColStyle: CSSProperties = {width: '100%', textAlign: 'center', paddingLeft: 10}
  const lastColStyle: CSSProperties = {
    width: '100%', textAlign: 'center', paddingLeft: 10, whiteSpace: 'wrap',
  }

  return <Con mb={20}>
    <Table fw fh
           s
           style={{
             fontSize: 14,
           }}
      // headCellStyle={headCellStyle}
           cellStyle={{
             whiteSpace: 'pre-wrap',
             wordWrap: 'break-word',
             wordBreak: 'break-word',
             minWidth: 100,
           }}
    >
      <TableRow head>
        <p style={firstColStyle}>Property</p>
        <span>type</span>
        <span>Default Value</span>
        <span>required</span>
        <p style={lastColStyle}>description</p>
      </TableRow>
      {
        Object.keys(data).map((propName, index) => {
          let {type, required, defaultValue = '-', description} = data[propName]

          console.log(propName, defaultValue, defaultValue?.toString())

          return <TableRow key={index}>
            <span style={{...firstColStyle, fontFamily: 'monospace'}}>{propName}</span>
            <CodeBlock code={type}/>
            <div>
              <CodeBlock code={defaultValue.toString()}/>
            </div>
            {/* <span
              style={{color: defaultValue ? '#22863a' : '#000'}}>{defaultValue ? defaultValue.toString() : '-'}</span>*/}
            {/*<span style={{color: required ? '#22863a' : '#a52525'}}>{required.toString()}</span>*/}
            <CodeBlock code={required.toString()}/>

            <Con fz={14} pl={4} style={{...lastColStyle, lineHeight: '1.5rem'}}>
              <MDBlock>{description}</MDBlock>
            </Con>
            {/*<p style={lastColStyle}>{description}</p>*/}
          </TableRow>
        })
      }
    </Table>
  </Con>
}

export default API