import {Col, Con, Input, P, Row, Title} from '@lite-u/ui'
import {useEffect, useRef} from 'react'
import UsageBlock from '../UsageBlock.tsx'

const InputPage: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log(ref.current)
  })

  return <Col>
    <Title h4>Primary</Title>


    <Row center between>
      <Con w={200}>
        <UsageBlock title={'xs'}>
          <Col between center space={10}>
            <Input placeholder={'xs size default'} xs/>
            <Input placeholder={'xs size warn'} warn xs/>
            <Input placeholder={'xs size error'} error xs/>
          </Col>
        </UsageBlock>
      </Con>

    </Row>

    <Con w={600}>
      <P>xs</P>
      <Row space={6}>
        <Input xs/>
        <Input warn xs/>
        <Input error xs/>
      </Row>

      <P>Small</P>
      <Row space={6}>
        <Input s/>
        <Input warn s/>
        <Input error s/>
      </Row>

      <P>Medium</P>

      <Row space={6}>
        <Input m/>
        <Input warn m/>
        <Input error m/>
      </Row>

      <P>Large</P>

      <Row space={6}>
        <Input l/>
        <Input warn l/>
        <Input error l/>
      </Row>
    </Con>

    <Con>
      <P>Number</P>

      <Row space={6}>
        <Input step={0.1} placeholder={'hello'} number/>
        <Input step={0.1} number warn/>
        <Input number error/>
      </Row>
    </Con>

    <Input label={'hello'}/>
  </Col>
}

export default InputPage