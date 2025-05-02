import {Col, Con, Input, Row, Title} from '@lite-u/ui'
import {useEffect, useRef} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const InputPage: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log(ref.current)
  })

  return <Col>
    <Title h4>Primary</Title>


    <Row start style space={10} wrap>
      <Con w={220}>
        <UsageBlock title={'xs'}>
          <Col between start space={10}>
            <Input label={'Name1:'} placeholder={'xs size warn'} xs/>
            <Input label={'Name2:'} placeholder={'xs size warn'} warn xs/>
            <Input label={'Name3:'} placeholder={'xs size error'} error xs/>
            <Input label={'First Name:'} placeholder={'xs size default'} xs/>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={200}>
        <UsageBlock title={'Small'}>
          <Col between center space={10}>
            <Input placeholder={'s size default'} s/>
            <Input placeholder={'s size warn'} warn s/>
            <Input placeholder={'s size error'} error s/>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={220}>
        <UsageBlock title={'Medium'}>
          <Col between center space={10}>
            <Input placeholder={'m size default'}/>
            <Input placeholder={'m size warn'} warn/>
            <Input placeholder={'m size error'} error/>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={300}>
        <UsageBlock title={'Large'}>
          <Col between center space={10}>
            <Input placeholder={'l size default'} l/>
            <Input placeholder={'l size warn'} warn l/>
            <Input placeholder={'l size error'} error l/>
          </Col>
        </UsageBlock>
      </Con>

      <Con w={300}>
        <UsageBlock title={'Number'}>
          <Col between center space={10}>
            <Input number value={1} step={2} placeholder={'size default'}/>
            <Input number value={1} step={2} placeholder={'size warn'} warn/>
            <Input number value={1} step={2} placeholder={'size error'} error/>
          </Col>
        </UsageBlock>
      </Con>

    </Row>
    {/*
    <Con w={300}>
      <UsageBlock title={'Large'}>
        <Col between center space={10}>
          <Input placeholder={'l size default'} l/>
          <Input placeholder={'l size warn'} warn l/>
          <Input placeholder={'l size error'} error l/>
        </Col>
      </UsageBlock>
    </Con>*/}

  </Col>
}

export default InputPage