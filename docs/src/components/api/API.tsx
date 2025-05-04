import {Table, TableRow} from '@lite-u/ui'
import {CSSProperties} from 'react'
import {Con} from '../../../../src'
import CodeBlock from '../codeBlock/codeBlock.tsx'
import MDBlock from '../codeBlock/MDBlock.tsx'

export type APIType = {
  defaultValue: null | boolean | number | string
  description: string
  required: boolean
  type: string
}

const API = ({data}: { data: Record<string, APIType> }) => {
  if (!data) return null
  // const headCellStyle = {minWidth: 100}
  const firstColStyle: CSSProperties = {width: '100%', textAlign: 'center', paddingLeft: 10}
  const lastColStyle: CSSProperties = {
    maxWidth: 300,
    width: '100%', textAlign: 'left', paddingLeft: 10, whiteSpace: 'wrap',
  }

  return <Con mb={20}>
    <Table fw fh
           xs
           style={{
             fontSize: 13,
           }}
      // headCellStyle={headCellStyle}
           cellStyle={{
             // padding:'0 10px',
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
          let {type, required, defaultValue, description} = data[propName]
          let loadDefaultValueAsBool = defaultValue === 'true' || defaultValue === 'false'

          return <TableRow key={index}>
            <span style={{...firstColStyle, fontFamily: 'monospace'}}>{propName}</span>

            <CodeBlock code={type}/>

            {
              loadDefaultValueAsBool ?
                <span style={{
                  fontFamily: 'monospace',
                  color: defaultValue === 'true' ? '#22863a' : '#a52525',
                }}>{defaultValue}</span>
                :
                <Con fz={14} pl={4} style={{...lastColStyle, lineHeight: '1.5rem'}}>
                  <MDBlock style={{textAlign: 'center'}}>{`${defaultValue}`}</MDBlock>
                </Con>
            }

            <span
              style={{fontFamily: 'monospace', color: required ? '#22863a' : '#a52525'}}>{required.toString()}</span>


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