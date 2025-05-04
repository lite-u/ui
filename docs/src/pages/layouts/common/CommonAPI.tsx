import {Col, Con, Link, Title} from '@lite-u/ui'
import API, {APIType} from '../../../components/api/API.tsx'

const ComponentAPI = ({apiData}: { apiData: Record<string, APIType> }) => {

  return <Con mt={100} mb={40}>
    <Col w={'auto'}>
      <Title h4 id="api"><Link href={'#api'}># API</Link></Title>

      <Con mb={30}></Con>
      <API data={apiData}/>

    </Col>
  </Con>
}

export default ComponentAPI
