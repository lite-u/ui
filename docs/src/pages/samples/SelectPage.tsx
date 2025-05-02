import {Col, Con, Row, Select, SelectItem, useNotification} from '@lite-u/ui'
import UsageBlock from '../UsageBlock.tsx'
import {useState} from 'react'

const SelectPage: React.FC = () => {
  const {add} = useNotification()
  const [selectValue, setSelectValue] = useState('2')
  return <Col>

    <Row start space={10} wrap>
      <Con w={250}>
        <UsageBlock title={'Sizes'}>
          <Col space={10}>
            <Row fw center>
              <Con mr={2} w={20} ib>xs </Con>
              <Select xs defaultValue={'2'}>
                <SelectItem value={'1'}>1</SelectItem>
                <SelectItem value={'2'}>2</SelectItem>
                <SelectItem value={'3'}>3</SelectItem>
              </Select>
            </Row>

            <Row fw center>
              <Con mr={2} w={20} ib>s </Con>
              <Select s defaultValue={'2'}>
                <SelectItem value={'1'}>1</SelectItem>
                <SelectItem value={'2'}>2</SelectItem>
                <SelectItem value={'3'}>3</SelectItem>
              </Select>
            </Row>

            <Row fw center>
              <Con mr={2} w={20} ib>m </Con>
              <Select defaultValue={'2'}>
                <SelectItem value={'1'}>1</SelectItem>
                <SelectItem value={'2'}>2</SelectItem>
                <SelectItem value={'3'}>3</SelectItem>
              </Select>
            </Row>

            <Row fw center>
              <Con mr={2} w={20} ib>L </Con>
              <Select l defaultValue={'2'}>
                <SelectItem value={'1'}>1</SelectItem>
                <SelectItem value={'2'}>2</SelectItem>
                <SelectItem value={'3'}>3</SelectItem>
              </Select>
            </Row>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Long list'} replacement={`
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
        `}>
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
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Custom Style'}>
          <Col space={10} w={100}>
            <Select s
                    defaultValue={'2'}
                    itemStyle={{
                      color: 'green',
                      backgroundColor: '#000',
                    }}
                    style={{
                      width: 166,
                      color: 'orange',
                      backgroundColor: 'green',
                    }}>
              <SelectItem value={'1'}>1</SelectItem>
              <SelectItem value={'2'}>2</SelectItem>
              <SelectItem value={'3'}>3</SelectItem>
            </Select>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'onChange'}>
          <Col space={10} w={100}>
            <Select s
                    defaultValue={selectValue}
                    onChange={(v) => {
                      add('New Value is: ' + v)
                      setSelectValue(v as string)
                    }}>
              <SelectItem value={'1'}>1</SelectItem>
              <SelectItem value={'2'}>2</SelectItem>
              <SelectItem value={'3'}>3</SelectItem>
            </Select>
          </Col>
        </UsageBlock>
      </Con>

    </Row>
  </Col>
}

export default SelectPage