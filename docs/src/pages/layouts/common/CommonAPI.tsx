import {Col, Con, Link, Title} from '@lite-u/ui'
import API, {APIType} from '../../../components/api/API.tsx'

const CommonAPI = ({apiData}: { apiData: Record<string, APIType> }) => {

  if (Object.keys(apiData).length === 0) {return null}

  return <Con mt={100} mb={40}>
    <Col w={'auto'}>
      <Title h4 id="api"><Link href={'#api'}># API</Link></Title>

      <Con mb={30}></Con>
      <API data={apiData}/>

    </Col>
  </Con>
}

export default CommonAPI
