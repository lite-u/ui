import {Col, Con, Row, Select, SelectItem, Title} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'

const SelectPage: React.FC = () => {
  return <Col>

    <Row start space={10} wrap>
      <Con w={'auto'}>
        <UsageBlock title={'xs'}>
          <Row space={10} w={300} end>
            <Select s defaultValue={'2'}>
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
            <Select l defaultValue={'2'}
                    onChange={(v) => {
                      console.log(v)
                    }}>
              <SelectItem value={'1'}>hello 1</SelectItem>
              <SelectItem value={'2'}>hello 2</SelectItem>
              <SelectItem value={'3'}>hello 3</SelectItem>
            </Select>
          </Row>
        </UsageBlock>
      </Con>
      <Con w={'auto'}>

        <UsageBlock title={'xs'}>
          <Col space={10} w={100}>
            <Select s
                    defaultValue={'2'}
                    itemStyle={{
                      color: 'green',
                      backgroundColor: 'orange',
                    }}
                    style={{
                      width: 166,
                      color: 'red',
                      borderRadius: 20,
                    }}
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
            <Select l defaultValue={'2'}
                    onChange={(v) => {
                      console.log(v)
                    }}>
              <SelectItem value={'1'}>hello 1</SelectItem>
              <SelectItem value={'2'}>hello 2</SelectItem>
              <SelectItem value={'3'}>hello 3</SelectItem>
            </Select>
          </Col>
        </UsageBlock>

      </Con>
    </Row>

    <Col between>
      <Title h2 sticky style={{zIndex: 60}}>Select</Title>

      <Row style={{zIndex: 60}} space={10} end>

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