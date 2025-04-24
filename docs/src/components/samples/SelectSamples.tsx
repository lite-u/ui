import {Col, MenuItem, Row, Select, SelectItem, Title} from '@ui/index.tsx'

const SelectSamples: React.FC = () => {
  return <Col>
    <Col between style={{}}>
      <Title h2 sticky style={{zIndex: 60}}>Select</Title>

      <Row style={{zIndex: 60}} space={10}>
        <Select defaultValue={'1'} id={'select'} style={{position: 'relative', width: '100px', zIndex: 100}}>
          <SelectItem value={'1'}>
            <MenuItem>hello 1</MenuItem>
          </SelectItem>
        </Select>

        <Select defaultValue={'12'} id={'select'} style={{position: 'relative', width: '100px', zIndex: 100}}>
          {
            Array.from({length: 100}).fill(undefined).map((_, index) => {
              return <SelectItem key={index} value={(index + 1) + ''}>
                <MenuItem>hello {index + 1}</MenuItem>
              </SelectItem>
            })
          }
        </Select>
      </Row>



    </Col>
  </Col>
}

export default SelectSamples