/* eslint-disable no-unused-vars */
import useJsonFetch from "../hooks/useJsonFetch";

export default function Loading () {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {});
  
  return <div className='request'>{
    loading && <p>Wait a moment please {'\n'} We are loading.....</p>
  }</div>
}