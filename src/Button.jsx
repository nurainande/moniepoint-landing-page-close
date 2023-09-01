export function Button({ children, color = "#0361f0", onClick = "onClick",className='className' }) {
  return (
    <button style={{ background: color }} className="button" onClick={onClick}>
      {children}
    </button>
  );
}
