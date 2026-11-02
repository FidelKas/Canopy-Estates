import Button from './Button'

export default function ConfirmMessage({ title, text, onReset }) {
  return (
    <div className="confirm" role="status">
      <div className="confirm-icon">✓</div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Button variant="outline" onClick={onReset}>Submit another response</Button>
    </div>
  )
}