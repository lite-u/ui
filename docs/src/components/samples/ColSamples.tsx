import {Col, MenuItem, Row, Select, SelectItem, Title} from '@ui/index.tsx'

const ColSamples: React.FC = () => {
  return <Col id={'col'}>
    <Title h2>Col Column</Title>

    <Col between style={{}}>
      <Title h2 sticky style={{zIndex: 60}}>Select</Title>
      <Row style={{zIndex: 50}}>
        <Select id={'select'} style={{width: '100px', zIndex: 9}}>
          {
            Array.from({length: 100}).fill(undefined).map((_, index) => {
              return <SelectItem key={index}>
                <MenuItem>hello {index + 1}</MenuItem>
              </SelectItem>
            })
          }
        </Select>

        <Select id={'select'} style={{width: '100px', zIndex: 9}}>
          {
            ['px', 'mm', 'cm'].map((_, index) => {
              return <SelectItem key={index}>
                <MenuItem>hello {index + 1}</MenuItem>
              </SelectItem>
            })
          }
        </Select>
      </Row>

    </Col>
  </Col>
}

export default ColSamples