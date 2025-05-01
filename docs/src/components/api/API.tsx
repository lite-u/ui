import {Table, TableRow} from '@lite-u/ui'

type APIType = {
  defaultValue: null | boolean | string
  description: 'If true, applies the error color style.'
  required: false
  type: 'boolean'
}
const API = ({data}: { data: Record<string, APIType> }) => {
  if (!data) return null
  return <div>
    <Table fw fh fixed
           style={{
             fontSize: 14,
           }}
           cellStyle={{
             whiteSpace: 'pre-wrap',
             wordWrap: 'break-word',
             wordBreak: 'break-word',
           }}
    >
      <TableRow head>
        <span>name</span>
        <span>type</span>
        <span>required</span>
        <span>defaultValue</span>
        <span>description</span>
      </TableRow>
      {
        Object.keys(data).map((key, index) => {
          return <TableRow key={index}>
            <span>{key}</span>
            <span>{data[key].type}</span>
            <span>{data[key].required.toString()}</span>
            <span>{data[key].defaultValue ? data[key].defaultValue.toString() : '-'}</span>
            <span style={{
              whiteSpace: 'wrap',
            }}>{data[key].description}</span>
          </TableRow>
        })
      }
    </Table>
  </div>
}

export default API