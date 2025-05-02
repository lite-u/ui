import {Col, Row, Select, SelectItem, Title} from '@lite-u/ui'

const SelectPage: React.FC = () => {
  return <Col>
    <Col between>
      <Title h2 sticky style={{zIndex: 60}}>Select</Title>

      <Row style={{zIndex: 60}} space={10} end>
        <Select s
                defaultValue={'2'}
                onChange={(v) => {
                  console.log(v)
                }}>
          <SelectItem value={'1'}>1</SelectItem>
          <SelectItem value={'2'}>2</SelectItem>
          <SelectItem value={'3'}>3</SelectItem>
        </Select>

        <Select m defaultValue={'2'}
                onChange={(v) => {
                  console.log(v)
                }}>
          <SelectItem value={'1'}>hello 1</SelectItem>
          <SelectItem value={'2'}>hello 2</SelectItem>
          <SelectItem value={'3'}>hello 3</SelectItem>
        </Select>

        <Select l defaultValue={'12'}>
          {
            Array.from({length: 100}).fill(undefined).map((_, index) => {
              return <SelectItem key={index} value={(index + 1) + ''}>
                <span>hello {index + 1}</span>
              </SelectItem>
            })
          }
        </Select>
      </Row>


    </Col>
  </Col>
}

export default SelectPage