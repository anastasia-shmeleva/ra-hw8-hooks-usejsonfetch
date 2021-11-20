/* eslint-disable no-unused-vars */
import useJsonFetch from "../hooks/useJsonFetch";

export default function Error () {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', {});
  
  return <div className='request'>{
    error && <p>Error: {error}</p>
  }</div>
}