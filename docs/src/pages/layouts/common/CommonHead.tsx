import {Col, Con, Link, Title} from '@lite-u/ui'
import CodeWrap from '../../../components/codeBlock/CodeWrap.tsx'
import MDBlock from '../../../components/codeBlock/MDBlock.tsx'

const CommonHead = (
  {
    to,
    name,
    brief,
    intro,
    example,
  }
  : {
    to: string
    name: string,
    brief: string,
    intro: string,
    example: string,
  }) => {
  const space = 100

  return <Con maxW={620}>
    <Col>
      <Con mt={10}></Con>
      <Title id={to}>{name}</Title>

      <Con fz={15} pl={4} color={'#3f3f3f'} style={{lineHeight: '1.5rem'}}>
        <MDBlock>{brief}</MDBlock>
      </Con>

      <Con mt={space}></Con>
      <Title h4 id="description"><Link href={'#description'}># Description</Link></Title>

      <Con mt={10}></Con>
      <Con pl={0} fz={15} color={'#3f3f3f'} style={{lineHeight: '1.5rem'}}>
        <MDBlock>{intro}</MDBlock>
      </Con>

      <Con mt={space}></Con>
      <Title h4 id="usage"><Link href={'#usage'}># Usage</Link></Title>


      <Con mt={10}></Con>
      <CodeWrap wrapStyle={{maxWidth: 600}} code={`\n ${example}`}/>
      <Con m={'0 0 20px 0'}></Con>


      <Con mt={space}></Con>
      <Title h4 id="examples"><Link href={'#examples'}># Examples</Link></Title>

    </Col>
  </Con>
}

export default CommonHead