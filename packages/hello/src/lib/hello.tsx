export default function hello({ label }: { label: string }) {
  return (
    <button
      onClick={() => console.log('test 123')}
      style={{ padding: '10px', fontSize: '16px' }}
    >
      {label}
    </button>
  );
}
