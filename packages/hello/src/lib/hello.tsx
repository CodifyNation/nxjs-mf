
export default function hello({label} : {label: string}) {
  return (
    <button onClick={() => console.log('test')} style={{ padding: '10px', fontSize: '16px' }}>
      {label}
  </button>)
}
