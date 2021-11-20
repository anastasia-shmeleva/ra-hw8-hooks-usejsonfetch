/* eslint-disable no-unused-vars */
import useJsonFetch from "../hooks/useJsonFetch";

export default function Success () {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {});

  return <div className='request'>{
    data && <p>Request status: {data.status}</p>
  }</div>
}